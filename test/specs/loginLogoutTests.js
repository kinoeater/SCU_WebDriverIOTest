
const LoginPage = require('./test/pageobjects/login.page');
const TerminalsPage = require('./test/pageobjects/terminals.page');


describe('Login and Logout Related Tests', function () {

    this.retries(1);


    it('User can login with correct creds - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");
        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');

    })

    it('User can logout after login - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");
        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.logout.click();
        LoginPage.btnSubmit.waitForDisplayed({ timeout: 5000 });

    })

    it('User can login with pressing Enter Key instead of Login Button - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.inputUsername.setValue("tci_driver");
        LoginPage.inputPassword.setValue("tci_driver");
        LoginPage.inputPassword.keys("\uE007");
        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
    })

    it('User can NOT login with incorrect UserName - Error message check  - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("wrongUser", "tci_driver");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with incorrect Password - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "wrongPass");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with empty userName - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login(" ", "tci_driver");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with empty passWord - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", " ");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with empty passWord and empty userName - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login(" ", " ");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with space at the begining of Valid userName - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("   tci_driver", "tci_driver");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

    it('User can NOT login with space at the begining of Valid passWord - Error message check - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "   tci_driver");
        LoginPage.loginError.waitForDisplayed({ timeout: 5000 });
    })

})