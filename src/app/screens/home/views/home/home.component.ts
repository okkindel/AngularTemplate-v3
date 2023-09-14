import { ActivatedRoute } from '@angular/router';
import { Dashboard } from '@shared/models';
import { Component } from '@angular/core';

@Component({
  selector: 'prj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public dashboard: Dashboard = this._route.snapshot.data['dashboard'];

  constructor(private readonly _route: ActivatedRoute) {}
}
