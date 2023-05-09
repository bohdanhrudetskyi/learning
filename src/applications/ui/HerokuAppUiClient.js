import { BaseAPP } from './BaseApp.js';
import * as library from "../../libraries/testLib.js"
export class HerokuAppUiClient extends BaseAPP{
    constructor(driver) {
        super(driver);
        this.startPage = library.START_PAGE_URL,
        this.addRemovePage = 'add_remove_elements/',
        this.addRemovePageHeaderCss = '#content > h3',
        this.basicAuthPage = 'basic_auth',
        this.brokenImagesPage = 'broken_images',
        this.checkboxesPage  = 'checkboxes',
        this.disappearingElementsPage = 'disappearing_elements',
        this.checkboxesCss  = '#checkboxes input[type="checkbox"]',
        this.disappearingElementsCss = '#content > div > h3',
        this.firstCheckboxCss = '#checkboxes > input[type=checkbox]:nth-child(1)',
        this.secondCheckboxCss = '#checkboxes > input[type=checkbox]:nth-child(3)',
        this.checkboxesHeaderCss = 'div.example h3',
        this.basicAuthTextTag = '#content > div > p',
        this.newObjectButtonXPath = '//*[@id="content"]/div/button';
        this.deleteButtonCss = '.added-manually',
        this.imageCss      =  'img',
        this.imageAttribute = 'naturalWidth',
        this.browser = 'chrome';
    }
//--------------------Browser-Section----------------------------------------------------    
    async startBrowser() {
        await super.openBrowser(this.browser);
    }
//------------------Open-Functions-section-----------------------------------------------
    async openHomePage() {
        await super.goTo(this.startPage);
    }

    async openAddRemovePage() {
        return await super.goTo(this.startPage + this.addRemovePage);
    }

    async openBasicAuthPage(username, password) {
        await super.goTo('https://' +username+ ':' +password+ '@' + 'the-internet.herokuapp.com/' + this.basicAuthPage);
    }

    async openBrokenImagesPage() {
        await super.goTo(this.startPage + this.brokenImagesPage);
    }

    async openCheckboxesPage() {
        await super.goTo(this.startPage + this.checkboxesPage);
    }

    async openDisappearingElementsPage() {
        await super.goTo(this.startPage + this.disappearingElementsPage);
    }
//------------------Find-Functions-Section-----------------------------------------------
    async findAddRemovePageHeader() {
        return await super.findElementsByCss(this.addRemovePageHeaderCss);
    }

    async findAuthSuccessText() {
        return super.findElementsByCss(this.basicAuthTextTag);
    }

    async findAuthNotSuccessText() {
        return super.findElementsByCss(this.basicAuthTextTag);
    }

    async findCheckboxesPageHeader() {
        return await super.findElementsByCss(this.checkboxesHeaderCss);
    }

    async findDisappearingElementsHeader() {
        return await super.findElementsByCss(this.disappearingElementsCss);
    }

    async findAllImages() {
        return super.checkIfImagesIsLoaded(this.imageCss, this.imageAttribute);
    }

    async findCheckboxesOnPage() {
        return await super.findElementsByCss(this.checkboxesCss);
    }

    async findHomeLink() {
        return await super.findElementsByLinkText(library.DISAPPEARING_ELEMENTS_HOME_LINK_TEXT);
    }

    async findAboutLink() {
        return await super.findElementsByLinkText(library.DISAPPEARING_ELEMENTS_ABOUT_LINK_TEXT);
    }

    async findContactUsLink() {
        return await super.findElementsByLinkText(library.DISAPPEARING_ELEMENTS_CONTACT_US_LINK_TEXT);
    }

    async findPortfolioLink() {
        return await super.findElementsByLinkText(library.DISAPPEARING_ELEMENTS_PORTFOLIO_LINK_TEXT);
    }

    async findGalleryLink() {
        return await super.findElementsByLinkText(library.DISAPPEARING_ELEMENTS_GALLERY_LINK_TEXT);
    }
//-------------------Click-Functions-Section---------------------------------------------
    async clickOnAddElementButton(countOfElements = 1) {
        await super.clickOnElementByXPath(this.newObjectButtonXPath, countOfElements);
        await super.waitForNewElementsToAppear(this.deleteButtonCss);
    }

    async clickDeleteButton(countOfTimes = 1) {
        return super.clickOnElementByCss(this.deleteButtonCss, countOfTimes);
    }

    async clickFirstCheckbox(countOfTimes = 1) {
        return super.clickOnElementByCss(this.firstCheckboxCss, countOfTimes);
    }

    async clickSecondCheckbox(countOfTimes = 1) {
        return super.clickOnElementByCss(this.secondCheckboxCss, countOfTimes);
    }
//------------------Get-Functions-Section------------------------------------------------
    async getCountOfDeleteButtons() {
        return super.waitForNewElementsToAppear(this.deleteButtonCss);
    }

    async getCurrentUrl() {
        return super.getCurrentPageUrl();
    }
//------------------Quit-Browser-Function------------------------------------------------
    async quitFromBrowser() {
        return super.quit();
    }
}