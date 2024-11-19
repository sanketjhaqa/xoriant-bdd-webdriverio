import { $, browser, driver } from '@wdio/globals'


class DashboardPage
{   
    // get Element named as PRODUCTS from dashboard page 
    // finding element for IOS using IOS Class Chain
    // for android using Xpath
    
    get product(){
        if(browser.capabilities.platformName.toLowerCase()=='ios'){
            const selector = '**/XCUIElementTypeStaticText[`name == "PRODUCTS"`]';
            return $(`-ios class chain:${selector}`);
        }
       return $('//android.widget.TextView[@text="PRODUCTS"]')
    }
}

export default new DashboardPage()