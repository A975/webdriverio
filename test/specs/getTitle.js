describe('Webpage title', ()=>{
    it('Get web page title', async()=>{
        
        await browser.url("https://www.makemytrip.com/");
        await browser.maximizeWindow();
        const title = browser.getTitle();
        console.log('***********'+title+'***********')

    });
});