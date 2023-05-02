import { Builder, By, Key, until } from 'selenium-webdriver';
import { BaseAPP } from './BaseApp.js';
export class HerokuAppUiClient extends BaseAPP{
    constructor(driver) {
        super(driver);
        this.startPage = 'http://the-internet.herokuapp.com';
        this.addRemovePage = '/add_remove_elements/',
        this.newObjectButtonXPath = '//*[@id="content"]/div/button';
        this.usernameFieldId = 'login_field';
        this.passwordFieldId = 'password';
        this.deleteButtonCss = '.added-manually',
        this.forgotPasswordButtonClass = 'label-link position-absolute top-0 right-0';
        this.browser = 'chrome';
    }
    async startBrowser() {
        await super.openBrowser(this.browser)
    }

    async openHomePage() {
        await super.goTo(this.startPage);
    }

    async openAddRemovePage() {
        await super.goTo(this.startPage + this.addRemovePage);
        return this.driverPromise
    }

    async clickOnAddElementButton(countOfElements = 1) {
        super.clickOnElementByXPath(this.newObjectButtonXPath, countOfElements);
    }

    async clickDeleteButton(countOfTimes = 1) {
        super.clickOnElementByCss(this.deleteButtonCss, countOfTimes)
    }

    async countOfDeleteButtons() {
        return super.waitForNewElementsToAppear(this.deleteButtonCss)
    }

    async clickPasswordField() {
        super.clickOnElementById(this.passwordFieldId);
    }

    async clickForgorPasswordButton() {
        super.clickOnElementById(this.forgotPasswordButtonClass);
    }

    async inputUsernameField(text) {
        super.typeText(this.usernameFieldId, text);
    }

    async inputPasswordField(text) {
        super.typeText(this.passwordFieldId, text);
    }

    async quitFromBrowser() {
        return super.quit();
    }
}