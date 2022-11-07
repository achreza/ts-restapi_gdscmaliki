"use strict";
const controller = require("../controllers/upload");
const express = require("express");
module.exports = function (app) {
    //route to upload single image
    app.post("/upload/upload-single-image", controller.upload.single("icon"), controller.uploadSingleImage);
    //route to upload multiple image
    app.post("/upload/upload-multiple-image", controller.upload.array("icon", 12), controller.uploadMultipleImage);
};
