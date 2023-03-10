import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/userPhotos")
    },
    filename: (req, file, callback) => {
        callback(null, req.body.email.concat("__").concat(file.originalname.replaceAll(' ', '_')))
    }
})

const uploadMulter = multer({
    storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, cb) => {
        let extensionName = path.extname(file.originalname)
        if (!['.jpg', '.png', '.mp3'].includes(extensionName.toLowerCase())) {
            cb(new Error('sekil yukle, ay bala!'))
        }
    }
})

export default uploadMulter;
