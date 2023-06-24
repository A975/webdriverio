describe('Looping through', ()=>{

    it('Looping through title', async () => {

        await browser.url('https://www.makemytrip.com/');
        await browser.maximizeWindow();
        await browser.pause(5000);
        
        await $("//span[contains(@class,'switcherDownArrow')]").moveTo()
        await browser.pause(5000)
    

    });
})