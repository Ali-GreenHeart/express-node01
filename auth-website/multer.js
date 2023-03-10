import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/photos`)
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname.toLowerCase()}`)
    }
})

const customizedMulter = multer({ storage })

export default customizedMulter;
