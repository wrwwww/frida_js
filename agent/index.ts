Java.perform(function () {
  const BillingResult = Java.use("com.mygamez.mysdk.api.billing.BillingResult");
  const getcode = BillingResult.getResultCode;
  const ResultCode = Java.use("com.mygamez.mysdk.api.billing.ResultCode");
  getcode.implementation = function () {
    // 获取原始结果
    var origResult = this.getResultCode();
    console.log("[+] Original result code: " + origResult);

    return ResultCode.SUCCESS.value;
  };
 
});


// 下面是直接修改游戏中货币数据
// Java.perform(() => {
//     const MainActivity = Java.use("com.fingersoft.game.MainActivity")
//     const Toast = Java.use("android.widget.Toast")
//     const string = Java.use("java.lang.String")

//     const resume = MainActivity.onResume
//     resume.implementation = function () {
//         resume.call(this)
//         let str = string.$new("注入弹窗")
//         Toast.makeText(this, str, Toast.LENGTH_LONG.value).show();

//         const store=Java.use("com.fingersoft.game.InAppPurchaseStore")
//         store.mGems.value=10
//         store.mPaints.value=10
//         store.mCoins.value=10
//         // onValidateSuccess.call(this)

//     }
//     MainActivity.getDeviceLanguage.implementation = function () {
//         return string.$new("en")
//     }

// })
