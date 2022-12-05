// const upload = require("../utils/middlewareUpload");

// const multipleUpload = async (req, res) => {
//     try {

//         await upload(req, res);

//         if (req.files.length <= 0)
//             res.send({
//                 status: "fail",
//                 data: {},
//                 msg: `You must select at least 1 file.`,
//             });

//         console.log(req.files[0].location);
//         res.send({ status: "success", data: req.files, msg: "Files has been uploaded." });
//     } catch (error) {
//         console.log(error);

//         if (error.code === "LIMIT_UNEXPECTED_FILE")
//             res.send({
//                 status: "fail",
//                 data: {},
//                 msg: `Too many files to upload: ${error}`,
//             });

//         res.send({
//             status: "fail",
//             data: {},
//             msg: `Error when trying upload many files: ${error}`,
//         });
//     }
// };

// module.exports = {
//     multipleUpload
// };