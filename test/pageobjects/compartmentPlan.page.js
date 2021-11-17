/**
 * sub page containing specific selectors and methods for a specific page
 */
class CompartmentPlanPage {

    get orderItemsToBeLoadedLabel () { return $$('h2*=Order Items to be Loaded')[1] }
    get loadingItemPositions () { return $$('h2*=Order Items to be Loaded') }

    get nextButton () { return $('button*=Next') }   
   get fillButton () { return $('button*=Fill') }   
    //get fillButton () { return $('td').$('button*=Fill') }   
    get productAmountLiter20000 () { return $("//td[contains(text(),'20,000 L')]") }  
   
  //  get fillButtons () { return $$("//button[contains(text(),'Fill')]") }   
    get fillButtons () { return $$("//*[contains(text(),'Fill')]") }   
    get selectButton () { return $('button*=Select') }  // when fill is disabled with toggle 
    get selectButtons () { return $$('button*=Select') }  // when fill is disabled with toggle 
    get currentLoadedProductAmount () { return $$("//*[@class='product-name']//following-sibling::td")[7] }   
    get automaticPlanningToggle () { return $('span.fd-toggle__switch') }   
    get garbageCans () { return $$('.compartment__position__actions.icon-il--garbage-can.clickable') }   
    get compartmentPositionInputs () { return $$(".compartment__position__input") }   
    get compartmentPlanningLabel () { return $("//h2[contains(text(),'Compartment Planning')]") }   
    get keepEmptyButtons () { return $$("//*[contains(text(),'keep empty')]") }   
    get overflowCompButtons () { return $$("//*[contains(text(),'overflow compartment')]") }   
    get unassignedProduct14408L () { return $("//*[contains(text(),' 14,408 L ')]") }   
    get unassignedProduct2280L () { return $("//*[contains(text(),' 2,280 L ')]") }   
  //  get unassignedProduct2280L () { return $("//*[contains(text(),' Vorwahlmengenreduzierung durchführen: Die Vorwahlmenge wurde reduziert.')]") }   
    get nextButton () { return $('button*=Next') }  
    get cancelButton() {
      return $("//button[contains(text(),'Cancel')]");
    }
          
}

module.exports = new CompartmentPlanPage ();
