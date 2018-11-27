import * as React from 'react';

import './Pagination.scss';

class Pagination extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className='Pagination pl-4 d-flex flex-items-center'>
          <p className='Pagination-title text-gray m-0'>
            <em>Attempts:</em>
          </p>
          <nav className='subnav m-0 pl-2' aria-label='Attempts'>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              1
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              2
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              3
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              4
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              5
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              6
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5'>
              7
            </a>
            <a href='#url' className='subnav-item py-1 px-2.5 selected' aria-current='page'>
              8
            </a>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default Pagination;
