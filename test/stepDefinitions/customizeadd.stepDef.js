import {Given,When,Then} from 'cucumber';
const Swiggy = require('../pages/swiggyAutomate.page') 

Given(/^I click on AddItem $/, function(){

    Swiggy.testcase5()

});

When(/^I select addon $/, function(){

    Swiggy.testcase6()


});

Then(/^I click additem and viewcart $/, function(){

    Swiggy.testcase7()
    Swiggy.testcase8()

});