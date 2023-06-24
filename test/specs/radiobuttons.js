describe("Radio Button Automation", () => {

    it('Radio btn', async () => {
        
        await browser.url("https://www.spicejet.com/")
        await browser.maximizeWindow()
        await browser.pause(5000)
        console.log("****************************************************")
        
        let radioButton1 = $("//div[@class='css-1dbjc4n r-zso239'][1]").isSelected()
        let radioButton2 = $("//div[@class='css-1dbjc4n r-zso239'][2]").isSelected()

        console.log('******'+radioButton1)
        console.log('******'+radioButton2)

        radioButton2.click()

    })
})