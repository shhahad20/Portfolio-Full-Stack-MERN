import multer, { FileFilterCallback } from 'multer'
import { Request } from 'express'

const ImageStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg','image/svg+xml']
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only images with type (jpeg, png, jpg, svg) are allowed'))
  } else {
    cb(null, true)
  }
}
export const upload = multer({ storage: ImageStorage, fileFilter })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/skillsImages')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
