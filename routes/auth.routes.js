const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User.model');
const Contact = require('../models/Contact.model');

const {
    ensureAuthenticated,
    forwardAuthenticated
} = require('../config/auth');

/* GET login page. */
router.get('/login', forwardAuthenticated, (req, res) => {
    res.render('login', { user: req.user, page_title: 'Login' });
})

/* GET dashboard page. */
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    Contact.find({}, function (err, contacts) {
        // note that data is an array of objects, not a single object!
        res.render('dashboard', {
            user: req.user,
            contacts: contacts,
            page_title: 'Dashboard'

        });
    });
});

router.update('/dashboard/update', ensureAuthenticated, (req, res) => {
    let { first_name,
        last_name,
        email,
        phone,
        message } = req.body;
    Contact.findOne({
        user_type_name: "mentor"
    }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        } else {
            doc.first_name = first_name
            doc.last_name = last_name
            doc.email = email
            doc.phone = phone
            doc.message = message
            doc
                .save()
                .then(function (err, result) {
                    req.flash(
                        'success_msg',
                        "Message has been sent."
                    );
                    res.redirect('/contact-me');
                })
                .catch(err => console.log(err));
        }
    });
});


/* POST login page. */
router.post('/login', (req, res, next) => {
    User.findOne({
        email: req.body.email
    }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        } else {
            passport.authenticate('local', {
                successRedirect: '/dashboard',
                failureRedirect: '/login',
                failureFlash: true
            })(req, res, next);
        }
    });
});

/* GET logout page. */
router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success_msg', 'You are logged out');
        res.redirect('/login');
    });

});

module.exports = router;