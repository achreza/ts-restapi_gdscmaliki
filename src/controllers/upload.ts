const multer = require("multer");
const path = require("path");
const client = require("../config/config");

const multerStorage = multer.diskStorage({
  destination: (req: any, file: any, cb: (arg0: null, arg1: string) => void) => {
    cb(null, "./images");
  },
  filename: (req: any, file: { originalname: any }, cb: (arg0: null, arg1: string) => void) => {
    cb(null, `image-${Date.now()}` + path.extname(file.originalname));
    //path.extname get the uploaded file extension
  },
});

const multerFilter = (req: any, file: { originalname: string }, cb: (arg0: Error | null, arg1: boolean | undefined) => void) => {
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

exports.uploadSingleImage = async (
  req: { body: { name: any }; file: { filename: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { statusCode: number; status: boolean; message: string; data: never[] }): void; new (): any };
    };
  }
) => {
  const allquery = await client.query(`INSERT INTO images(name, icon) VALUES ('${req.body.name}', '${req.file.filename}')`);

  res.status(200).json({ statusCode: 200, status: true, message: "Image added", data: [] });
};
exports.uploadMultipleImage = async (
  req: { files: string | any[]; body: { name: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { statusCode: number; status: boolean; message: string; data: never[] }): void; new (): any };
    };
  }
) => {
  for (var i = 0; i < req.files.length; i++) {
    const allquery = await client.query(`INSERT INTO images(name, icon) VALUES ('${req.body.name}','${req.files[i].filename}')`);
  }
  res.status(200).json({ statusCode: 200, status: true, message: "All Image added", data: [] });
};
