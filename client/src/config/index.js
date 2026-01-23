let configModule;

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  configModule = require(`./default/local.config.js`);
} else {
  configModule = require(`./default/dev.config.js`);
}

// Acceder a la exportación ES module correctamente
// Cuando webpack procesa export const config, lo hace disponible como config.config
const config = configModule.config || configModule.default?.config || configModule;
console.log(config);
export default config;
