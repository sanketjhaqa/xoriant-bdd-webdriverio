import { $ } from '@wdio/globals'

class LoginPage {


    get userName(){
        return $('~test-Username')
    }

    get password(){
        return $('~test-Password')
    }

    get loginBtn(){
        return $('~test-LOGIN')
    }

    async enterDetailsAndLogin(username,password){
       
        await this.userName.setValue(username);

        await this.password.setValue(password);
        
        await this.loginBtn.click();
    }
}

export default new LoginPage()