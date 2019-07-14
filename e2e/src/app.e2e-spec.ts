import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to home', () => {
    page.navigateTo();
    expect(page.getBrowserUrl()).toContain('/home');
  });

  [
    { url: '/' },
    { url: '/home' },
    { url: '/about' },
    { url: '/blog' },
  ].forEach(scenario => {
    it(`should set title and sub title for ${scenario.url}`, () => {
      page.navigateTo(scenario.url);
      expect(page.getTitleText()).not.toBe('Oops!');
      expect(page.getSubTitleText()).not.toBe('Still working on this');
    });
  });

  it('home should set title and sub title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toBe('Welcome Stranger');
    expect(page.getSubTitleText()).toBe('What\'s that guy Dan up to these days?');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
