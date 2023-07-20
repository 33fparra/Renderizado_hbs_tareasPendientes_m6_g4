import express from "express";
import hbs from "hbs";

const app = express();

//view engine motor de vistas dijeron en clases que seria la traduccion mas acertada
app.set('view engine', 'hbs');

//cargo la vista cuando no hay nada igual podria crear un boton que me lleve a la de pendientes?
app.get("/", (req, res)=>{
    res.send('<h1>Ventana Principal</h1> </br><button><a href="http://localhost:3000/pendientes">Ver Pendientes</button></br> </br><p>Individual 4 del Modulo 6 *(Grupo 6)</p>')
})

// Configuramos ruta para '/pendientes' o le ponemos el nombre que queramos
app.get('/pendientes', (req, res) => {
  // Array de tareas
  const tareas = [
    { nombre: 'Tarea 1' },
    { nombre: 'Tarea 2' },
    { nombre: 'Tarea 3' }
  ];

  // esta de aca para renderizar la vista 'pendientes' y pasarle el array de tareas
  res.render('pendientes', { tareas });
});

// Iniciar el servidor esto es de memoria

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
