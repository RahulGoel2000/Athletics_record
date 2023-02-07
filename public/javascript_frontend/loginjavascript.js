// var user;
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    sessionStorage.setItem("authenticated","true");
    document.cookie="authenticated=true";
    // window.location.href=window.location.protocol + "//"+window.location.host;
    window.location.assign('/home');
    var user = userCredential.user.uid;
    sessionStorage.setItem("user",user);
    // sessionStorage.setItem("user",user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function signup(){
  var email = document.getElementById("email_class").value;
  var password = document.getElementById("password_class").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    window.alert("Sign up successful")
    window.location.href=window.location.protocol + "//"+window.location.host;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function logout(){
  firebase.auth().signOut();
  sessionStorage.setItem("authenticated","false")
  document.cookie="authenticated=false";
  window.location.href=window.location.protocol + "//"+window.location.host;
}

function googlelogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user.uid;
    sessionStorage.setItem("authenticated","true");
    document.cookie="authenticated=true";
    sessionStorage.setItem("user",user);
    // window.location.href=window.location.protocol + "//"+window.location.host;
    window.location.assign('/home');
    

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    alert(errorMessage)
  });
}

function gitlogin(){

  var provider = new firebase.auth.GithubAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user.uid;
    sessionStorage.setItem("authenticated","true");
    document.cookie="authenticated=true";
    sessionStorage.setItem("user",user);
    window.location.href=window.location.protocol + "//"+window.location.host;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    alert(errorMessage)
    // ...
  });

}



function resetpassword(){
  var email = document.getElementById("email_field").value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("password reset email sent")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}


