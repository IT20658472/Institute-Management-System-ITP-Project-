const router = require("express").Router();
const bcrypt = require("bcrypt");
const Staff = require("../models/Staff");

//REGISTER
router.post("/register", async (req, res) => {

  const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newStaff = new Staff({
        employment_type : req.body.employment_type,
        staffID : req.body.staffID,
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        core_subject : req.body.core_subject,
        email : req.body.email,
        address : req.body.address,
        basicSal : req.body.basicSal,
        subCode : req.body.subCode,
        username : req.body.username,
        password : hashedPass,
        position : req.body.position, 
        profile_pic : req.body.profile_pic,    
    });

    try {
      const stffcount = await Staff.count()
      newStaff.staffID = 'S00' + (parseInt(stffcount)+1)
      console.log(newStaff.astaffID)
        try {
          const Staff = await newStaff.save();
          res.status(200).json(newStaff);
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (error) {
        console.log(error)
      }
});


//LOGIN
router.post("/login", async (req, res) => {
  try {
    const staff = await Staff.findOne({ username: req.body.username });
    !staff && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, staff.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } =staff._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;