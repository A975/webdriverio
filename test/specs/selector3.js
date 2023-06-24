describe('CSS and Xpath Demo', () => {

    it("CSS and Xpath", async ()=> {


        await browser.url("https://www.facebook.com/")
        browser.setTimeout({'pageLoad': 3000},{'implicit':400})

        await $('input#email').setValue('kbtutorials')
        browser.pause(9000)

        await $('input#email').setValue('anjaliks@12')

    })   

})