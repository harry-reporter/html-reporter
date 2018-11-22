'use strict';

const PluginApi = require('lib/plugin-api');

describe('plugin api', () => {
    it('should store sidebar items', () => {
        const pluginApi = new PluginApi();

        pluginApi.addSidebarItem('some', 'item');

        assert.deepEqual(pluginApi.sidebarItems, {some: 'item'});
    });
});
