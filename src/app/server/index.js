const express = require('express');
const cookieParser = require('cookie-parser');
const request = require('request');
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
// const QrSvg = require('./qr-svg');
const app = express();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://prevent-default.firebaseio.com"
// });
// app.use(express.static(__dirname + '/public'));
//
// app.all('/homepage/*', function (request, response) {
//     response.sendFile(__dirname + '/public/index.html');
// })

app.all('/login', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
})
app.set('port', (process.env.PORT || 5000));

var userData = "";
const googleDetails = {
    clientID: '1024177313586-im0nllqiuscju2kmi60jvj8fdurlpjmt.apps.googleusercontent.com',
    clientSecret: 'rSohMSdp96V4X2IogQJRjdae',
    authorizationURL: 'https://accounts.google.com/o/oauth2/auth',
    tokenURL: 'https://accounts.google.com/o/oauth2/token',
    callbackURL: "http://localhost:5000/auth/google/callback",
    scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ]
}

var useJive = function () {
    passport.use('google', new GoogleStrategy(googleDetails,
        function (accessToken, refreshToken, profile, done) {
            done(null, accessToken);
        }
    ));
};
var authType = 'google';
var methods = {
    auth: function (callback) {
        useJive();
        return passport.authenticate(authType, callback);
    },
    callback: function (req, res, callback) {
        useJive();
        return passport.authenticate(authType, function (err, token) {
            if (err || !token) {
                if (callback && typeof callback === 'function') {
                    callback(err);
                }
            } else {
                callback(null, token);
            }
        })(req, res);
    }

};

app.get('/googleLogin', function (req, res, next) {
    methods.auth(function () {})(req, res);
});
app.get('/auth/google/callback', function (req, res, next) {
    methods.callback(req, res, function (err, token) {
        if (err) {
            return res.send(500, {
                err: err
            });
        }
        if (token) {
            console.log(token)
            res.cookie('user_token', token, {
                maxAge: 9600000
            });
            return res.redirect('http://localhost:4200/homepage');
        }
    });

});
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
/*To format Jive Response */
// var parseJiveResponse = function (response) {
//     'use strict';
//     var trimmedResponse = response.replace('throw \'allowIllegalResourceCall is false.\';', '');
//     return trimmedResponse !== '' ? JSON.parse(trimmedResponse) : {};
// };
var getUserDetails = function (token, callback) {
    var options = {
        url: 'https://www.googleapis.com/plus/v1/people/me',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    request(options, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            var userDetail = JSON.parse(body);
            // console.log(userDetail);
            var userInfo = {
                name: userDetail.displayName,
                email: userDetail.emails[0].value,
                profilePic: userDetail['image']['url'],
                ntId: userDetail.id
            };
            callback(userInfo);
        } else {
            callback(null);
        }
    });
};
app.get('/api', function (req, res, next) {
    var cookieToken = req.headers['x-access-token'];
    // console.log(cookieToken);
    if (cookieToken != "") {
        getUserDetails(cookieToken, function(userInfo){   
            userData = userInfo;
            name=userData.name;
            res.send({"name":name});     
        });
    } else {
        res.send("{msg:Invalid Token}");
    }
});



app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
