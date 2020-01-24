# MjAngular documentation mise a jour en fonction de l'avancement du projet
# readme by Francois Auxietre pour l'ensemble du projet de mes installations
Attention les imports sdk jdk etc et challenge pour bien definir les variables d'environnement et $PATH
verfifier ses version avec java et javac les deux 1.8 sdk

#compilation dans un browser
cordova run browser
#compilation sous emulateur
cordova run android 
##remarques sinon rien ne marche
bien penser a mettre ES5 pour builder sinon rien ne marche
dans index html mettre   <script type="text/javascript" src="cordova.js"></script>
log emulateur 
build wwww


installation du premier plugin permettant d'avoir des liens pour des url dans un autre browser
<pre><code>cordova plugin add cordova-plugin-inappbrowser</code></pre>
resultat
Installing "cordova-plugin-inappbrowser" for android
Installing "cordova-plugin-inappbrowser" for browser
Adding cordova-plugin-inappbrowser to package.json

installation du plugin camera
<pre><code>cordova plugin add cordova-plugin-camera</code></pre>


Installing "cordova-plugin-camera" for android
Subproject Path: CordovaLib
Subproject Path: app
Installing "cordova-plugin-camera" for browser
Adding cordova-plugin-camera to package.json

et mis dans mle main.ts 
let onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};

document.addEventListener('deviceready', onDeviceReady, false);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

pour arriver a compiler dans le dossier de cordova au lieu du classique dist
ng build --prod --base-href . --output-path ../CordovaMobileApp/www/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
