import { BaseAPP } from './BaseApp.js';
export class HerokuAppUiClient extends BaseAPP{
    constructor(driver) {
        super(driver);
        this.startPage = 'http://the-internet.herokuapp.com';
        this.addRemovePage = '/add_remove_elements/',
        this.basicAuthPage = '/basic_auth',
        this.brokenImagesPage = '/broken_images',
        this.basicAuthTextTag = '#content > div > p',
        this.newObjectButtonXPath = '//*[@id="content"]/div/button';
        this.deleteButtonCss = '.added-manually',
        this.imageCss      =  'img',
        this.imageAttribute = 'naturalWidth',
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
        return await super.goTo(this.startPage + this.addRemovePage);
    }

    async openBasicAuthPage(username, password) {
        await super.goTo('https://' +username+ ':' +password+ '@' + 'the-internet.herokuapp.com' + this.basicAuthPage);
    }

    async openBrokenImagesPage() {
        await super.goTo(this.startPage + this.brokenImagesPage);
    }

    async clickOnAddElementButton(countOfElements = 1) {
        await super.clickOnElementByXPath(this.newObjectButtonXPath, countOfElements);
        await super.waitForNewElementsToAppear(this.deleteButtonCss);
    }

    async clickDeleteButton(countOfTimes = 1) {
        return super.clickOnElementByCss(this.deleteButtonCss, countOfTimes)
    }

    async findAllImages() {
        return super.checkIfImagesIsLoaded(this.imageCss, this.imageAttribute)
    }

    async getCountOfDeleteButtons() {
        return super.waitForNewElementsToAppear(this.deleteButtonCss)
    }

    async findAuthSuccessText() {
        return super.findElementsByCss(this.basicAuthTextTag);
    }

    async findAuthNotSuccessText() {
        return super.findElementsByCss(this.basicAuthTextTag);
    }

    async quitFromBrowser() {
        return super.quit();
    }
}