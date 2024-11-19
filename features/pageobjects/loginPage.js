import { $, browser } from '@wdio/globals'

class LoginPage {

    /**
     * username element using Accessbility id.
     * @type {WebdriverIO.Element}
     */
    get userName(){
        return $('~test-Username')
    }

    /**
     * password element using Accessbility id.
     * @type {WebdriverIO.Element}
     */
    get password(){
        return $('~test-Password')
    }

    /**
     * login Button element using Accessbility id.
     * @type {WebdriverIO.Element}
     */
    get loginBtn(){
        return $('~test-LOGIN')
    }


    /**
     * error message element for android/ios
     * @type {WebdriverIO.Element}
     */
    get errorMessage(){
        if(browser.capabilities.platformName.toLowerCase()=='ios')
            return $('~test-Error message').$('XCUIElementTypeStaticText');
        else 
            return $('~test-Error message').$('.android.widget.TextView');
    }

    /**
     * Logs in with the provided credentials.
     * @param {string} username - The username to log in with.
     * @param {string} password - The password to log in with.
     */
    async enterDetailsAndLogin(username,password){
        await this.userName.setValue(username);
        await this.password.setValue(password);
        await this.loginBtn.click();
    }
}

export default new LoginPage()