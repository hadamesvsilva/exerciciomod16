describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
        const selector = 'new UiSelector().text("OK").className("android.widget.Button")'
        const button = await $(`android=${selector}`)
        const actualText = 'Home'
    
        await $('~Forms').click()
        await $('android=new UiSelector().text("Input field:")').waitForExist({ timeout: 20000 })
        await $('~text-input').setValue('Módulo 16')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~switch').click()
        await $('~Dropdown').click()
        await $('android=new UiSelector().text("This app is awesome")').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('~button-Active').click()
        await $('android=new UiSelector().text("This button is")').waitForExist({timeout: 20000})
        await button.click()
        expect (await $('//android.widget.TextView').getText(actualText))
    });
});
