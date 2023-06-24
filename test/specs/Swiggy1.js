describe('Swiggy Landing page' , () => {

    before(() => {

        browser.url("https://www.swiggy.com/");

    })
    
    it('Launch the URL and verify the title', async()=>{

        
        await expect(browser).toHaveTitle("Order food online from India's best food delivery service. Order from restaurants near you");
        let signup = $("//a[@class='r2iyh']")
        await signup.click()
        browser.pause(2000)
        
        let textField1 = $("//input[@id='mobile']")
        await textField1.setValue("7905640443")
        browser.pause(2000)

        let textField2 = $("//input[@id='name']")
        await textField2.setValue("Kiran Singhh")
        browser.pause(2000)
        
        let textField3 = $("//input[@id='email']")
        await textField3.setValue("anjaliks12@gmail.com")
        browser.pause(2000)
        
        let btn = $("//input[@type='submit']")
        await btn.click()
        browser.pause(5000)

        
    })


});