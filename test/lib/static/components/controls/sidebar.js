import React from 'react';
import {mkConnectedComponent} from '../utils';
import Sidebar from 'lib/static/components/controls/common-controls';
import {Dropdown} from 'semantic-ui-react';

describe('<Sidebar />', () => {
    it('should show passed items as links in dropdown menu', () => {
        const component = mkConnectedComponent(<Sidebar />, {
            initialState: {sidebarItems: {some: 'link'}}
        });

        assert.equal(component.find(Dropdown.Item).first().text(), 'some');
        assert.equal(component.find(Dropdown.Item).first().props().children.props.href, 'link');
    });
});
