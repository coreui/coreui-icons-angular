import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {IconComponent} from './icon.component';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';

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
  ],
})
export class IconModule {}
