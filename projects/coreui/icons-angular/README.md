# CoreUI Icons Angular

[![NPM](https://img.shields.io/npm/v/@coreui/icons-angular/latest?style=flat-square&color=brightgreen)][coreui]
[![Downloads](https://img.shields.io/npm/dm/@coreui/icons-angular.svg?style=flat-square)][coreui]
[![License](https://img.shields.io/npm/l/@coreui/icons-angular?style=flat-square)][coreui]

[coreui]: https://coreui.io/icons
[coreui-angular-icons-npm]: https://coreui.io/icons

## `c-icon` component

Angular component for [CoreUI Icons SVG set](https://coreui.io/icons/).

### Features

- Loads icons in three ways:
  - stored globally in Angular service,
  - directly passed SVG tag content,
  - source link to SVG file
- Reduces icons bundle size when imported as single icons,
- Full functionality of 'svg' html tag,
- Clean API

For component description visit [CIcon component documentation](https://icons.coreui.io/docs/using-coreui-icons-with/angular/)

### Installation

If you already have installed [CoreUI Angular component library](https://coreui.io/angular/docs) plugin, then you have CIcon component already installed, otherwise install package by:

```shell
npm install @coreui/icons
npm install @coreui/icons-angular
```

### Usage

```ts
// NgModule

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  imports: [
    IconModule,
...
```

```ts
// app component
import { cilEnvelopeOpen } from '@coreui/icons';
import { IconService } from '@coreui/icons-angular';

@Component({
  ...
  providers: [IconSetService],
  ...
})
...
  constructor(public iconSet: IconService) {
    // iconSet singleton
    iconSet.icons = { cilEnvelopeOpen };
  }
```

```jsx
<c-icon name="cil-envelope-open" size="lg"></c-icon>
```



### License

CoreUI Icons Free is free, open source, and GPL friendly. You can use it for
commercial projects, open source projects, or really almost whatever you want.

- Icons — CC BY 4.0 License
  - In the CoreUI Icons Free download, the CC BY 4.0 license applies to all icons packaged as .svg and .js files types.
- Fonts — SIL OFL 1.1 License
  - In the CoreUI Icons Free download, the SIL OLF license applies to all icons packaged as web and desktop font files.
- Code — MIT License
  - In the CoreUI Icons Free download, the MIT license applies to all non-font and non-icon files.
