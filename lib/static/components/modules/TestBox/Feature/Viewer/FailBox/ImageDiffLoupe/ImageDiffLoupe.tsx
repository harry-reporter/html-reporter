import * as React from 'react';

import '../ImageDiffLoupe/ImageDiffLoupe.css';
import Loupe from './Loupe/Loupe';

interface IImageDiffProps {
  after: string;
  before: string;
  zoom: number;
  className?: string;
}
interface IImageDiffState {
  top: string;
  left: string;
  x: number;
  y: number;
}
const BORDERWIDTH = 3;

export default class ImageDiffLoupe extends React.Component<IImageDiffProps, IImageDiffState> {
  public loupeRef;
  public imgRef;

  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.loupeRef = React.createRef();
    this.state = { top: '0', left: '0', x: 0, y: 0 };
  }
  public componentDidMount() {
    this.imgRef.current.addEventListener('mousemove', this.moveMagnifier);
    this.imgRef.current.addEventListener('touchmove', this.moveMagnifier);
  }
  public moveMagnifier = (e) => {
    const w = !this.loupeRef.current ? 0 : this.loupeRef.current.loupeRef.current.offsetWidth / 2;
    const h = !this.loupeRef.current ? 0 : this.loupeRef.current.loupeRef.current.offsetHeight / 2;
    const width = !this.imgRef.current ? 0 : this.imgRef.current.width;
    const height = !this.imgRef.current ? 0 : this.imgRef.current.height;

    e.preventDefault();
    const pos = this.getCursorPos(e);
    let x = pos.x;
    let y = pos.y;

    if (x > width - w / this.props.zoom) {
      x = width - w / this.props.zoom;
    }
    if (x < w / this.props.zoom) {
      x = w / this.props.zoom;
    }

    if (y > height - h / this.props.zoom) {
      y = height - h / this.props.zoom;
    }
    if (y < h / this.props.zoom) {
      y = h / this.props.zoom;
    }

    const left = `${x - w}px`;
    const top = `${y}px`;

    this.setState({ top, left, x, y });
  }

  public getCursorPos(e) {
    e = e || window.event;

    const a = this.imgRef.current.getBoundingClientRect();

    let x = e.pageX - a.left;
    let y = e.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x, y };
  }

  public render() {
    return (
      <div className={this.props.className}>
        <div className='ImageDiffLoupe d-flex flex-justify-center'>
          <div className='ImageDiffLoupe-container'>
            <div className='ImageDiffLoupe__before'>
              <Loupe
                src={this.props.before}
                width={!this.imgRef.current ? null : this.imgRef.current.width}
                height={!this.imgRef.current ? null : this.imgRef.current.height}
                zoom={this.props.zoom}
                left={this.state.left}
                top={this.state.top}
                x={this.state.x}
                y={this.state.y}
                onMove={this.moveMagnifier}
                ref={this.loupeRef}
              />
              <p className={`ImageDiffLoupe__before Title text-green text-bold`}>Expected</p>
              <img
                className='ImageDiffLoupe__beforeImg border border-green'
                src={this.props.before}
                ref={this.imgRef}
              />
            </div>
          </div>
          <div className='ImageDiffLoupe-container'>
            <Loupe
              src={this.props.after}
              width={!this.imgRef.current ? null : this.imgRef.current.width}
              height={!this.imgRef.current ? null : this.imgRef.current.height}
              zoom={this.props.zoom}
              left={this.state.left}
              top={this.state.top}
              x={this.state.x}
              y={this.state.y}
              onMove={this.moveMagnifier}
            />
            <div className='ImageDiffLoupe__after'>
              <p className={`ImageDiffLoupe__after Title text-red text-bold`}>Actual</p>
              <img className='ImageDiffLoupe__afterImg border border-red' src={this.props.after} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
