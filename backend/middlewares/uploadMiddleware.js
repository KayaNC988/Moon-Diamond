const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb)  {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb)  { 
    const nomUnique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, nomUnique + path.extname(file.originalname).toLowerCase());
  },
});

const fileFilter = (req, file, cb) => {
    const typesAutorises = [
        "image/jpeg",
        "image/png",
        "image/webp",
    ];
    if (typesAutorises.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Type de fichier non autorisé"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 ,
    files: 10, },
});

module.exports = upload;