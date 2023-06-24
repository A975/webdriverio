describe('Selectors demo', () => {

    // it('Dynamic Search', async () => {

    //    await browser.url("https://www.tsrtconline.in/oprs-web/");
    //    await browser.maximizeWindow()
    //    await browser.setTimeout(5000)
    //    const frmLoc = $("//input[@name = 'fromPlaceName']")
    //    await frmLoc.click()
    //    await frmLoc.setValue("ban")
    //    browser.pause(5000)
       

    // });


    // it("Move to Demo", async () => {

    //     await browser.url("https://oyorooms.com/")
    //     await $("//h2[text()='Mumbai']").moveTo()
    //     await $("//a[text()='Thane']").click()
    //     await browser.pause(9000)
    //     browser.takeScreenshot()
    //     browser.saveScreenshot("C:\\Users\\mssingh9\\API Testing\\WebdriverIO\\1.png")

    // })


    // it("Demo on switching ", async() => {

    //    await browser.url("https://www.kotak.com/en.html")
    //    await browser.maximizeWindow();
    //    let cHandle = browser.getWindowHandle()
    //    await console.log(cHandle)

    //    //click on Login btn
    //    await $("//span[text()='Login']").click()
    //    await browser.pause(5000)
    //    console.log(browser.getWindowHandle+"***Current")
    //    browser.pause(8000)
    //    var handles = browser.getWindowHandles()
    //    console.log("************"+handles)
       
    //    var newHandle
    //    for(var i=0; i<handles.length; i++)
    //    {
    //         if(handles[i] != cHandle){
 
    //             newHandle = handles[i]

    //         }
    //    }

    //    console.log(newHandle + "****")
    //    browser.switchToWindow(newHandle)

    // })

 

        it("Link text and partial link text", async() => {

            await browser.url("https://www.makemytrip.com/")
            await browser.maximizeWindow()
            await browser.setTimeout({'pageLoad':5000},{'implicit':300})
            let versionElement = $("//span[text()='Holiday Packages']")
            await versionElement.click()
            await browser.pause(9000)

        })


        
        

 
    });
