/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var _ = require("underscore"),
    validation = require("./validation"),
    authorization = require("./authorization");

module.exports.mapRoutes = function (router,routeMapping) {

    _.each(routeMapping,function (el,path) {
        _.each(el,function (element,method) {
            
            router[method](path,validation(element.validate),authorization(element.auth),element.controller);
        });
    });
};