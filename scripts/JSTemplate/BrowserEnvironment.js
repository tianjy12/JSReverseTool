const documentMock = {
    createElement: function (tagName) {
        return {
            tagName: tagName.toUpperCase(),
            attributes: {},
            setAttribute: function (name, value) {
                this.attributes[name] = value;  // 存储属性
            },
            appendChild: function (child) {
                // 可以简单模拟 appendChild 的行为
            }
        };
    },

    getElementById: function (id) {
        return null;
    },

    head: {
        children: [],
        appendChild: function (element) {
            this.children.push(element);  // 将元素添加到 head 的 children 数组中
        }
    }
};

const navigatorMock = {
    userAgent: 'node.js',
    platform: process.platform,
    language: 'en-US'
};

const windowMock = {
    location: {
        href: 'http://example.com',
        origin: 'http://example.com',
        pathname: '/some/path',
        protocol: 'http:',
        host: 'example.com',
        hostname: 'example.com',
        port: '',
        search: '',
        hash: ''
    }
};

const locationMock = {
    href: 'http://example.com',
    origin: 'http://example.com',
    pathname: '/some/path',
    protocol: 'http:',
    host: 'example.com',
    hostname: 'example.com',
    port: '',
    search: '',
    hash: ''
};

const sessionStorageMock = {
    _data: {},
    setItem: function (key, value) {
        this._data[key] = String(value);
    },
    getItem: function (key) {
        return this._data.hasOwnProperty(key) ? this._data[key] : null;
    },
    removeItem: function (key) {
        delete this._data[key];
    },
    clear: function () {
        this._data = {};
    }
};

// 导出所有模拟的对象
module.exports = {
    navigator: navigatorMock,
    window: windowMock,
    location: locationMock,
    document: documentMock,
    sessionStorage: sessionStorageMock
};
