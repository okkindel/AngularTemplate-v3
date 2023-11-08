import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@environments/environment';

import app_version from './assets/version.json';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Get versions of front-end and back-end.
console.info('FRONTEND VERSION:', { ...app_version, build: environment.build });
// TODO: uncomment once API is ready.
// fetch(`${environment.api}/version`)
//   .then((response) => response.json())
//   .then((data) => console.info('BACKEND VERSION:', data));
