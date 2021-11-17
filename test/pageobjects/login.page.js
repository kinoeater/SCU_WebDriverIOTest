const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $("input[type='text']") }
    get inputPassword () { return $('input[type="password"]') }
    get btnSubmit () { return $('button*=Login') }
    get loginError () { return $("div.fd-alert.fd-alert--no-icon.fd-alert--error") }

 
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();

