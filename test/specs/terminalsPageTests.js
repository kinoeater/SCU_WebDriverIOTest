
const LoginPage = require('../pageobjects/login.page');
const TerminalsPage = require('../pageobjects/terminals.page');
const BasicInfoPage = require('../pageobjects/basicInformation.page');


describe('Terminals Page Related Tests', function () {

  this.retries(1)

  it('User can choose a terminal and terminal should be reachable - POSITIVE TEST CASE', function () {

    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    
    BasicInfoPage.serverErrorCheck();
    TerminalsPage.newCheckInButton.click();
    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });   

  })

  it('User can choose languages as English, German and Portuguse - POSITIVE TEST CASE', function () {


    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
  //  browser.pause(2000);
    TerminalsPage.selectLanguage("de");
  //  browser.pause(2000);
    TerminalsPage.pleaseSelectTitleGerman.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.selectLanguage("pt");
   // browser.pause(2000);
    TerminalsPage.pleaseSelectTitlePortuguse.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.selectLanguage("en");
  //  browser.pause(2000);
    TerminalsPage.pleaseSelectTitle.waitForDisplayed({ timeout: 5000 });

  })

})