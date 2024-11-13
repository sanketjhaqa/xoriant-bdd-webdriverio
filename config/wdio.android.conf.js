import path from 'path';
import { config as sharedConfig } from '../config/wdio.shared.conf.js';

sharedConfig.capabilities = 
[{
    'appium:platformName': 'Android',
    'appium:app': path.join(process.cwd(), 'app/android/Sample.apk'),  
    'appium:deviceName': 'Pixel_8_Pro',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',
    'appium:appWaitActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:autoGrantPermissions': true,
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