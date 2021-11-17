const LoginPage = require("../pageobjects/login.page");
const TerminalsPage = require("../pageobjects/terminals.page");
const BasicInfoPage = require("../pageobjects/basicInformation.page");
const OrderItemsPage = require("../pageobjects/orderItems.page");
const CompartmentPlanPage = require("../pageobjects/compartmentPlan.page");

describe("Order Items Page Related Tests", function () {
  this.retries(1);

  it("User can succesfully land on next page after entering Valid Ladestamm value and enter Product Amount - POSITIVE TEST CASE ", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterFuelInput("20000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.nextButton.click();
    // browser.pause(3000);
    CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });
    expect(CompartmentPlanPage.fillButton).toBeDisplayed();
  });

  it("When user enters inValid Ladestamm value, then receives an error message - NEGATIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822012");
    OrderItemsPage.inValidladestammError.waitForDisplayed({ timeout: 5000 });
  });

  it("When user enters Empty Ladestamm value, then receives an error message - NEGATIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm(" ");
    OrderItemsPage.inValidladestammError.waitForDisplayed({ timeout: 5000 });
    
   
  });

  it("User can add multiple products after entering correct Ladestamm value - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterFuelInput("20000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });
    OrderItemsPage.deleteFuelInput();

    OrderItemsPage.enterFuelInput("20000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });
    OrderItemsPage.deleteFuelInput();

    OrderItemsPage.enterFuelInput("20000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });
    OrderItemsPage.deleteFuelInput();

    expect(OrderItemsPage.trashBin).not.toBeDisplayed();
  });

  it("User can delete previously added products - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterFuelInput("20000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });
    browser.pause(2000);
    OrderItemsPage.deleteFuelInput();

    OrderItemsPage.enterFuelInput("20000");
    //  browser.pause(2000);
    OrderItemsPage.enterFuelInput("20000");
    //  browser.pause(2000);
    OrderItemsPage.enterFuelInput("20000");
    //   browser.pause(2000);
    OrderItemsPage.deleteFuelInput();
    //   browser.pause(2000);
    OrderItemsPage.deleteFuelInput();
    //  browser.pause(2000);
    OrderItemsPage.deleteFuelInput();
    //   browser.pause(2000);
    expect(OrderItemsPage.trashBin).not.toBeDisplayed();
  });

  it("User can not enter and add  negative values as Product amount - NEGATIVE TEST CASE ", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterFuelInput("-2000");

    // expect(OrderItemsPage.productMinus2000).toBeDisplayed();
    expect(OrderItemsPage.productMinus2000).not.toBeDisplayed();
  });

  it("User can cancel the current process at Order Items Page - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
    BasicInfoPage.fillBasicInfo(
      "12/18/2021",
      "John",
      "Doe",
      "04/12/1991",
      "ICO-MT100",
      "ICO-ST400"
    );
    BasicInfoPage.nextButton.click();

    expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining("Order");
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.enterFuelInput("2000");

     OrderItemsPage.cancelButton.click();
     expect(TerminalsPage.newCheckInButton).toBeDisplayed();
    
  });


});
