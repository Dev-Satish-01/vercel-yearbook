const router = require("express").Router();
const { isAdmin } = require("../middleware/auth");

const { 
    nominateUser, 
    sendRequest, 
    declineRequest, 
    allRequests 
} = require("../views/nominations");

router.post("/nominate", nominateUser);
router.get("/requests", allRequests);
router.post("/requests", sendRequest);
router.post("/decline", declineRequest);

module.exports = router;