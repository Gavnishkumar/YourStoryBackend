const express = require('express');
const protect = require('../middleware/authmiddleware');
const { FetchProfileDetail,UpdateProfileDetail } = require('../Controller/ProfileContainer');
const router= express.Router();
// router.route('/update/').post(registerUser)
router.route('/update/:id').put(protect,UpdateProfileDetail);
router.route('/:id').get(protect,FetchProfileDetail);
module.exports=router;