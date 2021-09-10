import { Injectable } from '@angular/core';

export interface IIconSet {
  [iconName: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class IconSetService {

  constructor() {}

  // tslint:disable-next-line:variable-name
  private _icons: IIconSet = {};

  get icons(): IIconSet {
    return this._icons;
  }

  set icons(iconSet) {
    this._icons = iconSet;
  }

  public getIcon(name: string): string[] {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
}
