import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AsyncPipe, NgIf } from '@angular/common';

import { Header } from './components/header/header';
import { LoadingService } from './services/loading';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    Header,
    AsyncPipe,
    NgIf
  ],

  templateUrl: './app.html'
})

export class App {

  constructor(public loadingService: LoadingService) {}

}