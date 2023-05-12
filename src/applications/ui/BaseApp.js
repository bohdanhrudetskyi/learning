import { BrowsersProvider } from "../../providers/service/browsers/browsersProvider.js"
import { By, until } from 'selenium-webdriver'

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
        let elements = await driver.findElements(By.css(locator));
        for (let i = 0; i < countOfTimes; i++) {            
            await elements[0].click();
            elements = await driver.findElements(By.css(locator));
        }
        return {
            returnCountAfterClicking: function() {
                return elements.length
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
        return await driver.findElements(By.className(locator));
    }

    async findElementById(locator) {
        const driver = await this.driverPromise;
        return await driver.findElement(By.id(locator));
    }

    async dragAndDropElement(locatorSource, locatorTarget) {
        const driver = await this.driverPromise;
        const sourceElement = await this.findElementById(locatorSource);
        const targetElement = await this.findElementById(locatorTarget);
        const actions = driver.actions({bridge:true});
        await actions.dragAndDrop(sourceElement, targetElement).perform();

        return {
            getElementsTextInArray: async function() {
                const columnAText = await driver.wait(until.elementLocated(By.id(locatorSource))).getText();
                const columnBText = await driver.wait(until.elementLocated(By.id(locatorTarget))).getText();
                const arrayOfTextsOfElements = [columnAText, columnBText]
                return arrayOfTextsOfElements
            }
        }
    }

    async findElementsByLinkText(locator) {
        const driver = await this.driverPromise;
        const elements = await driver.findElements(By.linkText(locator));
        const texts = [];
        if(elements.length > 0) {
            for (let element of elements) {
                texts.push(await element.getText());
            }
        } else {
            texts.push(false)
        }
        return {
            elements,
            getFirstText: async function() {
                if(elements.length > 0) {
                    return await texts[0]
                } else {
                    throw new Error('The button is not found!')
                }
                
            },
            click: async function() {
                if(elements.length > 0) {
                    for (let element of elements) {
                        await element.click();
                    }
                } else {
                    throw new Error('The button is not found!')
                }
            }
        }
    }

    async getPageTitle() {
        const driver = await this.driverPromise;
        const title = await driver.getTitle();
        return title
    }

    async getCurrentPageUrl() {
        const driver = await this.driverPromise;
        const pageUrl = await driver.getCurrentUrl();
        return pageUrl
    }

    async findElementByXPath(locator) {
        const driver = await this.driverPromise;
        const element = await driver.findElement(By.xpath(locator));
        return {
            element,
            getText: async function () {
                return element.getText();
            }
        }
    }

    async findElementsByCss(locator) {
        const driver = await this.driverPromise;
        const elements = await driver.findElements(By.css(locator));
        const texts = [];
        if(elements.length == 0) {
            return texts.length;
        } else {
            for (let element of elements) {
                texts.push(await element.getText());
            }
        }
        return {
            elements,
            getCountOfFoundedElements: async function () {
                return await elements.length;
            },
            getFirstText: async function() {
                return texts[0];
            },
            getAllTexts: async function() {
                return texts;
            },
            getCountOfFoundedCheckboxes: async function() {
                return elements.length;
            },
            checkIfSelected: async function() {
                return {
                    first: async function() {
                        return await elements[0].isSelected();
                    },
                    second: async function() {
                        return await elements[1].isSelected();
                    },
                    number: async function(number) {
                        return await elements[number-1].isSelected();
                    }
                }
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