const express = require("express");
const path = require("path");

const app = express();

// Habilitar trust proxy para Heroku
app.enable("trust proxy");

// Redirección HTTP a HTTPS (excepto en desarrollo local)
app.use((req, res, next) => {
  // No redirigir en localhost o en desarrollo
  if (req.hostname === "localhost" || req.hostname === "127.0.0.1") {
    return next();
  }
  
  // Si la solicitud ya es HTTPS, continuar
  if (req.secure) {
    return next();
  }
  
  // Redirigir a HTTPS
  res.redirect(301, "https://" + req.headers.host + req.url);
});

// Servir archivos estáticos del build de React
app.use(express.static(path.join(__dirname, "client/build")));

// Todas las rutas que no sean archivos estáticos, servir index.html (para React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
