import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {

    progressAzul: number = 20;
    progressVerde: number = 50;

    constructor() {}

    ngOnInit() {}

}
