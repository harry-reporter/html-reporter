import * as React from 'react';
import ButtonsGroup from 'src/components/ui/ButtonGroup/ButtonGroup';
import { Code, File, ListUnordered } from '@githubprimer/octicons-react';
import { ButtonProps } from 'src/components/ui/Button/types';

interface ControlViewersProps {
  selectedId: number;
  handleViewChange: (e: any) => void;
  viewType: string;
}
interface ControlViewersState {
  selectedId: number;
}

export default class ControlViewers extends React.PureComponent<ControlViewersProps, ControlViewersState> {
  public state = {
    selectedId: -1,
  };

  // public handleClickAtButton = (id: number) => () => this.setState({ selectedId: id });

  public handleClickAtButton = (viewType: string) => () => {
    this.props.handleViewChange(viewType);
  }

  public render(): JSX.Element {
    const { selectedId } = this.state;

    const buttonOptions: ButtonProps[] = [
      {
        title: '',
        size: 'sm',
        icon: Code,
        isSelected: this.props.viewType === 'code',
        onClick: this.handleClickAtButton('code'),
      },
      {
        title: '',
        size: 'sm',
        icon: ListUnordered,
        isSelected: this.props.viewType === 'tests',
        onClick: this.handleClickAtButton('tests'),
      },
      {
        title: '',
        size: 'sm',
        icon: File,
        isSelected: this.props.viewType === 'screenshot',
        onClick: this.handleClickAtButton('screenshot'),
      },
    ];

    return <ButtonsGroup className={'mr-3'} btns={buttonOptions} />;
  }
}
