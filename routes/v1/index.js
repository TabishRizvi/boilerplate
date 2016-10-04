/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */


var router = require('express').Router();

router.use('/user', require('./user'));
router.use('/admin', require('./admin'));


module.exports = router;