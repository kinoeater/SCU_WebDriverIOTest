/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderItemsPage {
  /**
   * define selectors using getter methods
   */
  get orderItemsLabel() {
    return $(
      "//div[@class='input-section']//h2[contains(text(),'Order Items')]"
    );
  }
  get autorizationTypeLabel() {
    return $("//label[contains(text(),'Please choose authorization type:')]");
  }
  get ladestammItem() {
    return $("option*=L");
  }
  get inValidladestammError() {
    return $("div*= Überprüfung Sonderanschreibung");
  }
  get autorizationTypeSelectBox() {
    return $(
      "//label[contains(text(),'Please choose authorization type:')]//following-sibling::div//select"
    );
  }
  get ladeStammInputArea() {
    return $("//label[contains(text(),'Ladestamm')]//following-sibling::input");
  }
  get ladeStammCheckButton() {
    return $(".icon-il--checkbox-checked");
  }
  get addButton() {
    return $("//button[contains(text(),'Add')]");
  }
  get fuelInputArea() {
    return $("//*[@class='product-name']//following-sibling::td//input");
  }
  get trashBin() {
    return $(".icon-il--garbage-can");
  }
  get nextButton() {
    return $("button*=Next");
  }
  get cancelButton() {
    return $("//button[contains(text(),'Cancel')]");
  }
  get productMinus2000() {
    return $("//*[contains(text(),' -2,000 L ')]");
  }

  enterLadestamm(ladestammValue) {
    this.autorizationTypeSelectBox.selectByAttribute("value", "3: Object");
    browser.pause(1000);
    this.autorizationTypeSelectBox.selectByAttribute("value", "2: Object");
    this.ladeStammInputArea.setValue(ladestammValue);
    this.ladeStammCheckButton.click();
  }

  enterFuelInput(fuelAmount) {
    this.fuelInputArea.setValue(fuelAmount);
    this.addButton.click();
  }

  deleteFuelInput() {
    this.trashBin.click();
  }
}

module.exports = new OrderItemsPage();
