import * as React from 'react';

import './Pagination.scss';

interface IPaginationProps {
  pages: number;
}

class Pagination extends React.Component<IPaginationProps> {
  public render() {
    return (
      <React.Fragment>
        <div className='Pagination pl-4 d-flex flex-items-center'>
          <p className='Pagination-title text-gray m-0'>
            <em>Attempts:</em>
          </p>
          <nav className='subnav m-0 pl-2' aria-label='Attempts'>
            {Array.from({ length: this.props.pages })
              .fill(0)
              .map((elem, index, arr) => {
                if (index + 1 === arr.length)
                  return (
                    <a href='#url' className='subnav-item py-1 px-2.5 selected' key={index}>
                      {index + 1}
                    </a>
                  );
                else
                  return (
                    <a href='#url' className='subnav-item py-1 px-2.5' key={index}>
                      {index + 1}
                    </a>
                  );
              })}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default Pagination;
