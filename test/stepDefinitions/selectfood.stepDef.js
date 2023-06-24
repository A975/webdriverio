import {Given, When, Then} from 'cucumber';
const Swiggy = require('../pages/swiggyAutomate.page') 

Given(/^I'm on the resturants page$/,function(){

    browser.url("https://www.swiggy.com/")

});

When(/^I select a food$/, function(){

    Swiggy.testcase3()

});


Then(/^I get the resturants$/, function(){

    Swiggy.testcase4()
    Swiggy.testcase

});