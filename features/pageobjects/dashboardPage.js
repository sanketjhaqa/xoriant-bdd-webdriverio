import { $, browser, driver } from '@wdio/globals'


class DashboardPage
{
    get product(){
        if(browser.capabilities.platformName.toLowerCase()=='ios'){
            const selector = '**/XCUIElementTypeStaticText[`name == "PRODUCTS"`]';
            return $(`-ios class chain:${selector}`);
        }
       return $('//android.widget.TextView[@text="PRODUCTS"]')
    }
}

export default new DashboardPage()