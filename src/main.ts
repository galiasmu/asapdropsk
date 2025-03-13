import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa las rutas configuradas

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Aquí se proporcionan las rutas
})
  .catch((err) => console.error(err)); // Si hay algún error, lo muestra en la consola
