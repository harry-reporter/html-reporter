import * as React from 'react';
import cn from 'classnames';

import Pagination from 'src/components/ui/Pagination';
import StatusIcon from 'src/components/modules/TestBox/Feature/Status/Icon';
import Text from 'src/components/ui/Text/Text';
import { BrowserNameStyled } from './styled';

import { IStatusProps } from './types';
import { ColorType } from 'src/components/ui/types';
import { render } from 'react-dom';
import { TextProps } from 'src/components/ui/Text/types';

export default class Status extends React.PureComponent<IStatusProps> {
  public cnStatus = cn(this.props.className, 'd-flex flex-justify-between flex-items-center');

  public isFail = status === 'fail' || status === 'error';
  public statusColor: ColorType = this.isFail ? 'red' : 'green';
  public maxPage = this.props.data.attempt + 1;

  public render() {
    const textProps: TextProps = {
      as: 'span',
      className: this.cnStatus,
      textColor: this.statusColor,
      textType: 'bold',
    };

    const browserNamesStyledProps = {
      as: 'span',
      textType: 'bold',
      textColor: this.statusColor,
      mr: 6,
      onClick: this.props.onClickAtTitle,
    };
    const paginationProps = {
      defaultCurrentPage: this.maxPage,
      hasPreventDefault: true,
      pageCount: this.props.pageCount,
      handleDataChange: this.props.handleDataChange,
      pageCurrent: this.props.pageCurrent,
    };
    return (
      <Text {...textProps}>
        <StatusIcon mr={2} isFail={this.isFail} />
        <BrowserNameStyled {...browserNamesStyledProps}>{this.props.title}</BrowserNameStyled>
        <Text as={'span'} textColor={'gray'} mr={2}>
          <i>Attempts:</i>{' '}
        </Text>
        <Pagination {...paginationProps} />
      </Text>
    );
  }
}
