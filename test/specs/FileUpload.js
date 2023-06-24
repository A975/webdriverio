describe('File upload Demo', ()=> {

    it('Testing file upload Scenario', async()=>{
        await browser.url("http://demo.guru99.com/test/upload/")
        await browser.maximizeWindow()
        await browser.pause(8000)
        let FileUpload = $("//input[@id='uploadfile_0']")
        await FileUpload.setValue("C:\\Users\\mssingh9\\Documents\\git commands.txt")
        await $("//input[@id='terms']").click()
        await browser.pause(8000)
        await $("//button[@id='submitbutton']").click()
        //console.log("//h3/center").getText()
    });
});