import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _settings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  changeTheme(theme: string, link: ElementRef) {
    this.aplicarCheck(link);
    this._settings.applyTheme(theme);
  }

  aplicarCheck(link: any) {
    const selectors: any = document.getElementsByClassName('selector');
    for ( const ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const actualTheme = this._settings.settings.theme;
    document.getElementsByClassName(`${actualTheme}-theme`)[0].classList.add('working');
  }

}
