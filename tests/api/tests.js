import { GitHubAPIClient } from "../../src/applications/api/GitHubAPIClient.js";
import chai from 'chai/chai.js';
const { expect } = chai;
const gitHubApi = new GitHubAPIClient();

describe('API Tests of response for search repos on GitHub', function() {
    it('test response status for existed repo search request', async function() {
        expect(await gitHubApi.repoSearchResponseStatus()).to.be.ok;
    });
    it('test a response body type of search result is an object', async function() {
        expect(await gitHubApi.repoSearchResponseType()).to.be.an('object')
    });
    it('test of founded repos in search result is a number', async function() {
        expect(await gitHubApi.repoSearchResponseResultCount()).to.be.a('number')
    });
    it('test count of founded repos in search result is greater than 0', async function() {
        expect(await gitHubApi.repoSearchResponseResultCount()).to.be.gt(0)
    });
    it('test response body for existed property name "total_count"', async function() {
        expect(await gitHubApi.repoSearchResponse()).to.have.own.property('total_count');
    });
});
