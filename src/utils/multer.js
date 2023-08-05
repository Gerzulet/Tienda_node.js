const multer = require('multer');

//Configuración de multer
const guardarImagen = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./src/uploads")
    },
    //NOmbre de mi archivo
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now());
    }
});

const uploads = multer ({storage:guardarImagen});

module.exports = uploads;