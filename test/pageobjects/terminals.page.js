/**
 * sub page containing specific selectors and methods for a specific page
 */
class TerminalsPage {
    /**
     * define selectors using getter methods
     */
    get pleaseSelectTitle () { return $("//h1[contains(text(),'Please select a terminal')]") }
    get pleaseSelectTitlePortuguse () { return $("//h1[contains(text(),'Por favor, selecione um terminal')]") }
    get pleaseSelectTitleGerman () { return $("//h1[contains(text(),'Bitte wählen Sie einen Terminal aus')]") }
    get logout () { return $(".icon-il--log-out") }
    get testTerminal_1 () { return $("//h5[contains(text(),'icootqs15/ICO.ARTS.V1.Q')]") }  
    get newCheckInButton () { return $('button*=New Check-In') }  
    get alertItem () { return $('.alertItem') }  
    get serverError () { return $("//div[contains(text(),'Server error')]") }   
    get statusColumn () { return $("//*[contains(text(),'Status')]") }   
    get languageSelect () { return $(".langselect") }   
   
    selectLanguage(language) {
        this.languageSelect.selectByVisibleText(language);
        browser.pause(2000);
             
    }
    
    enterTestTerminal() {
        this.testTerminal_1.click(); 
        
    }
   
}

module.exports = new TerminalsPage();
