require('./config/env');
const express = require("express");
const app = express();

// Habilitó la carpeta public
app.use( express.static( __dirname + '/public' ) );

// Rutas Globlales de la APP
app.use( require('./routes/routes') );

app.listen(process.env.PORT, () => console.log(`Escuchando peticiones en el puerto ${process.env.PORT}.`));
