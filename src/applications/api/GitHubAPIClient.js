import fetch from 'node-fetch';
import { validSearchRepoName } from '../../libraries/repoSearchConstants.js';
export class GitHubAPIClient {
    constructor() {
        this.baseUrl = `https://api.github.com`
    }
    async repoSearchResponse(repoName = validSearchRepoName) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        return responseNew
    }
    async repoSearchResponseStatus(repoName = validSearchRepoName) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.status)
        return responseNew
    }
    async repoSearchResponseType(repoName = validSearchRepoName) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        return responseNew
    }
    async repoSearchResponseResultCount(repoName = validSearchRepoName) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        .then(count => count.total_count)
        return responseNew
    }
}