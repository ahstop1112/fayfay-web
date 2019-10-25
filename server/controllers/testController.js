"use strict";

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('test/index', {
        userInfo: {}
    })
});

router.get('/flash', (req, res) => {
    res.flash('message', 'Thanks for viewing the index page!!');
    res.redirect('/test')
});

router.get('/session/set/:something', (req, res) => {
    req.session.stuff = req.params.something;
    res.send("OK")
});
router.get('/session/get', (req, res) => {
    res.json(req.session)
});

module.exports = router;