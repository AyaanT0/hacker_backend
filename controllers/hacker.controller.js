"use strict";

const Services = {
    Hacker: require("../services/hacker.service"),
    Logger: require("../services/logger.service")
};
const Util = require("../middlewares/util.middleware");

/**
 * @async
 * @function findById
 * @param {{body: {id: ObjectId}}} req
 * @param {*} res
 * @return {JSON} Success or error status
 * @description Retrieves a hacker's information via it's mongoId specified in req.params.id. The id is moved to req.body.id from req.params.id by validation.
 */
async function findById(req, res) {
    const hacker = await Services.Hacker.findById(req.body.id);

    if (hacker) {
        return res.status(200).json({
            message: "Successfully retrieved hacker information",
            data: hacker.toJSON()
        });
    } else {
        return res.status(404).json({
            message: "Issue with retrieving hacker information",
            data: {}
        });
    }
}

/**
 * @async
 * @function createHacker
 * @param {{body: {hackerDetails: {_id: ObjectId, accountId: ObjectId, school: string, gender: string, needsBus: boolean, application: {Object}}}}} req
 * @param {*} res
 * @return {JSON} Success or error status
 * @description create a hacker from information in req.body.hackerDetails
 */
async function createHacker(req, res) {
    const hackerDetails = req.body.hackerDetails;
    
    const success = await Services.Hacker.createHacker(hackerDetails);

    if (success) {
        return res.status(200).json({
            message: "Hacker creation successful",
            data: hackerDetails
        });
    } else {
        return res.status(400).json({
            message: "Issue with hacker creation",
            data: {}
        });
    }
}

/**
 * @async
 * @function updateHacker
 * @param {body: {id: ObjectId, Object}} req
 * @param {*} res
 * @return {JSON} Success or error status
 * @description 
 *      Change a hacker's information based on the hacker's mongoID specified in req.params.id.
 *      The id is moved to req.body.id from req.params.id by validation.
 *      The new information is located in req.body.
 */
async function updateHacker(req, res) {
    const success = await Services.Hacker.updateOne(req.body.id, req.body);

    if (success) {
        return res.status(200).json({
            message: "Changed hacker information",
            data: req.body
        });
    } else {
        return res.status(400).json({
            message: "Issue with changing hacker information",
            data: {}
        });
    }
}

function uploadedResume (req, res) {
    return res.status(200).json({
        message: "Uploaded resume",
        data: {
            filename: req.body.gcfilename
        }
    });
}

function downloadedResume (req, res) {
    return res.status(200).json({
        message: "Downloaded resume",
        data: {
            id: req.body.id,
            resume: req.body.resume
        }
    });
}

module.exports = {
    findById: Util.asyncMiddleware(findById),
    updateHacker: Util.asyncMiddleware(updateHacker),
    createHacker: Util.asyncMiddleware(createHacker),
    uploadedResume: uploadedResume,
    downloadedResume: downloadedResume
};