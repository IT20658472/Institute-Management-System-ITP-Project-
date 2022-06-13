const router = require("express").Router();
const Staff = require("../models/Staff");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/updatestff/:id", async(req, res) => {
  
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  try {
    const updatedStaff = await Staff.findOneAndUpdate({'staffID':req.params.id},
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedStaff);
  } catch (err) {
    res.status(500).json(err);
  } 
});

//DELETE
router.delete("/deletestff/:staffID", async(req, res) => {
 
  try {
    const deletedStaff = await Staff.findOneAndDelete({'staffID':req.params.staffID});
    try {
      await deletedStaff.delete();
      res.status(200).json("Staff has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }

});


//GET ACADEMIC STAFF
router.get("/:staffID", async (req, res) => {
  try {
    const viewstaff = await Staff.findOne({'staffID':req.params.staffID})
    const { password, ...others } = viewstaff._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ACADEMIC STAFF
router.get("/", async (req, res) => {
  const sta_id = req.query.staffID;
  try {
    let staff;
    if (sta_id) {
      staff = await Staff.find({ staffID });
    } else {
      staff = await Staff.find();
    }
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET COUNT
router.route("/countDocuments/:employment_type/").get(function(req, res) {
  Staff.count({ employment_type: req.params.employment_type}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
