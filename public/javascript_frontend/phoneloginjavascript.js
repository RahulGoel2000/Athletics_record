const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');
const phoneNumberField = document.getElementById('phoneNumber');
// const recaptcha_cont = document.getElementById('recaptcha-container');
const auth = firebase.auth();
const codeField = document.getElementById('code');
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

recaptchaVerifier.render().then(widgetId => {
  window.recaptchaWidgetId = widgetId;
})

const sendVerificationCode = () => {
  const phoneNumber = phoneNumberField.value;
  const appVerifier = window.recaptchaVerifier;

  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(confirmationResult => {
    
    const sentCodeId = confirmationResult.verificationId;
    signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
  })
}

const signInWithPhone = sentCodeId => {
  const code = codeField.value;
  const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
  auth.signInWithCredential(credential)
  .then(() => {
    sessionStorage.setItem("authenticated","true");
    document.cookie="authenticated=true";
    // window.location.href=window.location.protocol + "//"+window.location.host;
    // var user=credential
    const user = firebase.auth().currentUser.uid;

    // console.log(.uid)
    sessionStorage.setItem("user",user);
    window.location.assign('/home');
  })
  .catch(err => {
    console.error(err);
  })
}

getCodeButton.addEventListener('click', sendVerificationCode);

