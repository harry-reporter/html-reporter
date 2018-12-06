import * as React from 'react';

import './types';
import './ImageDiffOnionSkin.css';

export default class ImageDiffOnionSkin extends React.Component<IImageDiffOnionSkin> {
  public render() {
    const beforeStyle = {
      opacity: this.props.value,
    };

    const afterStyle = {
      opacity: 1 - this.props.value,
    };

    return (
      <div className='ImageDiffSwipe'>
        <div className='ImageDiffSwipe__inner'>
          <div className='ImageDiffSwipe__before ' style={beforeStyle}>
            <img src={this.props.before} className='ImageDiffSwipe__imgBefore border border-green' />
          </div>
          <div className='ImageDiffSwipe__after ' style={afterStyle}>
            <img src={this.props.after} className='ImageDiffSwipe__imgAfter border border-red' />
          </div>
        </div>
      </div>
    );
  }
}
