const controller = require("../controllers/upload");
const express = require("express");

module.exports = function (app: { post: (arg0: string, arg1: any, arg2: any) => void }) {
  //route to upload single image
  app.post("/upload/upload-single-image", controller.upload.single("icon"), controller.uploadSingleImage);
  //route to upload multiple image
  app.post("/upload/upload-multiple-image", controller.upload.array("icon", 12), controller.uploadMultipleImage);
};
