const { join } = require('path')

exports.config = {
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{

        "platformName": "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:appWaitActivity": ".MainActivity",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".SplashActivity"

    }]
}