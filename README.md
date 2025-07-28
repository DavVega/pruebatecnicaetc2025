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
* Instalar Node.js v20+ https://nodejs.org/en/download
* Instalar npm 10+ (see https://phoenixnap.com/kb/install-node-js-npm-on-windows)

## 2. Descargar el proyecto adjunto 
git clone https://github.com/DavVega/pruebatecnicaetc2025.git

## 3. Instalar dependencias
`npm install`
`npx playwright install`

## 4. Ejecutar las pruebas con Playwright (Netflix y Gmail) con chromium
npx playwright test --project=chromium --headed

# 5. Para ver el reporte HTML de pruebas (test-results\report\index.html
 folder):

`npx playwright show-report test-results\report`

