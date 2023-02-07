const express = require('express');
const router = express.Router();
var path = require('path');
var authenticated = "false";

// router.get('/login', (req, res, next) => {

//   authenticated = req.cookies.authenticated;
//   console.log(req.cookies.authenticated);
//   // storage.setItem("ram","shyam");
//   // console.log(authenticated)
//   if(authenticated=="true")
//   {
//   res.redirect('/home');
//   }
//   else
//   {
//     res.render('login');
//   }
//   });

//   router.get('/signinphone', (req, res, next) => {


//       res.render('signinphone');
//   });


// router.get('/home', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('company_select');
// }
// else{
//   res.redirect('/login');
// }
// });

// router.get('/form', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('company_form');
// }
// else{
//   res.redirect('/login');
// }
// });


// router.get('/recording', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('recording');
// }
// else{
//   res.redirect('/login');
// }
// });
// router.get('/csvtask', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('taskUpload');
// }
// else{
//   res.redirect('/login');
// }
// });

// router.get('/follow', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('follow');
// }
// else{
//   res.redirect('/login');
// }
// });

// router.get('/setting', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('setting');
// }
// else{
//   res.redirect('/login');
// }
// });

// router.get('/middle', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   // res.render('canvas');
//   res.render('middle');
// }
// else{
//   res.redirect('/login');
// }
// });

// router.get('/visualiser', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   if(authenticated=="true")
//   {
//   res.render('canvas');
//   // res.render('company_select');
// }
// else{
//   res.redirect('/login');
// }
// });



// router.get('/privacyPolicy_and_T&C', (req, res, next) => {

//   res.render('privacyPolicy_and_T&C');
//   // res.render('company_select');


// });


// router.get('/privacy_policy', (req, res, next) => {

//   res.render('privacy_policy');
//   // res.render('company_select');


// });


// router.get('/terms_and_conditions', (req, res, next) => {

//   res.render('terms_and_conditions');
//   // res.render('company_select');


// });

// router.get('/path_bot', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   // console.log(storage.getItem("authenticated"))
//   if(authenticated=="true")
//   {
//     // res.redirect('/home');
//     res.render('Path_move_record');
//   }
//   else{
//     res.redirect('/login');
//   }
// });


// router.get('/', (req, res, next) => {
//   authenticated = req.cookies.authenticated;
//   // console.log(storage.getItem("authenticated"))
//   if(authenticated=="true")
//   {
//     res.render('index-logout');
//   }
//   else{
//     res.render('index-login');
//   }
// });




router.get('/*', (req, res, next) => {
  // authenticated = req.cookies.authenticated;
  // console.log(storage.getItem("authenticated"))
  // if(authenticated=="true")
  // {
  //   res.redirect(req.originalUrl);
  // }
  // else{
    res.render('news');
  // }
});

module.exports = router;
