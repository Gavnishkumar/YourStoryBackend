const asyncHandler = require('express-async-handler')
const Profile = require('../Models/Profile')

const FetchProfileDetail =(asyncHandler(async(req,res)=>{
    const userid= req.params.id;
    const ProfileDetail = await Profile.findOne({User:userid});
    if(ProfileDetail){
        res.status(200).json(ProfileDetail);
    }
    else{
        res.status(404).json({msg:"No user data Found"})
    }
}))
const UpdateProfileDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = req.body; 

    try {
        const profile = await Profile.findOne({User:id});
        if (!profile) {
            res.status(404).json({ message: 'Profile not found' });
        } else {
            for (const key in updateData) {
                profile[key] = updateData[key];
            }
            const updatedProfile = await profile.save();
            res.status(200).json(updatedProfile);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
module.exports={FetchProfileDetail,UpdateProfileDetail}