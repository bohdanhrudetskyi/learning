import { BaseAPP } from './BaseApp.js';
import * as library from "../../libraries/testLib.js"
import * as locator from "../../libraries/locators.js"
export class HerokuAppUiClient extends BaseAPP{
    constructor(driver) {
        super(driver);
        this.addRemovePageHeaderCss = locator.addRemovePageHeaderCss,
        this.checkboxesCss  = locator.checkboxesCss,
        this.disappearingElementsHeaderCss = locator.disappearingElementsHeaderCss,
        this.dragAndDropHeaderCss = locator.dragAndDropHeaderCss,
        this.firstCheckboxCss = locator.firstCheckboxCss,
        this.secondCheckboxCss = locator.secondCheckboxCss,
        this.checkboxesHeaderCss = locator.checkboxesHeaderCss,
        this.basicAuthTextTag = locator.basicAuthTextTag,
        this.newObjectButtonXPath = locator.newObjectButtonXPath;
        this.deleteButtonCss = locator.deleteButtonCss,
        this.imageCss      =  locator.imageCss,
        this.imageAttribute = 'naturalWidth',
        this.browser = 'chrome';
    }
//--------------------Browser-Section----------------------------------------------------    
    async startBrowser() {
        await super.openBrowser(this.browser);
    }
//------------------Open-Functions-section-----------------------------------------------
    async openHomePage() {
        await super.goTo(library.HOME_PAGE_URL);
    }

    async openAddRemovePage() {
        return await super.goTo(library.HOME_PAGE_URL + library.ADD_REMOVE_PAGE_URL);
    }

    async openBasicAuthPage(username, password) {
        await super.goTo('https://' +username+ ':' +password+ '@' + 'the-internet.herokuapp.com/' + library.BASIC_AUTHENTICATION_PAGE_URL);
    }

    async openBrokenImagesPage() {
        await super.goTo(library.HOME_PAGE_URL + library.BROKEN_IMAGES_PAGE_URL);
    }

    async openCheckboxesPage() {
        await super.goTo(library.HOME_PAGE_URL + library.CHECKBOXES_PAGE_URL);
    }

    async openDisappearingElementsPage() {
        await super.goTo(library.HOME_PAGE_URL + library.DISAPPEARING_ELEMENTS_PAGE_URL);
    }

    async openDragAndDropPage() {
        await super.goTo(library.HOME_PAGE_URL + library.DRAG_AND_DROP_PAGE_URL)
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
        return await super.findElementsByCss(this.disappearingElementsHeaderCss);
    }

    async findDragAndDropHeader() {
        return await super.findElementsByCss(this.dragAndDropHeaderCss);
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