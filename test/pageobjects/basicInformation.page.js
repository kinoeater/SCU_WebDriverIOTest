/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasicInfoPage {
  /**
   * define selectors using getter methods
   */
  get pleaseSelectTitle() {
    return $("//h1[contains(text(),'Please select a terminal')]");
  }
  get entryDateInputArea() {
    return $("//input[@placeholder='Date']");
  }
  get driverFirstNameInputArea() {
    return $(
      "//label[contains(text(),'First Name')]//following-sibling::input"
    );
  }
  get driverLastNameInputArea() {
    return $("//label[contains(text(),'Last Name')]//following-sibling::input");
  }
  get driverBirthDateInputArea() {
    return $("//input[@placeholder='Date of Birth']");
  }
  get firstVehiclePlateInputArea() {
    return $(
      "//label[contains(text(),'1. Vehicle Part')]//following-sibling::input"
    );
  }
  get secondVehiclePlateInputArea() {
    return $(
      "//label[contains(text(),'2. Vehicle Part')]//following-sibling::input"
    );
  }
  get thirdVehiclePlateInputArea() {
    return $(
      "//label[contains(text(),'3. Vehicle Part')]//following-sibling::input"
    );
  }
  get driverDataError() {
    return $(
      "//span[contains(text(),'Prüfung Fahrzeugführer: Kein Fahrzeugführer für di')]"
    );
  }
  get vehiclePlateDataError() {
    return $(
      "//span[contains(text(),'Das Transportmittel konnte nicht gefunden werden')]"
    );
  }
  get pastDateError() {
    return $(
      "//span[contains(text(),'Prüfung: Start-Datum/Zeit sollte nicht in der Verg')]"
    );
  }
  get serverError() {
    return $("//div[contains(text(),'Server error')]");
  }
  get nextButton() {
    return $("button*=Next");
  }
  get cancelButton() {
    return $("//button[contains(text(),'Cancel')]");
  }

  fillBasicInfo(
    entryDate,
    driverFirstName,
    driverLastName,
    birthDate,
    vehicle1,
    vehicle2
  ) {
    this.entryDateInputArea.setValue(entryDate);
    this.driverFirstNameInputArea.setValue(driverFirstName);
    this.driverLastNameInputArea.setValue(driverLastName);
    this.driverBirthDateInputArea.setValue(birthDate);
    this.firstVehiclePlateInputArea.setValue(vehicle1);
    this.secondVehiclePlateInputArea.setValue(vehicle2);
    browser.pause(2000);
    this.serverError.waitForDisplayed({
      timeout: 5000,
      reverse: true,
      timeoutMsg: "Terminal cannot reach server!",
      interval: 0.5,
    });
  }

  fillBasicInfoThreeVehicle(
    entryDate,
    driverFirstName,
    driverLastName,
    birthDate,
    vehicle1,
    vehicle2,
    vehicle3
  ) {
    this.entryDateInputArea.setValue(entryDate);
    this.driverFirstNameInputArea.setValue(driverFirstName);
    this.driverLastNameInputArea.setValue(driverLastName);
    this.driverBirthDateInputArea.setValue(birthDate);
    this.firstVehiclePlateInputArea.setValue(vehicle1);
    this.secondVehiclePlateInputArea.setValue(vehicle2);
    this.thirdVehiclePlateInputArea.setValue(vehicle3);
    browser.pause(2000);
    this.serverError.waitForDisplayed({
      timeout: 5000,
      reverse: true,
      timeoutMsg: "Terminal cannot reach server!",
      interval: 0.5,
    });
  }
  // control for server error, if there is error then the test fail there without further steps
  serverErrorCheck() {
    browser.pause(2000);
    this.serverError.waitForDisplayed({
      timeout: 5000,
      reverse: true,
      timeoutMsg: "Terminal cannot reach server!",
      interval: 0.5,
    });
  }
}

module.exports = new BasicInfoPage();
