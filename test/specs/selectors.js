describe("Selectors demo", () => {

    it("Demo on By Name", async()=>{

        await browser.url("http://demo.guru99.com/")
        await browser.maximizeWindow()
        await browser.setTimeout({'pageLoad':4000});
        let emailId = $('[name="emailid"]')
        await emailId.setValue("kbtutorials@gmail.com")
        let text = $('label[id = "message9"]')
        console.log("***"+text.getText())
        await browser.pause(7000)
    })
})