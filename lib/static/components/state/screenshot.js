'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Placeholder from './placeholder';

class Screenshot extends Component {
    static propTypes = {
        noCache: PropTypes.bool,
        image: PropTypes.shape({
            path: PropTypes.string.isRequired,
            size: PropTypes.shape({
                width: PropTypes.number,
                height: PropTypes.number.isRequired
            }).isRequired
        }).isRequired,
        lazyLoadOffset: PropTypes.number
    }

    static defaultProps = {
        noCache: false
    }

    render() {
        const {noCache, image, lazyLoadOffset: offset} = this.props;

        const url = noCache
            ? addTimestamp(encodeUri(image.path))
            : encodeUri(image.path);

        const elem = <img
            src={url} width={image.size.width} height={image.size.height} className="image-box__screenshot"
        />;

        if (!offset) {
            return elem;
        }

        const placeholder = <Placeholder width={image.size.width} height={image.size.height} />;

        return <LazyLoad offsetVertical={offset} placeholder={placeholder} once>{elem}</LazyLoad>;
    }
}

export default connect(({view: {lazyLoadOffset}}) => ({lazyLoadOffset}))(Screenshot);

function encodeUri(imagePath) {
    return imagePath
        .split('/')
        .map((item) => encodeURIComponent(item))
        .join('/');
}

// for prevent image caching
function addTimestamp(imagePath) {
    return `${imagePath}?t=${Date.now()}`;
}
