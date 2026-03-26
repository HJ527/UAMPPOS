import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Importa tu librería MGP aquí para registrar los tags
import '@mgp/ui-library';
// Importa los estilos (puedes hacerlo aquí o en el angular.json)
import '@mgp/ui-library/dist/style.css';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
