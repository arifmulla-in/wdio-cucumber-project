import Page from './Page';

class CarMenuPage extends Page {
    /**
     * define the elements
     */
    get carsOptionsButton() {
        return $(
            '#site-nav-topbar-wrapper > nav > div.SiteNav-Topbar-CarsMenu > button'
        );
    }

    get getElectricCarTab() {
        return $('#site-nav-cars-menu-section-tab-0');
    }

    get getElectricCarSUV() {
        return $$('#site-nav-cars-menu-section-panel-0 > div > div.ab');
    }

    get getHybridCarTab() {
        return $('#site-nav-cars-menu-section-tab-1');
    }

    get getHybridCarSUV() {
        return $$(
            '#site-nav-cars-menu-section-panel-1 > div:nth-child(1) > div.ab'
        );
    }

    get getHybridCarEstates() {
        return $$(
            '#site-nav-cars-menu-section-panel-1 > div:nth-child(2) > div.ab'
        );
    }

    get getHybridCarSedans() {
        return $$(
            '#site-nav-cars-menu-section-panel-1 > div:nth-child(3) > div.ab'
        );
    }

    get getMildHybridCarTab() {
        return $('#site-nav-cars-menu-section-tab-2');
    }

    get getMildHybridCarSUV() {
        return $$(
            '#site-nav-cars-menu-section-panel-2 > div:nth-child(1) > div.ab'
        );
    }

    get getMildHybridCarEstates() {
        return $$(
            '#site-nav-cars-menu-section-panel-2 > div:nth-child(2) > div.ab'
        );
    }

    get getMildHybridCarSedans() {
        return $$(
            '#site-nav-cars-menu-section-panel-2 > div:nth-child(3) > div.ab'
        );
    }

    get getCloseCarMenuOption() {
        return $(
            '#site-nav-topbar-wrapper > nav > div.SiteNav-Topbar-CarsMenu > div > button'
        );
        // return $('[data-auto-id="nav:carMenuCloseButton"]');
    }

    /**
     * define the page methods
     */

    clickCardMenuButton() {
        browser.pause(5000);
        this.carsOptionsButton.waitForDisplayed(1000);
        return this.carsOptionsButton.click();
    }

    clickElectricCarTab() {
        this.getElectricCarTab.click();
    }

    getElectricCarMenuSUVNames() {
        var menuItems = [];
        this.getElectricCarSUV.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    clickHybridCarTab() {
        this.getHybridCarTab.click();
    }

    getHybridCarMenuSUVNames() {
        var menuItems = [];
        this.getHybridCarSUV.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    getHybridCarMenuEstatesNames() {
        var menuItems = [];
        this.getHybridCarEstates.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    getHybridCarMenuSedansNames() {
        var menuItems = [];
        this.getHybridCarSedans.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    clickMildHybridCarTab() {
        this.getMildHybridCarTab.click();
    }

    getMildHybridCarMenuSUVNames() {
        var menuItems = [];
        this.getMildHybridCarSUV.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    getMildHybridCarMenuEstatesNames() {
        var menuItems = [];
        this.getMildHybridCarEstates.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    getMildHybridCarMenuSedansNames() {
        var menuItems = [];
        this.getMildHybridCarSedans.forEach(element => {
            menuItems.push(element.getText());
        });
        return menuItems.toString().split('\n');
    }

    closeCarMenu() {
        this.getCloseCarMenuOption.click();
    }

    clickOnCarTab(tabname) {
        switch (tabname) {
            case 'Electric': {
                this.getElectricCarTab.click();
                break;
            }
            case 'Hybrid': {
                this.getHybridCarTab.click();
                break;
            }
            case 'Mild-Hybrid': {
                this.getMildHybridCarTab.click();
                break;
            }
            default: {
                break;
            }
        }
    }

    getElectricCarMenuNames(carType) {
        switch (carType) {
            case 'SUV': {
                return this.getElectricCarMenuSUVNames();
                break;
            }
            default: {
                break;
            }
        }
    }

    getHybridCarMenuNames(carType) {
        switch (carType) {
            case 'SUV': {
                return this.getHybridCarMenuSUVNames();
                break;
            }
            case 'Estates': {
                return this.getHybridCarMenuEstatesNames();
                break;
            }
            case 'Sedans': {
                return this.getHybridCarMenuSedansNames();
                break;
            }
            default: {
                break;
            }
        }
    }

    getMildHybridCarMenuNames(carType) {
        switch (carType) {
            case 'SUV': {
                return this.getMildHybridCarMenuSUVNames();
                break;
            }
            case 'Estates': {
                return this.getMildHybridCarMenuEstatesNames();
                break;
            }
            case 'Sedans': {
                return this.getMildHybridCarMenuSedansNames();
                break;
            }
            default: {
                break;
            }
        }
    }
}

export default new CarMenuPage();
