import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"
import { By } from 'selenium-webdriver'

export class BaseAPP {     
    
    constructor() {
        this.driverPromise = new BrowsersProvider().getDriver('chrome');
    }

    async goTo(browserPage) {
         return this.driverPromise.then((driverPromise) => {
             driverPromise.get(browserPage);
          });
    }

    async clickOnElementById(locator) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).click();
          });
    }
    async clickOnElementByXPath(locator, countOfElements, delay) {
        for(let i = 0; i < countOfElements; i++) {
            await new Promise((resolve) => setTimeout(resolve, delay));
            this.driverPromise.then((driverPromise) => {
                driverPromise.findElement(By.xpath(locator)).click()
            });
        }
    }
    async findElementsByClass(locator) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElements(By.className(locator))
        });
        return driverPromise
    }
    async typeText(locator, text) {
        this.driverPromise.then((driverPromise) => {
            driverPromise.findElement(By.id(locator)).sendKeys(text);
          });
    }
    async quit() {
        this.driverPromise.then((driverPromise) => {
            driverPromise.quit();
          });
    }
}