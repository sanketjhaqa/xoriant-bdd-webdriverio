import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from 'expect-webdriverio'
import LoginPage from '../pageobjects/loginPage'
import DashboardPage from '../pageobjects/dashboardPage'


Given('User should be on login page', async () => {
	await expect(LoginPage.loginBtn).toBeDisplayed();
});



When('User log into the app with {string} and {string}', async (username, password) => {
	await LoginPage.enterDetailsAndLogin(username, password);
});


Then('User should see text {string}', async (text) => {
	let element = ""
    try {
        let flag = await DashboardPage.product.isExisting();
		if (flag) {
			console.log('Element exists!');
			element = await DashboardPage.product;
		} else {
			console.log('Not logged into the dashboard Element does not exist!');
			element = await LoginPage.errorMessage;
		}
    } catch (error) {
        console.error('Error while checking element existence:', error);
    }
	await expect(element).toHaveText(text)
});

