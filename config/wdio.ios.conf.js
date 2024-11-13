import path from 'path';
import { config as sharedConfig } from '../config/wdio.shared.conf.js';

sharedConfig.capabilities = 
[{
    'appium:platformName': 'ios',
    'appium:app': path.join(process.cwd(), 'app/ios/iOS.Sample.app.2.7.1.app'),  
    'appium:deviceName': 'iPhone 15 Pro',
    'appium:platformVersion': '17.2',
    'appium:automationName': 'xcuitest',
    'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:autoGrantPermissions': true,
    'appium:appId':'com.saucelabs.SwagLabsMobileApp',
    'cjson:metadata':{
        device: 'Pixel 8 Pro',
        platform:{
            name:'Android',
            version : '14.0'
        }
    }
}];

sharedConfig.port = 4723;

export {sharedConfig as config}