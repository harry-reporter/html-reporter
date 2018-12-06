import * as React from 'react';
import cn from 'classnames';

import { SubNavStyled, SubNavItemStyled } from './styled';

import { PaginationProps, PaginationState } from './types';

class Pagination extends React.Component<PaginationProps, PaginationState> {
  private static defaultProps = {
    hasPreventDefault: false,
    dataList: [],
  };

  public state = {
    currentPage: 1,
  };

  public componentDidMount(): void {
    const { defaultCurrentPage } = this.props;
    this.setState({ currentPage: defaultCurrentPage });
  }

  public handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { hasPreventDefault } = this.props;

    if (hasPreventDefault) {
      e.preventDefault();
    }

    // TODO: убрать any
    const { dataset } = e.target as any;
    this.setState({ currentPage: Number(dataset.page) });
  }

  /**
   * Рендер элементов из списка
   *
   */
  public renderSubNavByDataList = (): React.ReactNode => {
    const { dataList } = this.props;
    const { currentPage } = this.state;

    return dataList.map((item, index) => {
      const page = index + 1;
      const cnSubNav = cn('subnav-item', { selected: currentPage === page });

      return (
        <SubNavStyled data-page={page} onClick={this.handleClick} className={cnSubNav} href={item.href} key={page}>
          {page}
        </SubNavStyled>
      );
    });
  }

  /**
   * Рендер элементов по количеству страниц
   *
   */
  public renderSubNavByMaxPage = (): React.ReactNode => {
    const { maxPage } = this.props;
    const { currentPage } = this.state;

    const subNavList: React.ReactNode[] = [];

    for (let i = 1; i < maxPage + 1; i++) {
      const cnSubNav = cn('subnav-item', { selected: currentPage === i });

      subNavList.push((
        <SubNavItemStyled
          key={i}
          className={cnSubNav}
          data-page={i}
          href={'#'}
          onClick={this.handleClick}
        >
          {i}
        </SubNavItemStyled>
      ));
    }

    return subNavList;
  }

  public render(): JSX.Element {
    const { dataList, maxPage } = this.props;

    if (!maxPage && (dataList.length === 0)) {
      return null;
    }

    const subNav: React.ReactNode = maxPage
      ? this.renderSubNavByMaxPage()
      : this.renderSubNavByDataList();

    return <SubNavStyled className={'subnav f6'}>{subNav}</SubNavStyled>;
  }
}

export default Pagination;
