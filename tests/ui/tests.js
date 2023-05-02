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
    const elementsToCreate = 3;//library.getRandomInteger();
    await browser.openAddRemovePage();
    await browser.clickOnAddElementButton(elementsToCreate);
    const countBefore = await browser.countOfDeleteButtons();
    await browser.clickDeleteButton(2);
    const countAfter = await browser.countOfDeleteButtons();
    expect(countAfter.length).to.equal(countBefore.length - 1);
  });
  // it('test of founded repos in search result is a number', async function() {
  //     expect(await gitHubUi.repoSearchResponseResultCount()).to.be.a('number')
  // });
  // it('test count of founded repos in search result is greater than 0', async function() {
  //     expect(await gitHubUi.repoSearchResponseResultCount()).to.be.gt(0)
  // });
  // it('test response body for existed property name "total_count"', async function() {
  //     expect(await gitHubUi.repoSearchResponse()).to.have.own.property('total_count');
  // });
});