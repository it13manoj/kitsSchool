const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // folder to save uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isMimeTypeValid = allowedTypes.test(file.mimetype);
  const isExtNameValid = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (isMimeTypeValid && isExtNameValid) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"));
  }
};

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter,
});

module.exports = upload;
