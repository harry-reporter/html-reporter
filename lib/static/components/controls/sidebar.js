'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/icon.css';

class Sidebar extends Component {
    static propTypes = {sidebarItems: PropTypes.object.isRequired};

    format() {
        const {sidebarItems} = this.props;

        return Object.keys(sidebarItems).map((key, i) => (
            <Dropdown.Item key={i}>
                <a href={sidebarItems[key]}>{key}</a>
            </Dropdown.Item>
        ));
    }

    render() {
        return (
            <div className='sidebar-container'>
                <Dropdown item icon='bars' simple direction='left'>
                    <Dropdown.Menu>
                        {this.format()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default connect(({sidebarItems}) => ({sidebarItems}))(Sidebar);
