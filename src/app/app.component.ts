import { Component } from '@angular/core';

@Component({
  selector: 'prj-root',
  template: `
    <prj-loader />
    <router-outlet />
  `,
  styles: [':host { height: 100vh; display: block; }'],
})
export class AppComponent {}
