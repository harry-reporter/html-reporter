import * as React from 'react';
import ButtonsGroup from 'src/components/ui/ButtonGroup/ButtonGroup';
import { Code, File, ListOrdered } from '@githubprimer/octicons-react';
import { ButtonProps } from 'src/components/ui/Button/types';

interface ControlViewersProps {}
interface ControlViewersState {
  selectedId: number;
}

class ControlViewers extends React.Component<ControlViewersProps, ControlViewersState> {
  public state = {
    selectedId: -1,
  };

  public handleClickAtButton = (id: number) => () => this.setState({ selectedId: id });

  public render(): JSX.Element {
    const { selectedId } = this.state;

    const buttonOptions: ButtonProps[] = [
      { title: '', size: 'sm', icon: Code, isSelected: selectedId === 0, onClick: this.handleClickAtButton(0) },
      { title: '', size: 'sm', icon: ListOrdered, isSelected: selectedId === 1, onClick: this.handleClickAtButton(1) },
      { title: '', size: 'sm', icon: File, isSelected: selectedId === 2, onClick: this.handleClickAtButton(2) },
    ];

    return (
      <ButtonsGroup
        className={'mr-3'}
        btns={buttonOptions}
      />
    );
  }
}

export default ControlViewers;
