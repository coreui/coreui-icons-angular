import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { IconService } from './icon.service';
import { HtmlAttributesDirective } from './html-attr.directive';

@NgModule({
  declarations: [
    IconComponent,
    HtmlAttributesDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconComponent,
    HtmlAttributesDirective
  ],
  providers: [
    IconService
  ]
})
export class IconModule {
  constructor(@Optional() @SkipSelf() parentModule?: IconModule) {
    if (parentModule) {
      throw new Error(
        'CoreUI IconSetModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<IconModule> {
    return {
      ngModule: IconModule,
      providers: [
        {provide: IconService}
      ]
    };
  }
}
