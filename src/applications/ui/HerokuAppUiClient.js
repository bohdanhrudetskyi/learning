import { BaseAPP } from './BaseApp.js';
import * as library from "../../libraries/testLib.js"
import * as locator from "../../libraries/locators.js"
export class HerokuAppUiClient extends BaseAPP{
    constructor(driver) {
        super(driver);
        this.imageAttribute = 'naturalWidth',
        this.browser = 'chrome'
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
        await super.goTo(library.HOME_PAGE_URL + library.DRAG_AND_DROP_PAGE_URL);
    }

    async openDropdownPage() {
        await super.goTo(library.HOME_PAGE_URL + library.DROPDOWN_PAGE_URL);
    }

    async openLoginPage() {
        await super.goTo(library.HOME_PAGE_URL + library.LOGIN_PAGE_URL);
    }
//------------------Find-Functions-Section-----------------------------------------------
    async findAddRemovePageHeader() {
        return await super.findElementsByCss(locator.ADD_REMOVE_PAGE_HEADER_CSS);
    }

    async findAuthSuccessText() {
        return super.findElementsByCss(locator.BASIC_AUTH_TEXT_TAG);
    }

    async findAuthNotSuccessText() {
        return super.findElementsByCss(locator.BASIC_AUTH_TEXT_TAG);
    }

    async findCheckboxesPageHeader() {
        return await super.findElementsByCss(locator.CHECKBOXES_HEADER_CSS);
    }

    async findDisappearingElementsHeader() {
        return await super.findElementsByCss(locator.DISAPPEARING_ELEMENTS_HEADER_CSS);
    }

    async findDragAndDropHeader() {
        return await super.findElementsByCss(locator.DRAG_AND_DROP_HEADER_CSS);
    }

    async findDropdownHeader() {
        return await super.findElementsByCss(locator.DROPDOWN_HEADER_CSS);
    }

    async findDropdownOptions() {
        return await super.findElementsByCss(locator.DROPDOWN_OPTIONS_TAG);
    }

    async findAllImages() {
        return super.checkIfImagesIsLoaded(locator.IMAGE_CSS, this.imageAttribute);
    }

    async findCheckboxesOnPage() {
        return await super.findElementsByCss(locator.CHECKBOXES_CSS);
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

    async findElementsOnDragAndDropPage() {
        return await super.findElementsByClass(locator.DRAG_AND_DROP_ELEMENTS_CLASS);
    }

    async findLoggedUserPageHeader() {
        return await super.findElementsByCss(locator.LOGGED_USER_HEADER_TEXT_CSS);
    }

    async findLoginPageHeader() {
        return await super.findElementsByCss(locator.LOGIN_PAGE_HEADER_TEXT_CSS);
    }
//-------------------Click-Functions-Section---------------------------------------------
    async clickOnAddElementButton(countOfElements = 1) {
        await super.clickOnElementByXPath(locator.NEW_OBJECT_BUTTON_XPATH, countOfElements);
        await super.waitForNewElementsToAppear(locator.DELETE_BUTTON_CSS);
    }

    async clickDeleteButton(countOfTimes = 1) {
        return super.clickOnElementByCss(locator.DELETE_BUTTON_CSS, countOfTimes);
    }

    async clickFirstCheckbox(countOfTimes = 1) {
        return super.clickOnElementByCss(locator.FIRST_CHECKBOX_CSS, countOfTimes);
    }

    async clickSecondCheckbox(countOfTimes = 1) {
        return super.clickOnElementByCss(locator.SECOND_CHECKBOX_CSS, countOfTimes);
    }

    async clickDropdownOption(optionNumber, countOfTimes = 1, ) {
        return super.clickOnElementByCss('#dropdown > option:nth-child('+optionNumber+')', countOfTimes);
    }

    async clickLoginButton(countOfTimes = 1) {
        return super.clickOnElementByCss(locator.LOGIN_PAGE_LOGIN_BUTTON_CSS, countOfTimes);
    }
//------------------Get-Functions-Section------------------------------------------------
    async getCountOfDeleteButtons() {
        return super.waitForNewElementsToAppear(locator.DELETE_BUTTON_CSS);
    }

    async getCurrentUrl() {
        return super.getCurrentPageUrl();
    }

//------------------Send-Functions-Section-----------------------------------------------
async sendValidLoginUsername() {
    const usernameField = await super.findElementById(locator.LOGIN_PAGE_USERNAME_FIELD_ID);
    await usernameField.sendKeys(library.VALID_LOGIN_USERNAME);
}

async sendValidLoginPassword() {
    const passwordField = await super.findElementById(locator.LOGIN_PAGE_PASSWORD_FIELD_ID);
    await passwordField.sendKeys(library.VALID_LOGIN_PASSWORD);
}
//------------------Quit-Browser-Function------------------------------------------------
    async dragAndDropElementFromAToB() {
        await super.dragAndDropElement(locator.ELEMENT_A_ID, locator.ELEMENT_B_ID);
    }

    async dragAndDropElementFromBToA() {
        await super.dragAndDropElement(locator.ELEMENT_B_ID, locator.ELEMENT_A_ID);
    }

    async quitFromBrowser() {
        return super.quit();
    }
}