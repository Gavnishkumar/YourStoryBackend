const asyncHandler = require('express-async-handler')
const Profile = require('../Models/Profile');
const { matchProfiles } = require('../Config/Algorithm/UserMatching');
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
});
const SearchProfile=(asyncHandler(async (req, res) => {
  console.log("chl rha hai")
  // const searchText = req.body.searchText;
  // console.log(searchText)
  // try {
  //     const profiles = await Profile.find({
  //         $or: [
  //             { Name: { $regex: searchText, $options: 'i' } }, 
  //             { Email: { $regex: searchText, $options: 'i' } }, 
  //             { Role: { $regex: searchText, $options: 'i' } }, 
  //             { Bio: { $regex: searchText, $options: 'i' } },
  //         ]
  //     });

//       res.json(profiles);
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Server Error');
//   }
}
))
const AddMentors = async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.userId);
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
  
      const { mentorId } = req.body;
      if (!mentorId) {
        return res.status(400).send('Mentor ID is required');
      }
  
      // Check if the mentor is already in the MyMentors array
      if (profile.MyMentors.includes(mentorId)) {
        return res.status(400).send('Mentor is already present');
      }
  
      profile.MyMentors.push(mentorId);
      await profile.save();
      
      res.status(200).send(profile);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  const RemoveMentors=asyncHandler(async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.userId);
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
      profile.MyMentors.pull(req.body.mentorId);
      await profile.save();
      res.status(200).send(profile);
    } catch (error){
      res.status(500).send(error.message);
    }
  });

  const MyAllMentors=asyncHandler(async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.userId).populate({
        path: 'MyMentors',
        select: 'Image Name Bio Role'
      }).exec();
  
      if (!profile) {
        return res.status(404).send('Profile not found');
      }
  
      res.status(200).json(profile.MyMentors);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
// user matching profile algorithm
const MatchProfile = asyncHandler(async (req, res) => {
    try {
      const userId = req.params.userId;
      const matchedProfiles = await matchProfiles(userId);
  
      res.status(200).send(matchedProfiles);
    } catch (err) {
      res.status(500).send({ error: "Internal server error" });
    }
  });

module.exports={FetchProfileDetail,UpdateProfileDetail,MatchProfile, AddMentors, RemoveMentors,MyAllMentors,SearchProfile}