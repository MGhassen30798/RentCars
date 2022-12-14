const multer = require('multer');

const MIME_TYPES = {
    'application/pdf': 'pdf'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'upload');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('file');