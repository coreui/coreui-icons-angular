import { Component, HostBinding, Input } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {IconSetService} from '../icon-set/icon-set.service';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _viewBox: string;

  @Input() attributes: any = { role: 'img'};
  @Input()
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    const nameIsKebabCase = this._name && this._name.includes('-');
    return nameIsKebabCase ? this.toCamelCase(this._name) : this._name;
  }
  @Input() content?: string | string[];
  @Input() size?: 'custom' | 'custom-size' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '' = '';
  @Input() src?: string;
  @Input() title?: string;
  @Input() use = '';
  @Input() customClasses?: string|string[]|Set<string>|{[klass: string]: any};
  @Input()
  set viewBox(viewBox: string) {
    this._viewBox = viewBox;
  }
  get viewBox(): string {
    return this._viewBox || `0 0 ${ this.scale }`;
  }
  @Input() width?;
  @Input() height?;

  get titleCode(): string {
    return this.title ? `<title>${this.title}</title>` : '';
  }

  get code(): string[] | undefined | string {
    if (this.content) {
      return this.content;
    } else if (this.iconSet) {
      return this.iconSet.getIcon(this.name);
    }
    console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. ` +
      `To use icon by 'name' prop you need to add it to IconSet service. \n`,
      this.name
    );
    return undefined;
  }
  get iconCode(): SafeHtml {
    const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code;
    return this.sanitizer.bypassSecurityTrustHtml(this.titleCode + code);
  }

  get scale(): string {
    return Array.isArray(this.code) && this.code.length > 1 ? this.code[0] : '64 64';
  }

  get computedSize(): 'custom-size' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '' {
    const addCustom = !this.size && (this.width || this.height);
    return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
  }
  get computedClasses(): any {
    const classes = {
      'c-icon': true,
      [`c-icon-${this.computedSize}`]: !!this.computedSize
    };
    return !!this.customClasses ? this.customClasses : classes;
  }

  constructor(
    private sanitizer: DomSanitizer,
    private iconSet: IconSetService
  ) { }

  toCamelCase(str): any {
    return str.replace(/([-_][a-z0-9])/ig, ($1) => {
      return $1.toUpperCase().replace('-', '');
    });
  }
}
