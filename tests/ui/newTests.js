const { Builder, By } = require('selenium-webdriver');

describe('Drag and Drop', function () {
  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://the-internet.herokuapp.com/drag_and_drop');
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('should drag and drop element', async function () {
    const source = await driver.findElement(By.id('column-a'));
    const target = await driver.findElement(By.id('column-b'));

    const actions = driver.actions({ bridge: true });
    await actions.dragAndDrop(source, target).perform();

    const columnA = await driver.findElement(By.id('column-a')).getText();
    const columnB = await driver.findElement(By.id('column-b')).getText();

    expect(columnA).toBe('B');
    expect(columnB).toBe('A');
  });
});