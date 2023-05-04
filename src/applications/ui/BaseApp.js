import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"
import { By } from 'selenium-webdriver'

export class BaseAPP {

    constructor() {
        this.driverPromise = null;
    }

    async openBrowser(browserName) {
        const provider = new BrowsersProvider();
        this.driverPromise = provider.getDriver(browserName);
    }

    async goTo(browserPage) {
        return this.driverPromise.then((driverPromise) => {
             return driverPromise.get(browserPage);
        });
    }

    async clickOnElementByCss(locator, countOfTimes) {
        const driver = await this.driverPromise;
        let deleteButtons = await driver.findElements(By.css(locator));
        for (let i = 0; i < countOfTimes; i++) {            
            await deleteButtons[0].click();
            deleteButtons = await driver.findElements(By.css(locator));
        }
        return {
            returnCountAfterClicking: function() {
                return deleteButtons.length
            }
        }
    }

    async clickOnElementByXPath(locator, countOfElements) {
        for (let i = 0; i < countOfElements; i++) {
            this.driverPromise.then((driverPromise) => {
                driverPromise.findElement(By.xpath(locator)).click()
            })
        }
    }

    async waitForNewElementsToAppear(locator, timeout = 5000) {
        const driver = await this.driverPromise;
        const startTime = new Date().getTime();
        while(new Date().getTime() - startTime < timeout) {
            const elements = await driver.findElements(By.css(locator));
            if(elements.length > 0) {
                return elements;
            }
        }
        throw new Error('Timeout exceeded while waiting for the element')
    }

    async findElementsByClass(locator) {
        const driver = await this.driverPromise;
        return driver.findElements(By.className(locator));
    }

    async getPageTitle() {
        const driver = await this.driverPromise;
        const title = await driver.getTitle();
        return title
    }

    async findElementsByCss(locator) {
        const driver = await this.driverPromise;
        const elements = await driver.findElements(By.css(locator));
        const texts = [];
        if(elements.length == 0) {
            return texts.length
        } else {
            for (let element of elements) {
                texts.push(await element.getText());
            }
        }
        return {
            texts,
            getText: async function() {
                return texts[0]
            }
        }
    }

    async checkIfImagesIsLoaded (locator, attribute) {
        const driver = await this.driverPromise;
        const images = await driver.findElements(By.css(locator));
        let displayedImages = [];
        if(images.length != 0) {
            for (let image of images) {
                if(await image.getAttribute(attribute) != 0) {
                    displayedImages.push(await image.getAttribute(attribute));
                }
                
            }
        }

        return {
            countOfFoundedImages: async function () {
                return images.length
            },
            countOfDisplayedImages: async function() {
                return displayedImages.length
            },
            countOfNotDisplayedImages: async function() {
                return (images.length - displayedImages.length) 
            }
        }
    }

    async quit() {
        return this.driverPromise.then((driverPromise) => {
            driverPromise.quit();
        });
    }
}