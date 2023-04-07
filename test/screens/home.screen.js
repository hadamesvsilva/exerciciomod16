class HomeScreen {
    get #enterStoreAddress(){
        return $('id:com.wdiodemoapp')
    }

    async goToLogin(){
        this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()