import { HerokuAppUiClient }  from "../../src/applications/ui/HerokuAppUiClient.js";
import { BaseAPP } from "../../src/applications/ui/BaseApp.js";
import chai from 'chai/chai.js';
const { expect } = chai;
const browser = new HerokuAppUiClient();

describe('UI Tests for Add/Remove elements page', function() {
  it('test Add/Remove page for adding objects', async function() {
      await browser.openAddRemovePage();
      // const pageTitle = await driver.getTitle();
      // expect(pageTitle).to.equal('The Internet')
      //await browser.clickOnAddElement(5, 10);
      //await browser.clickPasswordField();
      //await browser.quitFromBrowser();
      // await gitHubUi.inputPassword('pass');
      //await gitHubUi.quit();
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