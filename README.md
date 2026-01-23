# Manage Messages

Servicio de mensajería profesional para empresas que quieren crecer.

## Estructura del Proyecto

- `client/` - Aplicación React (frontend)
- `server.js` - Servidor Express para servir el build de producción
- `Procfile` - Configuración para Heroku

## Desarrollo Local

```bash
# Instalar dependencias del servidor
npm install

# Instalar dependencias del cliente
cd client
npm install

# Ejecutar en modo desarrollo
npm start
```

## Deploy en Heroku

### Prerequisitos
- Cuenta de Heroku
- Heroku CLI instalado
- Git configurado

### Pasos para deployar

1. **Iniciar sesión en Heroku:**
```bash
heroku login
```

2. **Crear la aplicación en Heroku:**
```bash
heroku create manage-messages
# o con un nombre específico:
heroku create tu-nombre-app
```

3. **Configurar el buildpack (si es necesario):**
```bash
heroku buildpacks:set heroku/nodejs
```

4. **Hacer commit de los archivos:**
```bash
git init
git add .
git commit -m "Initial commit"
```

5. **Deployar a Heroku:**
```bash
git push heroku main
# o si tu rama se llama master:
git push heroku master
```

6. **Abrir la aplicación:**
```bash
heroku open
```

### Variables de Entorno

Si necesitas configurar variables de entorno en Heroku:

```bash
heroku config:set NODE_ENV=production
```

### Ver logs

```bash
heroku logs --tail
```

## Scripts Disponibles

- `npm start` - Inicia el servidor de producción
- `heroku-postbuild` - Se ejecuta automáticamente en Heroku para construir la app React

## Notas

- El servidor sirve los archivos estáticos del build de React
- Todas las rutas se redirigen a `index.html` para que React Router funcione correctamente
- La redirección HTTP a HTTPS está habilitada automáticamente en producción
