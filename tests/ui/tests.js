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
      expect(title).to.equal(library.ADD_REMOVE_PAGE_TITLE);
  });

  it('test Add Element button', async function() {
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
    await browser.startBrowser()
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test of login with valid credentials', async function() {
      await browser.openBasicAuthPage(library.VALID_USERNAME, library.VALID_PASSWORD);
      const authText = await (await browser.findAuthSuccessText()).getText();
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