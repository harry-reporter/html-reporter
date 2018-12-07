import * as React from 'react';

import Viewer from './Viewer';
import Header from './Header';

import { FeatureProps, IFeatureState } from './types';

// TODO: вынести функциионал по аккордеону в отдельную компоненту
class Feature extends React.Component<FeatureProps, IFeatureState> {
  public state = {
    isOpen: true,
    viewType: 'screenshot',
    viewData: this.props.data.result,
    pageCount: this.props.data.result.attempt,
    pageCurrent: this.props.data.result.attempt,
  };

  public componentDidMount(): void {
    const { data } = this.props;

    this.setState({
      isOpen: this.state.viewData.status === 'fail',
    });
  }

  public toggleFeature = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  public handleViewChange = (e) => {
    this.setState({ viewType: e });
  }
  public handleDataChange = (e) => {
    if (e === this.state.pageCount) {
      this.setState({ pageCurrent: e, viewData: this.props.data.result });
    } else {
      this.setState({ pageCurrent: e, viewData: this.props.data.retries[e] });
    }
  }

  public render(): JSX.Element {
    const { data } = this.props;
    const { isOpen } = this.state;
    const { name, result } = data;
    const headerProps = {
      data: this.state.viewData,
      title: name,
      isOpenedFeature: isOpen,
      status: this.state.viewData.status,
      onToggle: this.toggleFeature,
      handleViewChange: this.handleViewChange,
      viewType: this.state.viewType,
      handleDataChange: this.handleDataChange,
      pageCurrent: this.state.pageCurrent,
      pageCount: this.state.pageCount,
    };
    return (
      <div className={'Box-row p-0'}>
        <Header {...headerProps} />
        {isOpen && <Viewer type={this.state.viewType} {...this.state.viewData} />}
      </div>
    );
  }
}

export default Feature;
