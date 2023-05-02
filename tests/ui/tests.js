import { HerokuAppUiClient }  from "../../src/applications/ui/HerokuAppUiClient.js";
import { By } from 'selenium-webdriver'
import chai from 'chai/chai.js';
const { expect } = chai;
const browser = new HerokuAppUiClient();

describe('UI Tests for Add/Remove elements page', function() {
  it('test title Add/Remove page', async function() {
      const driver = await browser.openAddRemovePage();
      const title = await driver.getTitle();
      expect(title).to.equal('The Internet')
  });
  it('test Add Element button', async function() {
    await browser.openAddRemovePage();
    await browser.clickOnAddElementButton(5);
    const count = await browser.countOfDeleteButtons();
    console.log(count)
    //expect(buttons).to.equal(5)
    //expect(dataInserted).to.be.a('john');
});
  // it('test a response body type of search result is an object', async function() {
  //     expect(await gitHubUi.repoSearchResponseType()).to.be.an('object')
  // });
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