/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var router = require('express').Router(),
    Joi = require("joi");

var routeMapping = {

    "/login" : {
        validate : {
            body : {
                email : Joi.string().email(),
                password : Joi.string().min(6)
            }
        },
        authentication : 
    }
}
router.get('/', function(req, res) {
    res.send("Ok2");
});

module.exports = router;