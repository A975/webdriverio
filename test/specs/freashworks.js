describe('Web Page title', () => {

    it('Drop down', async() => {

        await browser.url('https://www.spicejet.com/')
        await browser.maximizeWindow();
        await browser.pause(5000);

        let currencyDrpDown = $$("//select[@name='identifier']/option")

        for(var i = 0; i<currencyDrpDown.length;i++){
            console.log(currencyDrpDown[i].getText()+"*****")
            if(currencyDrpDown[i].getText() == "AED"){
                currencyDrpDown[i].click()
            }

        }

    })

})