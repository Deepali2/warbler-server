const express     = require('express'),
       router     = express.Router(),
       { signup } = require("../handlers/auth");

//if there is any kind of post request to /signup then I want to run my signup function
router.post("/signup", signup);


module.exports = router;
