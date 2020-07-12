import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {

    @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;

    @Input() leyenda: string = 'Leyenda';
    @Input() progreso: number = 50;

    @Output() cambioValor: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    cambiarValor(value: number) {
        if (!(this.progreso + value < 0 || this.progreso + value > 100)) {
            this.progreso += value;
            this.cambioValor.emit(this.progreso);
        }
    }

    onChange(inputValue: number) {
        if (inputValue > 100) {
            inputValue = 100;
        } else if (inputValue < 0) {
            inputValue = 0;
        }
        this.txtProgress.nativeElement.value = inputValue;
        this.cambioValor.emit(this.progreso);
        this.txtProgress.nativeElement.focus();
    }
}
