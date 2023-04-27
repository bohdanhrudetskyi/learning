import { Builder, By, Key, until } from 'selenium-webdriver';
import { BaseAPP } from '../../applications/ui/BaseApp.js';
export class GitHubUiClient extends BaseAPP{
    constructor(driver = undefined) {
        this.loginPage = 'https://github.com/login';
    }
    async openPage() {
        const page = new GitHubUiClient().goTo(this.loginPage)
        return page
    }
    async inputUsername(username) {
        await this.driver.findElement(By.name('login')).sendKeys(username);
    }
    async inputPassword(password) {
        await this.driver.findElement(By.name('password')).sendKeys(password);
    }
    async quit() {
        await this.driver.quit();
    }
}