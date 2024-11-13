import { Given, When, Then, BeforeStep, AfterStep } from '@wdio/cucumber-framework'
import { expect } from 'expect-webdriverio'
import { browser, driver } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage'
import DashboardPage from '../pageobjects/dashboardPage'


Given('User should be on login page',async()=>{
    await expect(LoginPage.loginBtn).toBeDisplayed();
});

When('User log into the app with {string} and {string}', async (username,password)=>{
	await LoginPage.enterDetailsAndLogin(username,password);
});

Then('User should see text {string} on dashboard', async(text)=> {
	// await expect(DashboardPage.product).toBeDisplayed();
	await expect(DashboardPage.product).toHaveText(text);
});

