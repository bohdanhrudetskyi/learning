import { HerokuAppUiClient }  from "../../src/applications/ui/HerokuAppUiClient.js";
import chai from 'chai/chai.js';
import * as library from "../../src/libraries/testLib.js"
const { expect } = chai;
const browser = new HerokuAppUiClient();

describe('UI Tests for Add/Remove elements page', function() {

  beforeEach(async function() {
    await browser.startBrowser()
  });

  afterEach(async function() {
    await browser.quitFromBrowser();
  });

  it('test title Add/Remove page', async function() {
      const driver = await browser.openAddRemovePage();
      const title = await driver.getTitle();
      expect(title).to.equal('The Internet');
  });

  it('test Add Element button', async function() {
    const elementsToCreate = library.getRandomInteger();
    await browser.openAddRemovePage();
    await browser.clickOnAddElementButton(elementsToCreate);
    const count = await browser.countOfDeleteButtons();
    expect(count.length).to.equal(elementsToCreate);
  });

  it('test Delete button click', async function() {
    const elementsToCreate = library.getRandomInteger();
    const elementsToDelete = library.getRandomInteger(1, elementsToCreate);
    await browser.openAddRemovePage();
    await browser.clickOnAddElementButton(elementsToCreate);
    const countBefore = await (await browser.countOfDeleteButtons()).length;
    const countAfter = await (await browser.clickDeleteButton(elementsToDelete)).returnCountAfterClicking();
    expect(countAfter).to.equal(countBefore - elementsToDelete);
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

  // it('test count of founded repos in search result is greater than 0', async function() {
  //     expect(await gitHubUi.repoSearchResponseResultCount()).to.be.gt(0)
  // });
  // it('test response body for existed property name "total_count"', async function() {
  //     expect(await gitHubUi.repoSearchResponse()).to.have.own.property('total_count');
  // });
});