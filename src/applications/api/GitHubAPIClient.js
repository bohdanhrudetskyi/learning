import fetch from 'node-fetch';
import * as library from "../../libraries/testLib.js"
export class GitHubAPIClient {
    constructor() {
        this.baseUrl = `https://api.github.com`
    }
    async repoSearchResponse(repoName = library.VALID_SEARCH_REPO_NAME) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        return responseNew
    }
    async repoSearchResponseStatus(repoName = library.VALID_SEARCH_REPO_NAME) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.status)
        return responseNew
    }
    async repoSearchResponseType(repoName = library.VALID_SEARCH_REPO_NAME) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        return responseNew
    }
    async repoSearchResponseResultCount(repoName = library.VALID_SEARCH_REPO_NAME) {
        const url = `${this.baseUrl}/search/repositories?q=${repoName})`;
        const responseNew = await fetch(url)
        .then(respStatus => respStatus.json())
        .then(count => count.total_count)
        return responseNew
    }
}