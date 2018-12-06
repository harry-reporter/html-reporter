import * as React from 'react';

import './Loupe.css';

interface ILoupeProps {
  src: string;
  width?: number;
  height?: number;
  zoom: number;
  left?: string;
  top?: string;
  x: number;
  y: number;
  onMove: (e) => void;
  ref?: any;
}

export default class Loupe extends React.Component<ILoupeProps, {}> {
  public BORDERWIDTH = 3;
  private loupeRef;
  constructor(props) {
    super(props);
    this.loupeRef = React.createRef();
  }
  public componentDidMount() {
    this.loupeRef.current.addEventListener('mousemove', this.props.onMove);
    this.loupeRef.current.addEventListener('touchmove', this.props.onMove);
  }
  public render() {
    const w = !this.loupeRef.current ? 0 : this.loupeRef.current.offsetWidth / 2;
    const h = !this.loupeRef.current ? 0 : this.loupeRef.current.offsetHeight / 2;

    const posX = this.props.x * this.props.zoom - w + this.BORDERWIDTH;
    const posY = this.props.y * this.props.zoom - h + this.BORDERWIDTH;

    const style = {
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: `${this.props.width * this.props.zoom}px ${this.props.height * this.props.zoom}px`,
      left: this.props.left,
      top: this.props.top,
      backgroundPosition: `-${posX}px -${posY}px`,
    };

    return <div className='Loupe' style={style} ref={this.loupeRef} />;
  }
}
