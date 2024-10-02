const fs = require('fs');

// 模拟浏览器环境
const { navigator, window, location, document, sessionStorage } = require('./JSTemplate/BrowserEnvironment');
global.navigator = navigator;
global.window = window;
global.location = location;
global.document = document;
global.sessionStorage = sessionStorage;

// 工具函数


// 明文模板
const template = {}

const mode = process.argv[2];

if (mode === "decrypt") {
    console.log(JSON.stringify(template));
    process.exit(0);
}

if (process.argv[2] === "encrypt") {
    const rawRequest = fs.readFileSync('temp/temp.txt', 'utf-8');

    const jsonData = JSON.parse(rawRequest);  // 根据要加密的参数是否为JSON格式选择
    const encryptedData = window.asy0y0(jsonData); // 假设这是你的加密函数
    const encodedData = encodeURIComponent(encryptedData);  // 可选择是否进行URL编码

    console.log('data=' + encodedData + '&crc=-1309814496');  // 输出符合原请求体格式的结果
    process.exit(0);
}
