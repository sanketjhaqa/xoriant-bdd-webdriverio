import { $ } from '@wdio/globals'

class LoginPage {

    // get username field using accessbility-id
    get userName(){
        return $('~test-Username')
    }

     // get password field using accessbility-id
    get password(){
        return $('~test-Password')
    }

    // get login btn using accessbility-id
    get loginBtn(){
        return $('~test-LOGIN')
    }


    // entering login details and login into the dashboard
    async enterDetailsAndLogin(username,password){
       
        await this.userName.setValue(username);

        await this.password.setValue(password);
        
        await this.loginBtn.click();
    }
}

export default new LoginPage()