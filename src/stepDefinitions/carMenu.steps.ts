import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import carMenuPage from '../pages/CarMenuPage';

@binding()
export class CarMenuSteps {
    @given(/^I navigate to cars menu$/)
    public async naviagteToCarsMenu() {
        carMenuPage.clickCardMenuButton();
    }

    @when(/^I click on the "([^"]*)" tab$/)
    public async gotoCarTabOption(tabName) {
        carMenuPage.clickOnCarTab(tabName);
    }

    @then(/^I should see "([^"]*)" options for "([^"]*)" for Electric Cars$/)
    public verifyElectricCarMenuOptions(carMenu, carType) {
        var electricCarMenuSUVNames = carMenuPage.getElectricCarMenuNames(
            carType
        );
        assert.equal(electricCarMenuSUVNames.includes(carMenu), true);
        carMenuPage.closeCarMenu();
    }

    @then(/^I should see "([^"]*)" options for "([^"]*)" for Hybrid Cars$/)
    public verifyHybridCarMenuOptions(carMenu, carType) {
        var hybridCarMenuSUVNames = carMenuPage.getHybridCarMenuNames(carType);
        assert.equal(hybridCarMenuSUVNames.includes(carMenu), true);
        carMenuPage.closeCarMenu();
    }

    @then(/^I should see "([^"]*)" options for "([^"]*)" for Mild Hybrid Cars$/)
    public verifyMildHybridCarMenuOptions(carMenu, carType) {
        var mildHybridCarMenuSUVNames = carMenuPage.getMildHybridCarMenuNames(
            carType
        );
        assert.equal(mildHybridCarMenuSUVNames.includes(carMenu), true);
        carMenuPage.closeCarMenu();
    }
}
