# pruebatecnicaetc2025

Estructura de la prueba ( Playwright + JavaScript+ POM)
Adaptation/
Base/
Page.js : Pagna base (POM)
Model/
Pages folder
→ Login/
GmailLoginPage.js
NetflixLoginPage.js
Execution/
→ tests/
gmail.test.js
netflix.test.js
 → Report
test-result/ 	
# Automatización de:
 Login en Netflix
 Captura de URL y 3 películas de suspenso
 Login Gmail móvil con Playwright y contexto emulado
 Buenas prácticas aplicadas:
 Patrón Page Object + modularidad
 Esperas explícitas (waitForSelector)
 Reportes con HTML Reporter
 Separación de lógica, SOLID, POO y reutilización



# Pasos para la ejecución de la prueba automatizada
## Requisitos de la prueba
Instalar Node.js v20+ https://nodejs.org/en/download
Instalar npm 10+ (see https://phoenixnap.com/kb/install-node-js-npm-on-windows)
## 2. Descargar el proyecto adjunto prueba-tecnica-ETC-Greivin-Vega-Camacho.zip
Extraer el archivo adjunto prueba-tecnica-ETC-Greivin-Vega-Camacho.zip 
Abrir una terminal (CMD, Bash) y cambiar al directorio del proyecto:
                               cd  prueba-técnica-ETC-Greivin-Vega-Camacho/
## 3. Instalar dependencias
npm install
npx playwright install

## 4. Ejecutar las pruebas con Playwright (Netflix y Gmail) con chromium
npx playwright test --project=chromium --headed

