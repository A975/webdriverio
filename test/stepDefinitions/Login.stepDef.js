import {Given,When,Then} from 'cucumber';
const Swiggy = require('../pages/swiggyAutomate.page') 

Given(/^I click on Login option $/, function(){

    Swiggy.testcase9()

});

When(/^I enter phone number and login $/, function(){

    Swiggy.testcase10()

});

Then(/^I get otp and verify $/, function(){

    Swiggy.testcase11()

});