import { Injectable } from '@angular/core';

export interface IIconSet {
  [iconName: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  // tslint:disable-next-line:variable-name
  private _icons: IIconSet = {};

  constructor() {}

  set icons(iconSet) {
    this._icons = iconSet;
  }
  get icons() {
    return this._icons;
  }

  public getIcon(name) {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
}
