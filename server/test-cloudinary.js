import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

cloudinary.api.ping()
    .then(result => console.log('SUCCESS:', result))
    .catch(err => console.log('FAILURE:', err.message, err.http_code));

cloudinary.uploader.upload('./accenture_logo.png')
    .then(result => console.log('UPLOAD SUCCESS:', result.secure_url))
    .catch(err => console.log('UPLOAD FAILURE:', err.message, err.http_code));