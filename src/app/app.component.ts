import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-loader />
    <router-outlet />
  `,
  styles: [':host { height: 100vh; display: block; }'],
})
export class AppComponent {}
