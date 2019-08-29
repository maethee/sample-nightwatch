module.exports = {
    'Demo test' : function (browser) {
      browser
        .url('https://www.renthub.in.th/dashboard/apartments')
        .waitForElementVisible('input[id=user_email]')
        .setValue('input[id=user_email]', 'xxx')
        .setValue('input[id=user_password]', 'xxx')
        .click('input[type=submit]')
        .useXpath() 
        .waitForElementVisible('//*[@id="dashboard-tab"]/li[1]/ul/li[2]/a')
        .click('//*[@id="dashboard-tab"]/li[1]/ul/li[2]/a')
        .waitForElementVisible('//*[@id="result_panel_wrapper"]/div/div[1]/div/div[2]/a')
        .click('//*[@id="result_panel_wrapper"]/div/div[1]/div/div[2]/a')
        //ชื่อโครงการ
        .waitForElementVisible('//*[@id="form-for-condo-listing"]/div[2]/ul/li[3]/div/div/div/div[1]/input')
        .setValue('//*[@id="form-for-condo-listing"]/div[2]/ul/li[3]/div/div/div/div[1]/input', 'Garden Condo Huamark')
        .pause(1000)
        .waitForElementVisible('//*[@id="form-for-condo-listing"]/div[2]/ul/li[3]/div/div/div/div[2]/div/div')
        .click('//*[@id="form-for-condo-listing"]/div[2]/ul/li[3]/div/div/div/div[2]/div/div')
        .waitForElementVisible('input[id=user_email]')
        .end();
    }
  };
