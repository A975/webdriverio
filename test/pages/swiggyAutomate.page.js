class Swiggy{

    get location(){

        return $("//span[@class='LukWG']")
    
    }

    get filter(){

        return $("//span[@class='h0xOG']")

    }

    get option1() {

        return $("//div[text()='Chinese']")

    }

    get resturants() {

        return $("//a[@class='LIBH0']")

    }

    get select() {

        return $("//div[@class='nA6kb']")

    }

    get addfood() {
        
        return $("//div[text() = 'ADD']")

    }

    get customize(){

        return $("//span[@class='_2OGeA']")
    }


    get additem(){

        return $("//span[@class='_38xdN']")

    }

    get viewcart() {

        return $("//span[text()='View Cart']")

    }

    get letloginbtn() {

       return $("//div[@class='POo4b']")

    }


    get mobile() {

        return $("//input[@id = 'mobile']")

    }

    get clicklogin() {

        return $("//a[@class = '_2REYC']")

    }

    get otp() {

        return $("//input[@id = 'otp']")

    }

    get verifyotp() {

        return $("//a[@class='_2REYC']")

    }

    async testcase1()
    {
        await this.location.click()
        await browser.pause(2000)
    }

    async testcase2()
    {
        await this.filter.click()
        await browser.pause(2000)
    }
        
    async testcase3()
    {

        await this.option1.click()
       
        await browser.pause(2000)
    }
    
    async testcase4()
    {
        await this.resturants.click()
        await browser.pause(2000)
    }

    async testcase5()
    {
        await this.select.click()
        await browser.pause(2000)
        await this.addfood.scrollIntoView()
        let clickable = await this.addfood.isClickable()
        console.log('*************'+clickable+'***************')
        await this.addfood.click()
        await browser.pause(2000)
    }

    async testcase6()
    {

        let customize = $("//span[@class = '_2OGeA']")
        let doesExisting = await customize.isExisting()
        
        if(doesExisting)
        {
            customize.click()
        }

    }

    async testcase7()
    {
        let additem = $("//span[@class = '_38xdN']")
        let isExisting = await additem.isExisting()

        if(isExisting)
        {
            additem.click()
        }
    }
    
    async testcase8()
    {
        await this.viewcart.click()
        await browser.pause(2000)
    }    
    
    async testcase9()
    {
        await this.letloginbtn.click()
        await browser.pause(2000)

    }

    async testcase10(mobile)
    {

        await this.mobile.setValue(mobile)
        await browser.pause(2000)
        await this.clicklogin.click()
        await browser.pause(2000)

    }

    async testcase11(otp)
    {

        await this.otp.setValue(otp)
        await browser.pause(2000)
        await this.verifyotp.click()
        await browser.pause(5000)

    }

}

module.exports = new Swiggy()