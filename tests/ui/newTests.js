const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Drag and Drop Test', function () {
  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://the-internet.herokuapp.com/drag_and_drop');
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('should drag and drop element successfully', async function () {
    const sourceElement = await driver.findElement(By.id('column-a'));
    const targetElement = await driver.findElement(By.id('column-b'));

    // Perform drag and drop action
    await driver.actions({ bridge: true }).dragAndDrop(sourceElement, targetElement).perform();

    // Verify the text in the columns has been switched
    const columnAText = await driver.wait(until.elementLocated(By.id('column-a'))).getText();
    const columnBText = await driver.wait(until.elementLocated(By.id('column-b'))).getText();

    assert.strictEqual(columnAText, 'B');
    assert.strictEqual(columnBText, 'A');
  });
});