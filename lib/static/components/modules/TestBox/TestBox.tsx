import * as React from 'react';

import Header from './Header';
import Feature from './Feature';

import { TestBoxProps, TestBoxState } from 'src/components/modules/TestBox/types';
import { TestStatus } from 'src/components/types';

const propsData: any = {
  title:
    'Колдунщик картинок / Многорядный в правой колонке с большой кнопкой перехода на Картинки ' +
    '/ Кнопка "Еще картинки" с фоном вместо большой кнопки и тумбами со скруглениями и отступами ' +
    'Четырехрядный Нажатие на картинку открывает сервис',
  check: [
    {
      status: 'fail',
      title: 'edge-desktop',
      tab: 2,
      attempt: 2,
      asserts: [
        {
          status: 'fail',
          title: 'lang-popup',
          images: {
            expected: 'assets/images/1/edge-desktop_ref_7.png',
            actual: 'assets/images/1/edge-desktop_current_7.png',
            diff: 'assets/images/1/edge-desktop_diff_7.png',
          },
        },
        {
          status: 'success',
          title: 'lang-popup2',
        },
      ],
    },
  ],
};

class TestBox extends React.Component<TestBoxProps, TestBoxState> {
  public state = {
    isOpen: true,
  };

  public toggleBox = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public renderFeatures = (): JSX.Element => {
    const { check } = propsData;

    // TODO: найти уникальный ключ
    return check.map((item: any, id: number) => <Feature key={id} data={item} />);
  }

  public getStatus = (check): TestStatus => {
    const isFailTest = check.some((item) => item.status === 'fail');
    return isFailTest ? 'fail' : 'success';
  }

  public render(): JSX.Element {
    const { isOpen } = this.state;
    const { title, check } = propsData;

    const status = this.getStatus(check);

    return (
      <div className={'Box'}>
        <Header title={title} status={status} isOpenedBox={isOpen} onToggle={this.toggleBox} />
        {isOpen && this.renderFeatures()}
      </div>
    );
  }
}

export default TestBox;
