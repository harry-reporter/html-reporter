'use strict';

module.exports = class HtmlReporter {
    constructor() {
        this._sidebarItems = {};
    }

    addSidebarItem(key, value) {
        this._sidebarItems[key] = value;
    }

    get sidebarItems() {
        return this._sidebarItems;
    }
};
