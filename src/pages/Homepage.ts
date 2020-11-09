import Page from './Page';

class Homepage extends Page {
    /**
     * define the elements
     */
    get getVolvoImage() {
        return $('img.aw');
    }

    get getCookiesAcceptOption() {
        return $('button.optanon-allow-all');
    }

    /**
     * define the page methods
     */

    open() {
        super.open(
            'https://www.volvocars.com/intl/v/car-safety/a-million-more'
        );
        browser.pause(1000);
    }

    getVolvoImageState(){
        return this.getVolvoImage.isExisting();
    }

    acceptCookies() {
        return this.getCookiesAcceptOption.click();
    }
}

export default new Homepage();
