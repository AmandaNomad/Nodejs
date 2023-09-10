import { Router } from 'express'  //Router: definir distintas rutas
const router = Router()



//ruteo, primer url de nuestro servidor, cuando solicite la peticion get del servidor a la ruta inicial, pues va a responder con un request y un respond y va a responder con un hello world
//Esta sintaxis es una funcion dentro de otra, se lee: metodo get, cuando entramos a nuestra paginas estamos solicitando datos a nuestro servidor.
//cuando soliciten la ruta inicial, la pagina principal, que responda con tal mensaje 

//renderices o envies un archivo html que va a estar a partir del archivo index.ejs
router.get('/', (req, res) => res.render('index', { title: 'Primer Sitio con Node'}))//aqui no añadimos la extencion ejs, porque sabe que todos los archivos terminan con esa ectencion

router.get('/about', (req, res) => res.render('about', {title: 'Acerca de'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contacto'}))


//para unir la porcion de index.js con index.js de la carpeta de routes tenemos que exportar
export default router





