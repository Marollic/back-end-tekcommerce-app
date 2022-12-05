// const util = require("util");
// const path = require("path");
// const multer = require("multer");
// const { S3Client } = require('@aws-sdk/client-s3');
// const multerS3 = require('multer-s3');


// let s3 = new S3Client({
//   region: 'sa-east-1',
//   credentials: {
//     accessKeyId: process.env.ACCESSKEYID,                                          // accessKeyId that is stored in .env file
//     secretAccessKey: process.env.SECRETACCESSKEY,                  // secretAccessKey is also store in .env file
//   },
//   // sslEnabled: false,
//   // s3ForcePathStyle: true,
//   // signatureVersion: 'v4',
// });

// // var storage = multer.diskStorage({

// //   destination: (req, file, callback) => {
// //     // callback(null, path.join(`${__dirname}/../public/images`));
// //     callback(null, '');
// //   },
// //   filename: (req, file, callback) => {
// //     const match = ["image/png", "image/jpeg"];

// //     if (match.indexOf(file.mimetype) === -1) {
// //       var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
// //       return callback(message, null);
// //     }

// //     var filename = `${Date.now()}-${file.originalname}`;
// //     callback(null, filename);
// //   }
// // });

// var storage = multerS3({
//   s3,
//   bucket: 'tekcommerce',
//   contentType: multerS3.AUTO_CONTENT_TYPE,
//   metdata: function (req, file, callback) {
//     callback(null, { fieldName: file.fieldName });
//   },
//   key: function (req, file, callback) {
//     callback(null, `${Date.now()}-${file.originalname}`); //use Date.now() for unique file keys
//   }
// })

// var fileFilter = (req, file, callback) => {
//   const match = ["image/png", "image/jpeg"];

//   if (match.indexOf(file.mimetype) === -1) {
//     callback(null, false)
//   } else {
//     callback(null, true)
//   }
// }

// var uploadFiles = multer({ storage, fileFilter }).array("imagens", 10);
// var uploadFilesMiddleware = util.promisify(uploadFiles);
// module.exports = uploadFilesMiddleware;