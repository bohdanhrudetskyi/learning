import { HerokuAppUiClient }  from "../../src/applications/ui/HerokuAppUiClient.js";
import chai from 'chai/chai.js';
const { expect } = chai;
const browser = new HerokuAppUiClient();

describe('UI Tests for Add/Remove elements page', function() {
  it('test title Add/Remove page', async function() {
      const driver = await browser.openAddRemovePage();
      const title = await driver.getTitle();
      expect(title).to.equal('The Internet');
      browser.quitFromBrowser()
  });
  it('test Add Element button', async function() {
    const elementsToCreate = 37;
    await browser.openAddRemovePage();
    await browser.clickOnAddElementButton(elementsToCreate);
    const count = await browser.countOfDeleteButtons();
    expect(count.length).to.equal(elementsToCreate);
    browser.quitFromBrowser()
  });
  it('test Delete button click', async function() {
      //expect(await gitHubUi.repoSearchResponseType()).to.be.an('object')
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