const express = require('express');
const router = express.Router();
const USER = require("../Model/User");

router.get("/searchByName/:search/:page", async (req, res) => {
    try {
        let query = req.params.search;
        const page = parseInt(req.params.page);
        const limit = 20; // Number of posts per page
        const skip = (page - 1) * limit; // Calculate number of documents to skip
        const query_data = await USER.find({
            $or: [
                { "first_name": { $regex: ".*" + query + ".*", $options: 'i' } },
                { "last_name": { $regex: ".*" + query + ".*", $options: 'i' } }
            ]
        }).skip(skip).limit(limit);

        if (query_data === 0) {
            return res.status(200).json({ success, error: "Data is not found" })
        }
        res.status(200).json(query_data);

    } catch (error) {
        res.status(500).json("Internal server error occured");
    }
});


module.exports = router; 