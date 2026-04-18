const express = require("express");
const router = express.Router();
const { addSchool,listSchool } = require("../controllers/schoolController");


router.post('/addSchool',addSchool);
router.get('/listSchool',listSchool);

module.exports = router;