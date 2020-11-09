import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import homepage from '../pages/Homepage';

@binding()
export class HomepageSteps {
    @given(/^I am on the car safety page$/)
    public async givenOnHomepage() {
        homepage.open();
        homepage.acceptCookies();
    }

    @then(/^I should see title "([^"]*)" on home page$/)
    public verifyLandingPage(titleName) {
        assert.equal(browser.getTitle(), titleName);
        assert.equal(homepage.getVolvoImageState(), true);
    }
}
