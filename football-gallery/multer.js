import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/userPhotos")
    },
    filename: (req, file, cb) => {
        // const pathExtName = path.extname(file.originalname)
        cb(null, file.originalname)
    }
})

const uploadMiddlware = multer({ storage })
export default uploadMiddlware;
