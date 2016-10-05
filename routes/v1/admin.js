/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var router = require('express').Router(),
    Joi = require("joi"),
    adminControllers = require("../../controller/v1/admin");
    generateRoute = require("../../lib/generateRoute");

var routeMapping = {

    "/login" : {
        "post" : {
            validate : {
                body : {
                    email : Joi.string().email(),
                    password : Joi.string().min(6)
                }
            },
            auth :  null,
            controller : adminControllers.adminLogin
        }
    },
    "/user" : {
        "get" : {
            validate : {
                query : {
                    user_id : Joi.string().optional()
                }
            },
            auth :  "AdminAuth",
            controller : adminControllers.adminListUser
        },
        "delete" : {
            validate : {
                query : {
                    user_id : Joi.string()
                }
            },
            auth :  "AdminAuth",
            controller : adminControllers.adminDeleteUser
        }
    }
};

generateRoute.mapRoutes(router,routeMapping);

module.exports = router;