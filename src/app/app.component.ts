import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-loader />
    <router-outlet />
  `,
  host: { class: 'h-screen block' },
})
export class AppComponent {}
