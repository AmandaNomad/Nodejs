
import express from 'express'
import { dirname, join } from 'path' //nombre de directorio, la funcion dirname nos permite crear una ruta absoluta. JOIN: esta funcion nos permite concatenar directorios y evitar pensar en que sistema operativo estamos, y depende a esto sera como va a funcionar 
import { fileURLToPath } from 'url'

//desde el archivo /routes/index.js estamos trayendo lo que nos esta exportando por defecto que seria Rauter, y aqui lo llamaos indexRoutes
import indexRoutes from './routes/index.js'

import bodyParse from 'body-parser'
import nodemailer  from 'nodemailer'

const app = express() //app es igual a la ejecucion de express
const __dirname = dirname(fileURLToPath(import.meta.url)) //lo que esta dentro es una funcion que viene a partir  de otro modulo de node, todo esto se trasforma en esa ruta absoluta

//configuracion para decirle donde esta la carpeta de las vistas donde van a estar todas nuestras paginas vamos a añadir:
app.set('views', join(__dirname, 'views'))

//Para utilizar ejs
app.set('view engine', 'ejs') //establecemos una nueva configuracion con este metodo,(set) es para decirle a nuestro servidor que queremos que utilice, que caracteristicas queremos que utilice, dentro view engine-->motor de vista o plantillas, modulos que nos permiten extender el html, y nos permiten poder añadir logica de programacion dentro del html 
app.use(indexRoutes)
app.set('js', join(__dirname, 'js'))

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extenden:true}));

app.use(express.static(join(__dirname, 'public')))


const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'amanda.de.la.cruz.martinez1995@gmail.com',
            pass: 'colwdrpalieopzfm',
         },
    secure: true,
    });

    app.post('/api/email', (req, res) =>{
        const mailData = {
            from: 'amanda.de.la.cruz.martinez1995@gmail.com',  // sender address
              to: req.body.toMail,   // list of receivers
              subject:  req.body.subject,
              //text: 'That was easy!',
              html: req.body.message,
            };

            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
    
    });

    
app.listen(3000)
console.log('Server is listening on port', 3000)




