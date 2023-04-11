const path = require("path");

module.exports = {
  friendlyName: "Image upload",

  description: "",

  inputs: {},

  exits: {},

  upload: function (req, res) {
    res.setTimeout(0);

    req.file("avatar").upload(
      // {
      //   // You can apply a file upload limit (in bytes)
      //   maxBytes: 1000000,
      // },
      function whenDone(err, uploadedFiles) {
        if (err) return res.serverError(err);
        else
          return res.json({
            files: uploadedFiles,
            textParams: req.allParams(),
          });
      }
    );
  },
};
