import { GitHubUiClient }  from "../../src/applications/ui/GitHubUiClient.js";
import chai from 'chai/chai.js';
const { expect } = chai;
const browser = new GitHubUiClient();

describe('UI Tests for GitHub login page', function() {
  it('test inputs for GitHub login page', async function() {
      await browser.goTo();
      // await gitHubUi.inputUsername('john');
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