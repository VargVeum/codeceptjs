const { I } = inject();

module.exports = {

    loginPageLocators: {
        title: 'h3',
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        submitButton: 'button[type="submit"]',
    },

    fillEmailForm(value) {
        I.fillField(this.loginPageLocators.emailInput, value);
        return this;
    },

    fillPasswordForm(value) {
        I.fillField(this.loginPageLocators.passwordInput, value);
        return this;
    },

    clickSubmitButton() {
        I.click(this.loginPageLocators.submitButton)
        return this;
    },

    checkContent(value) {
        I.see(value)
        return this;
    },

    checkUrl(value) {
        I.seeInCurrentUrl(value)
        return this;
    },

    openUrl(value) {
        I.amOnPage(value)
        return this;
    }
}