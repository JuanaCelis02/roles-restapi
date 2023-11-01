//Tiene la configuración de express

import express from "express"
import rolesRoutes from "./routes/roles.routes.js"
import cors from "cors"

const app = express();

//middlewares
app.use(express.json());

const corsOptions = {
  origin: '*', // Acepta trafico de todas las rutas
  methods: 'GET,POST, PUT, DELETE', // Métodos permitidos (ajusta según tus necesidades)
};

app.use(cors(corsOptions));

app.use(rolesRoutes)

export default app; //Aplicación de servidor