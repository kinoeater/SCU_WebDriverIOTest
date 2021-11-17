
const LoginPage = require('../pageobjects/login.page');
const TerminalsPage = require('../pageobjects/terminals.page');
const BasicInfoPage = require('../pageobjects/basicInformation.page');
const OrderItemsPage = require('../pageobjects/orderItems.page');


describe('Basic Information Page Related Tests', function () {

    this.retries(1);


    it('With All Valid Data, User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2021', 'John', 'Doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        
        BasicInfoPage.nextButton.click();
       
        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data, UPPER case NAME, Lower Case LastName, User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2021', 'JOHN', 'doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        
        BasicInfoPage.nextButton.click();

        
        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data- Lower case NAME, UPPER Case LastName, User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'john', 'DOE', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
       
        
        BasicInfoPage.nextButton.click();

        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data- All UPPER Case letters Name Surname, User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'JOHN', 'DOE', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        
       
        BasicInfoPage.nextButton.click();

        
        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data- All Lower Case letters Name Surname,  User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'john', 'doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        
        
        BasicInfoPage.nextButton.click();

        
        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data- space at the begining of the Name and Surname,  User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', '   john', '   doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');

       
        BasicInfoPage.nextButton.click();

        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('With All Valid Data- All Lower Case letters Pehicle Plates,  User can navigate next Page successfully - POSITIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'John', 'Doe', '04/12/1991', 'ico-mt100', 'ico-st400');

       
        BasicInfoPage.nextButton.click();

    
        expect(OrderItemsPage.orderItemsLabel).toHaveTextContaining('Order');
        OrderItemsPage.autorizationTypeLabel.waitForDisplayed({ timeout: 5000 });

    })

    it('User should NOT navigate next Page  with inValid Driver First Name - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'wrongName', 'Doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.driverDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.driverDataError).toHaveTextContaining('Kein Fahrzeugführer');

    })

    it('User should NOT navigate next Page  with inValid Driver Last Name - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'John', 'wrongLastName', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.driverDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.driverDataError).toHaveTextContaining('Kein Fahrzeugführer');

    })

    it('User should NOT navigate next Page  with inValid Driver Birth Date - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'John', 'Doe', '04/10/1951', 'ICO-MT100', 'ICO-ST400');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.driverDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.driverDataError).toHaveTextContaining('Kein Fahrzeugführer');

    })

    it('User should NOT navigate next Page with inValid Vehicle Plate 1 - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'John', 'Doe', '04/12/1991', 'inValidPlate1', 'ICO-ST400');
        BasicInfoPage.nextButton.click();


        BasicInfoPage.vehiclePlateDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.vehiclePlateDataError).toHaveTextContaining('Transportmittel');

    })

    it('User should NOT navigate next Page  with inValid Vehicle Plate 2 - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('12/18/2020', 'John', 'Doe', '04/12/1991', 'ICO-MT100', 'inValidPlate2');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.vehiclePlateDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.vehiclePlateDataError).toHaveTextContaining('Transportmittel');

    })

    it('User should NOT navigate next Page by entering 3 vehicle plates for a 2 vehicles truck - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");

        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfoThreeVehicle('12/18/2020', 'John', 'Doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400', 'inn-Val1d');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.vehiclePlateDataError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.vehiclePlateDataError).toHaveTextContaining('Transportmittel');

    })

    it('User should NOT navigate next Page  with a Past Calender Date - NEGATIVE TEST CASE', () => {

        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");


        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining('Please');
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();

        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
        BasicInfoPage.fillBasicInfo('10/08/2020', 'John', 'Doe', '04/12/1991', 'ICO-MT100', 'ICO-ST400');
        BasicInfoPage.nextButton.click();

        BasicInfoPage.pastDateError.waitForDisplayed({ timeout: 5000 });
        expect(BasicInfoPage.pastDateError).toHaveTextContaining('Start-Datum/Zeit');

    })

    it("User should be able to cancel the current process at Basic Information Page - POSITIVE TEST CASE", () => {
        LoginPage.open();
        LoginPage.login("tci_driver", "tci_driver");
    
        expect(TerminalsPage.pleaseSelectTitle).toHaveTextContaining("Please");
        TerminalsPage.testTerminal_1.click();
        TerminalsPage.newCheckInButton.waitForDisplayed({ timeout: 5000 });
        TerminalsPage.newCheckInButton.click();
    
        BasicInfoPage.entryDateInputArea.waitForDisplayed({ timeout: 5000 });
         
         BasicInfoPage.cancelButton.click();
         expect(TerminalsPage.newCheckInButton).toBeDisplayed();
        
      });
    

})