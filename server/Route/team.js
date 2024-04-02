const express = require('express');
const router = express.Router();
const TEAM = require("../Model/Team");

router.post("/addTeam", async (req, res) => {
    try {
        const { teamName } = req.body;
        const existingTeam = await TEAM.findOne({teamName});

        if (existingTeam) {
            return res.status(400).json({ message: "Team already exists" });
        }
        const team = new TEAM({
            teamName,
        });

        // Save the team
      await team.save();

        res.status(201).json({ message:"Team created successfully" });

    } catch (error) {
        res.status(500).json("Internal server error occured");
    }
})

module.exports = router; 

//i have created api for team but i have not used it becuase it may cause confusion as it doesn't have any login logout feature 