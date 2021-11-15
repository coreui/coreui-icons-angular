import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconSetService } from '../icon-set/icon-set.service';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.svg',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements AfterViewInit {

  @Input() attributes: any = {role: 'img'};
  @Input() content?: string | string[];
  @Input() size: 'custom' | 'custom-size' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '' = '';
  @Input() src?: string;
  @Input() title?: string;
  @Input() use = '';
  @Input() customClasses: string | string[] | Set<string> | { [klass: string]: any } = '';
  @Input() width?: string;
  @Input() height?: string;

  @Input()
  set name(name: string) {
    const nameIsKebabCase = name.includes('-');
    this._name = nameIsKebabCase ? this.toCamelCase(name) : name;
  }

  get name(): string {
    return this._name;
  }

  private _name!: string;

  @Input()
  set viewBox(viewBox: string) {
    this._viewBox = viewBox;
  }
  get viewBox(): string {
    return this._viewBox ?? `0 0 ${this.scale}`;
  }
  private _viewBox!: string;

  @ViewChild('svgElement', {read: ElementRef}) svgElementRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private iconSet: IconSetService
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.classList.forEach((item: string) => {
      this.renderer.addClass(this.svgElementRef.nativeElement, item);
    });
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    const svgElement = this.svgElementRef.nativeElement;
    this.renderer.insertBefore(parentElement, svgElement, this.elementRef.nativeElement);
    this.renderer.removeChild(parentElement, this.elementRef.nativeElement);
  }

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
      icon: true,
      [`icon-${this.computedSize}`]: !!this.computedSize
    };
    return !!this.customClasses ? this.customClasses : classes;
  }

  toCamelCase(str: string): any {
    return str.replace(/([-_][a-z0-9])/ig, ($1: string) => {
      return $1.toUpperCase().replace('-', '');
    });
  }
}
