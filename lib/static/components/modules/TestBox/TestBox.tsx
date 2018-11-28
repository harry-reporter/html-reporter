import * as React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Viewer from 'src/components/modules/TestBox/Viewer/Viewer';

interface TestBoxProps {}

const TestBox: React.SFC<TestBoxProps> = (props) => {
  return (
    <div className={'Box'}>
      <Header>Заголовок</Header>
      <SubHeader>Подзаголовок</SubHeader>
      <Viewer type={'code'} />
    </div>
  );
};

export default TestBox;
