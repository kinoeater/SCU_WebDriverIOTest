const LoginPage = require("../pageobjects/login.page");
const TerminalsPage = require("../pageobjects/terminals.page");
const BasicInfoPage = require("../pageobjects/basicInformation.page");
const OrderItemsPage = require("../pageobjects/orderItems.page");
const CompartmentPlanPage = require("../pageobjects/compartmentPlan.page");
const compartmentPlanPage = require("../pageobjects/compartmentPlan.page");

describe("Compartment Planning Page Related Tests", function () {
  this.retries(1);

  it("User should see Ordered Product Amount/s correctly seen at the compantment page", () => {
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

    CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });
    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "20,000 L"
    );
  });

  it("User can load the products Automatically - POSITIVE TEST CASE", () => {
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

    //CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });

    // console.log("**********************************   "+CompartmentPlanPage.currentLoadedProductAmount.getText());
    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "20,000 L"
    );

    if (CompartmentPlanPage.fillButton.isDisplayed()) {
      CompartmentPlanPage.fillButton.click();
    } else {
      CompartmentPlanPage.automaticPlanningToggle.click();
      CompartmentPlanPage.fillButton.click();
    }

    CompartmentPlanPage.garbageCans[0].waitForDisplayed({ timeout: 5000 });
  });

  it("User can load the products Manually - POSITIVE TEST CASE", () => {
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

    //CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });

    // console.log("**********************************   "+CompartmentPlanPage.currentLoadedProductAmount.getText());
    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "20,000 L"
    );
    console.log(
      "************Select button status: " +
        CompartmentPlanPage.selectButton.isDisplayed()
    );
    console.log(
      "************Fill button status: " +
        CompartmentPlanPage.fillButton.isDisplayed()
    );

    if (CompartmentPlanPage.fillButton.isDisplayed()) {
      CompartmentPlanPage.automaticPlanningToggle.click();
      // take action to manual filling

      for (i = 0; i < 3; i++) {
        CompartmentPlanPage.fillButtons[0].click();
        //  browser.pause(1000);
      }

      //  browser.pause(2000);
    } else {
      for (i = 0; i < 3; i++) {
        CompartmentPlanPage.fillButtons[0].click();
        //  browser.pause(1000);
      }
    }
  });

  it("User can delete Loaded compartments successfully - POSITIVE TEST CASE", () => {
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
    //CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });

    // console.log("**********************************   "+CompartmentPlanPage.currentLoadedProductAmount.getText());
    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "20,000 L"
    );
    console.log(
      "************Select button status: " +
        CompartmentPlanPage.selectButton.isDisplayed()
    );
    console.log(
      "************Fill button status: " +
        CompartmentPlanPage.fillButton.isDisplayed()
    );

    if (CompartmentPlanPage.fillButton.isDisplayed()) {
      CompartmentPlanPage.automaticPlanningToggle.click();
      // take action to manual filling

      for (i = 0; i < 3; i++) {
        CompartmentPlanPage.fillButtons[0].click();
        // browser.pause(1000);
      }

      //   browser.pause(1000);
    } else {
      // take action to manual filling
      // browser.pause(1000);
    }

    var garbageCount = CompartmentPlanPage.garbageCans.length;
    if (garbageCount !== 0) {
      for (i = 0; i < garbageCount; i++) {
        CompartmentPlanPage.garbageCans[0].click();
        //  browser.pause(1000);
      }
    }
  });

  it("User can load Multiple products automatically, then can delete them - POSITIVE TEST CASE", () => {
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

    OrderItemsPage.enterFuelInput("2300");

    OrderItemsPage.enterFuelInput("7400");

    OrderItemsPage.nextButton.click();

    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    for (j = 0; j < 3; j++) {
      CompartmentPlanPage.fillButtons[j].click();
    }

    var garbageCount = CompartmentPlanPage.garbageCans.length;
    if (garbageCount !== 0) {
      for (i = 0; i < garbageCount; i++) {
        CompartmentPlanPage.garbageCans[0].click();
      }
    }
  });

  it("User can load Multiple products manually, then can delete them - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({
      timeout: 5000,
    });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({
      timeout: 5000,
    });
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
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterFuelInput("20000");

    OrderItemsPage.enterFuelInput("7400");

    OrderItemsPage.enterFuelInput("2300");

    OrderItemsPage.nextButton.click();

    //   browser.pause(3000);
    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.automaticPlanningToggle.click();

    CompartmentPlanPage.selectButtons[0].click();
    for (i = 0; i < 3; i++) {
      CompartmentPlanPage.fillButtons[0].click();
    }

    CompartmentPlanPage.selectButtons[1].click();
    for (i = 0; i < 2; i++) {
      CompartmentPlanPage.fillButtons[0].click();
    }

    CompartmentPlanPage.selectButtons[2].click();
    CompartmentPlanPage.fillButtons[0].click();

    var garbageCount = CompartmentPlanPage.garbageCans.length;
    if (garbageCount !== 0) {
      for (i = 0; i < garbageCount; i++) {
        CompartmentPlanPage.garbageCans[0].click();
      }
    }
  });

  it("User can leave some of the compartments empty - POSITIVE TEST CASE", () => {
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

    OrderItemsPage.enterFuelInput("29000");

    OrderItemsPage.nextButton.click();

    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.keepEmptyButtons[2].click();

    CompartmentPlanPage.keepEmptyButtons[3].click();

    CompartmentPlanPage.keepEmptyButtons[4].click();

    CompartmentPlanPage.keepEmptyButtons[5].click();

    CompartmentPlanPage.fillButtons[0].click();

    CompartmentPlanPage.unassignedProduct14408L.waitForDisplayed({
      timeout: 5000,
    });
  });

  it("User can leave some of the compartments empty, then enables Leave Empty Buttons and can load the previously empty compartments - POSITIVE TEST CASE ", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({
      timeout: 5000,
    });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({
      timeout: 5000,
    });
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
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterFuelInput("29000");

    OrderItemsPage.nextButton.click();

    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.keepEmptyButtons[2].click();

    CompartmentPlanPage.keepEmptyButtons[3].click();

    CompartmentPlanPage.keepEmptyButtons[4].click();

    CompartmentPlanPage.keepEmptyButtons[5].click();

    CompartmentPlanPage.fillButtons[0].click();

    CompartmentPlanPage.unassignedProduct14408L.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.keepEmptyButtons[3].click();

    CompartmentPlanPage.keepEmptyButtons[4].click();

    CompartmentPlanPage.keepEmptyButtons[5].click();

    CompartmentPlanPage.fillButtons[0].click();
  });

  it("User starts automatic loading, then can continue with manual loading - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({
      timeout: 5000,
    });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({
      timeout: 5000,
    });
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
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterFuelInput("29000");
    OrderItemsPage.enterFuelInput("9000");

    OrderItemsPage.nextButton.click();

    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.fillButtons[0].click();

    CompartmentPlanPage.automaticPlanningToggle.click();

    CompartmentPlanPage.selectButtons[1].click();

    CompartmentPlanPage.fillButtons[0].click();

    CompartmentPlanPage.unassignedProduct2280L.waitForDisplayed({
      timeout: 5000,
    });
  });

  it("User starts manual loading, then can continue with automatic loading - POSITIVE TEST CASE", () => {
    LoginPage.open();
    LoginPage.login("tci_driver", "tci_driver");

    expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
    TerminalsPage.testTerminal_1.click();
    TerminalsPage.newCheckInButton.waitForDisplayed({
      timeout: 5000,
    });
    TerminalsPage.newCheckInButton.click();

    BasicInfoPage.entryDateInputArea.waitForDisplayed({
      timeout: 5000,
    });
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
    OrderItemsPage.autorizationTypeLabel.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterLadestamm("196822081");
    OrderItemsPage.addButton.waitForDisplayed({
      timeout: 5000,
    });

    OrderItemsPage.enterFuelInput("29000");
    OrderItemsPage.enterFuelInput("9000");

    OrderItemsPage.nextButton.click();

    CompartmentPlanPage.compartmentPlanningLabel.waitForDisplayed({
      timeout: 5000,
    });

    CompartmentPlanPage.automaticPlanningToggle.click();

    CompartmentPlanPage.selectButtons[0].click();
    CompartmentPlanPage.fillButtons[0].click();
    CompartmentPlanPage.fillButtons[0].click();
    CompartmentPlanPage.fillButtons[0].click();
    CompartmentPlanPage.fillButtons[0].click();
    CompartmentPlanPage.fillButtons[0].click();
    CompartmentPlanPage.automaticPlanningToggle.click();
    CompartmentPlanPage.fillButtons[1].click();

    CompartmentPlanPage.unassignedProduct2280L.waitForDisplayed({
      timeout: 5000,
    });
  });

  it("User can overload some of the compartments by enabling Compertment Overload Button - POSITIVE TEST CASE", () => {
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

    OrderItemsPage.enterFuelInput("30000");
    OrderItemsPage.trashBin.waitForDisplayed({ timeout: 5000 });

    OrderItemsPage.nextButton.click();
    browser.pause(3000);
    //CompartmentPlanPage.fillButton.waitForDisplayed({ timeout: 5000 });

    // console.log("**********************************   "+CompartmentPlanPage.currentLoadedProductAmount.getText());
    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "30,000 L"
    );

    CompartmentPlanPage.keepEmptyButtons[2].click();

    CompartmentPlanPage.keepEmptyButtons[3].click();

    CompartmentPlanPage.keepEmptyButtons[4].click();

    CompartmentPlanPage.keepEmptyButtons[5].click();

    CompartmentPlanPage.overflowCompButtons[1].click();

    CompartmentPlanPage.fillButton.click();
  
    CompartmentPlanPage.fillButton.click();
    CompartmentPlanPage.compartmentPositionInputs[2].waitForDisplayed({
      timeout: 5000,
    });

    
  });

  it("User can cancel the current process at Compartment Planning Page - POSITIVE TEST CASE", () => {
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

    expect(CompartmentPlanPage.currentLoadedProductAmount).toHaveText(
      "20,000 L"
    );
    
    compartmentPlanPage.cancelButton.click();
    expect(TerminalsPage.newCheckInButton).toBeDisplayed();
    
  });

 

});
