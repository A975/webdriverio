import {Given,When,Then} from 'cucumber';
const Swiggy = require('../pages/swiggyAutomate.page') 

Given(/^I'm on the login page$/, function(){

    browser.url("https://www.swiggy.com/");

    const url = browser.getUrl();
    // chaiExpect(url).to.include('/www.swiggy.com/')

    expect(browser).toHaveTitle("Order food online from India's best food delivery service. Order from restaurants near you");
        
    browser.maximizeWindow()

    

});

When(/^I locate myself $/, function(){

    Swiggy.testcase1()

});

Then(/^I shall be on the resturants page$/, function(){

    allureReporter.addSeverity('Critical')

    Swiggy.testcase2()

});