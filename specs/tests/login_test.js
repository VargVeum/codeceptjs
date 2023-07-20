const { I, loginPage } = inject();

Feature('Login tests');

Scenario('Login with valid credentials', ({ loginPage }) => {
    loginPage.openUrl('https://dashboard.visme.co/v2/login')
        .checkContent('Create amazing content')
        .fillEmailForm('test@test.com')
        .fillPasswordForm('qwerty123')
        .clickSubmitButton()
        .checkUrl('Invalid email/password!')
        // this test will be failed for negative report
});
Scenario('Login with invalid email', ({ loginPage }) => {
    loginPage.openUrl('https://dashboard.visme.co/v2/login')
        .checkContent('Create amazing content')
        .fillEmailForm('test@test')
        .fillPasswordForm('qwerty123')
        .clickSubmitButton()
        .checkContent('Recaptcha error')
});
Scenario('Login with invalid password', ({ loginPage }) => {
    loginPage.openUrl('https://dashboard.visme.co/v2/login')
        .checkContent('Create amazing content')
        .fillEmailForm('test@test.com')
        .fillPasswordForm('q')
        .clickSubmitButton()
        .checkContent('Recaptcha error')
});
Scenario('Login with empty fields', ({ loginPage }) => {
  loginPage.openUrl('https://dashboard.visme.co/v2/login')
      .checkContent('Create amazing content')
      .fillEmailForm('')
      .fillPasswordForm('')
      .clickSubmitButton()
      .checkContent('Email required!')
});