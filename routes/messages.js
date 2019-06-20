const express = require("express"),
      router  = express.Router({mergeParams: true}), //mergeParams gives us access to the id inside of the router
      { createMessage } = require("../handlers/messages");

//prefix - /api/users/:id/messages
router.route("/").post(createMessage);

module.exports = router;
