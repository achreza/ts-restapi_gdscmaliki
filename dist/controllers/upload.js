"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const multer = require("multer");
const path = require("path");
const client = require("../config/config");
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}` + path.extname(file.originalname));
        //path.extname get the uploaded file extension
    },
});
const multerFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
        // upload only png and jpg format
        return cb(null, true);
    }
    cb(null, true);
};
exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});
exports.uploadSingleImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allquery = yield client.query(`INSERT INTO images(name, icon) VALUES ('${req.body.name}', '${req.file.filename}')`);
    res.status(200).json({ statusCode: 200, status: true, message: "Image added", data: [] });
});
exports.uploadMultipleImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    for (var i = 0; i < req.files.length; i++) {
        const allquery = yield client.query(`INSERT INTO images(name, icon) VALUES ('${req.body.name}','${req.files[i].filename}')`);
    }
    res.status(200).json({ statusCode: 200, status: true, message: "All Image added", data: [] });
});
