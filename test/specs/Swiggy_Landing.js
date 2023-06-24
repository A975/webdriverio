import data from '../util/appData'
const Swiggy = require('../pages/swiggyAutomate.page') 
import allureReporter from '@wdio/allure-reporter'

describe('Swiggy Landing page' , () => {
    
    it('Launch the URL and verify the title', async() => {
       
        await browser.url(data.getUrl());

        const url = browser.getUrl();
        // chaiExpect(url).to.include('/www.swiggy.com/')

        await expect(browser).toHaveTitle("Order food online from India's best food delivery service. Order from restaurants near you");
        
        await browser.maximizeWindow()

        await Swiggy.testcase1()

        //let location = $("//input[@id='location']")
        // let locate = $("//span[@class='LukWG']")

        // await locate.click()
        // await browser.pause(2000)


    });

    it('filter the elements', async () => {

        allureReporter.addSeverity('Critical')
        Swiggy.testcase2()
        //let filter = $("//span[@class='h0xOG']")
        //await filter.click()
        //await browser.pause(2000)

    });

    it('select the food type', async () => {

        // let option1 = $("//div[text()='Chinese']")
        // await option1.click()
        // await browser.pause(2000)

        // let restaurants = $("//a[@class='LIBH0']")
        // await restaurants.click()
        // await browser.pause(2000)

        Swiggy.testcase3()


    });

    it('Add the food', async () => {

        // let select = $("//div[@class='nA6kb']")
        // await select.click()
        // await browser.pause(2000)

        // let addfood = $("//div[text() = 'ADD']")
        // await addfood.scrollIntoView()
        // let clickable = await addfood.isClickable()
        // console.log(clickable)
        // await addfood.click()
        // await browser.pause(2000)

        Swiggy.testcase4()


    });
       

    it('Customize and Add', async () => {

        //allureReporter.addFeature('customize & add');
        Swiggy.testcase7()
        

    });

    it('View cart', async () => {

        // let viewcart = $("//span[text() = 'View Cart']")
        // await viewcart.click()
        // await browser.pause(2000)

        Swiggy.testcase5()
    
    });

    it('login', async () => {

        
        // letlogin = $("//div[@class='POo4b']")
        // await letlogin.click()
        // await browser.pause(2000)

        // mobileno = $("//input[@id = 'mobile']")
        // await mobileno.setValue("8707413618")
        // await browser.pause(2000)

        // login = $("//a[@class = '_2REYC']")
        // await login.click()
        

        // otp = $("//input[@id = 'otp']")
        // await otp.setValue("1234")
        // await browser.pause(2000)

        Swiggy.testcase6("8707413618","123456")


    });
            
        
});
 