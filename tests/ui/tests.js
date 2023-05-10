import { HerokuAppUiClient }  from "../../src/applications/ui/HerokuAppUiClient.js";
import chai from 'chai/chai.js';
import * as library from "../../src/libraries/testLib.js"
const { expect } = chai;
const browser = new HerokuAppUiClient();

describe('UI Tests for Add/Remove elements page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
    await browser.openAddRemovePage();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test title of Add/Remove page', async function() {
      const title = await browser.getPageTitle();
      expect(title).to.equal(library.ADD_REMOVE_PAGE_TITLE_TEXT);
  });

  it('test header of Add/Remove page', async function() {
    const header = await (await browser.findAddRemovePageHeader()).getFirstText();
    expect(header).to.equal(library.ADD_REMOVE_PAGE_HEADER_TEXT);
  });

  it('test Add Element button click', async function() {
    const elementsToCreate = library.getRandomInteger();
    await browser.clickOnAddElementButton(elementsToCreate);
    const count = await browser.getCountOfDeleteButtons();
    expect(count.length).to.equal(elementsToCreate);
  });

  it('test Delete button click', async function() {
     const elementsToCreate = library.getRandomInteger();
     const elementsToDelete = library.getRandomInteger(1, elementsToCreate);
     await browser.clickOnAddElementButton(elementsToCreate);
     const countAfterDeletion = await (await browser.clickDeleteButton(elementsToDelete)).returnCountAfterClicking();
     expect(countAfterDeletion).to.equal(elementsToCreate - elementsToDelete);
  });

 });

describe('UI Tests for Basic authentication page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test of login with valid credentials', async function() {
      await browser.openBasicAuthPage(library.VALID_USERNAME, library.VALID_PASSWORD);
      const authText = await (await browser.findAuthSuccessText()).getFirstText();
      expect(authText).to.equal(library.EXPECTED_SUCCESS_LOGIN_TEXT)
  });

  it('test of login with invalid credentials', async function() {
    await browser.openBasicAuthPage(library.INVALID_USERNAME, library.INVALID_PASSWORD);
    const authText = await browser.findAuthNotSuccessText();
    expect(authText).to.equal(0)
  });

});

describe('UI Tests for Broken Images page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
    await browser.openBrokenImagesPage();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test if all images are displayed on the page', async function() {
      const foundedImages = await (await browser.findAllImages()).countOfFoundedImages();
      const displayedImages = await (await browser.findAllImages()).countOfDisplayedImages();
      expect(displayedImages).to.equal(foundedImages);
  });

  it('test if two images are NOT displayed on the page', async function() {
    const notDisplayedImages = await (await browser.findAllImages()).countOfNotDisplayedImages();
    expect(notDisplayedImages).to.equal(library.NOT_DISPLAYED_IMAGES_ON_BI_PAGE);
  });

});

describe('UI Tests for Checkboxes page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
    await browser.openCheckboxesPage();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test checkboxes header on the page', async function() {
    const header = await (await browser.findCheckboxesPageHeader()).getFirstText();
    expect(header).to.equal(library.CHECKBOXES_PAGE_HEADER_TEXT);
  });

  it('test is two checkboxes are on the page', async function() {
      const countOfCheckboxes = await (await browser.findCheckboxesOnPage()).getCountOfFoundedCheckboxes();
      expect(countOfCheckboxes).to.equal(2);
  });

  it('test is first checkbox is NOT checked', async function() {
    const whichChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    expect(whichChecked).to.equal(false);
  });

  it('test is second checkbox is checked', async function() {
    const whichChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(whichChecked).to.equal(true);
  });

  it('test if first checkbox can be checked', async function() {
    await browser.clickFirstCheckbox();
    const firstChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    expect(firstChecked).to.equal(true);
  });

  it('test if two checkboxes can be checked', async function() {
    await browser.clickFirstCheckbox();
    const firstChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    const secondChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(firstChecked && secondChecked).to.equal(true);
  });

  it('test if second checkbox can be unchecked', async function() {
    await browser.clickSecondCheckbox();
    const secondChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(secondChecked).to.equal(false);
  });

  it('test if two checkboxes can be unchecked', async function() {
    await browser.clickSecondCheckbox();
    const firstChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    const secondChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(firstChecked && secondChecked).to.equal(false);
  });

  it('test if first checkbox can be unchecked after checking', async function() {
    await browser.clickFirstCheckbox(2);
    const firstChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    expect(firstChecked).to.equal(false);
  });

  it('test if second checkbox can be checked after uchecking', async function() {
    await browser.clickSecondCheckbox(2);
    const secondChecked = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(secondChecked).to.equal(true);
  });

  it('test if the first checkbox will not change his status after the second one is clicked', async function() {
    const firstCheckedBefore = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    await browser.clickSecondCheckbox();
    const firstCheckedAfter = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).first();
    expect(firstCheckedAfter).to.equal(firstCheckedBefore);
  });

  it('test if the second checkbox will not change his status after the first one is clicked', async function() {
    const secondCheckedBefore = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    await browser.clickFirstCheckbox();
    const secondCheckedAfter = await (await (await browser.findCheckboxesOnPage()).checkIfSelected()).second();
    expect(secondCheckedAfter).to.equal(secondCheckedBefore);
  });

});

describe('UI Tests for Disappearing Elements page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
    await browser.openDisappearingElementsPage();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test disappearing elements header on the page', async function() {
    const header = await (await browser.findDisappearingElementsHeader()).getFirstText();
    expect(header).to.equal(library.DISAPPEARING_ELEMENTS_PAGE_HEADER_TEXT);
  });

  it('test if home link is on the page', async function() {
    const homeLink = await (await browser.findHomeLink()).getFirstText();
    expect(homeLink).to.equal(library.DISAPPEARING_ELEMENTS_HOME_LINK_TEXT);
  });

  it('test if about link is on the page', async function() {
    const aboutLink = await (await browser.findAboutLink()).getFirstText();
    expect(aboutLink).to.equal(library.DISAPPEARING_ELEMENTS_ABOUT_LINK_TEXT);
  });

  it('test if contact us link is on the page', async function() {
    const contactUsLink = await (await browser.findContactUsLink()).getFirstText();
    expect(contactUsLink).to.equal(library.DISAPPEARING_ELEMENTS_CONTACT_US_LINK_TEXT);
  });

  it('test if portfolio link is on the page', async function() {
    const portfolioLink = await (await browser.findPortfolioLink()).getFirstText();
    expect(portfolioLink).to.equal(library.DISAPPEARING_ELEMENTS_PORTFOLIO_LINK_TEXT);
  });

  it('test if gallery button is on the page', async function() {
    const galleryLink = await (await browser.findGalleryLink()).getFirstText();
    expect(galleryLink).to.equal(library.DISAPPEARING_ELEMENTS_GALLERY_LINK_TEXT);
  });

  it('test if home link navigates to the home page', async function() {
    await (await browser.findHomeLink()).click();
    const homePageUrl = await browser.getCurrentUrl();
    expect(homePageUrl).to.equal(library.HOME_PAGE_URL);
  });

  it('test if about link navigates to the about page', async function() {
    await (await browser.findAboutLink()).click();
    const aboutPageUrl = await browser.getCurrentUrl();
    expect(aboutPageUrl).to.equal(library.HOME_PAGE_URL + library.ABOUT_PAGE_URL);
  });

  it('test if contact us link navigates to the contact us page', async function() {
    await (await browser.findContactUsLink()).click();
    const contactUsPageUrl = await browser.getCurrentUrl();
    expect(contactUsPageUrl).to.equal(library.HOME_PAGE_URL + library.CONTACT_US_PAGE_URL);
  });

  it('test if portfolio link navigates to the portfolio page', async function() {
    await (await browser.findPortfolioLink()).click();
    const portfolioPageUrl = await browser.getCurrentUrl();
    expect(portfolioPageUrl).to.equal(library.HOME_PAGE_URL + library.PORTFOLIO_PAGE_URL);
  });

  it('test if gallery link navigates to the gallery page', async function() {
    await (await browser.findGalleryLink()).click();
    const galleryPageUrl = await browser.getCurrentUrl();
    expect(galleryPageUrl).to.equal(library.HOME_PAGE_URL + library.GALLERY_PAGE_URL);
  });

});

describe('UI Tests for Drag and Drop page', function() {
  
  beforeEach(async function() {
    await browser.startBrowser();
    await browser.openDragAndDropPage();
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test drag and drop header on the page', async function() {
    const header = await (await browser.findDragAndDropHeader()).getFirstText();
    expect(header).to.equal(library.DRAG_AND_DROP_PAGE_HEADER_TEXT);
  });

});