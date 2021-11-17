# CoreUI Icons Angular

![angular](https://img.shields.io/badge/angular-^12.2.0-lightgrey.svg?style=flat-square&logo=angular)
[![npm-coreui-angular-next][npm-coreui-icons-angular-next]][coreui-angular-icons-npm]  
![angular](https://img.shields.io/badge/angular-^11.2.0-lightgrey.svg?style=flat-square&logo=angular)
[![NPM](https://img.shields.io/npm/v/@coreui/icons-angular/latest?style=flat-square&color=brightgreen)][coreui-angular-icons-npm]  
[![Downloads](https://img.shields.io/npm/dm/@coreui/icons-angular.svg?style=flat-square)][coreui-angular-icons-npm]
[![License](https://img.shields.io/npm/l/@coreui/angular?style=flat-square)][coreui]  

[coreui]: https://coreui.io/icons
[coreui-angular-icons-npm]: https://www.npmjs.com/package/@coreui/icons-angular
[npm-coreui-icons-angular-next]: https://img.shields.io/npm/v/@coreui/icons-angular/next.png?style=flat-square

## `cIcon` directive

Angular directive for [CoreUI Icons SVG set](https://coreui.io/icons/).

### Features

- Load icons:
  - stored in Angular root service,
  - directly passed SVG  content,
- Reduce icons bundle size when imported as single icons,
- Full functionality of `<svg>` tag,
- Clean API

For directive description visit [https://coreui.io/angular/docs/4.0/](https://coreui.io/angular/docs/4.0/)

### Installation

```shell
npm install @coreui/icons
npm install @coreui/icons-angular
```

### Usage

```ts
// app NgModule

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    IconModule,
    IconSetModule.forRoot(),
...
  providers: [IconSetService],
...
```

```ts
// app component

import { cilEnvelopeOpen, flagSet } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@Component({
  ...
  providers: [IconSetService],
  ...
})
export class AppComponent implements OnInit {
  constructor(public iconSet: IconSetService) {
    // iconSet singleton
    iconSet.icons = { cilEnvelopeOpen, ...flagSet };
  }
...
```

```jsx
<svg cIcon name="cil-envelope-open" size="lg"></svg>
<svg cIcon name="cifAu"></svg>
```

### API
> Use one of `name` or `content` prop as it defines the way of icon import

##### Inputs

proprerty | type | default | description  
---|---|---|---
`name` | string | undefined | name of SVG icon stored in IconSetService
`content` | string, string[] | undefined | SVG content 
`size` | `custom`, `custom-size`, `sm`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl` | '' | Size of icon
`title` | string | undefined |
`customClasses` | string | undefined | Overwrites default `.icon` classes
`viewBox` | string | undefined | SVG `viewbox`
`width` | string | undefined | SVG `width`
`height` | string | undefined | SVG `height`

--- 

### License

CoreUI Icons Free are free, open source, and GPL friendly. You can use it for
commercial projects, open source projects, or really almost whatever you want.

- Icons — CC BY 4.0 License
  - In the CoreUI Icons Free download, the CC BY 4.0 license applies to all icons packaged as .svg and .js files types.
- Fonts — SIL OFL 1.1 License
  - In the CoreUI Icons Free download, the SIL OLF license applies to all icons packaged as web and desktop font files.
- Code — MIT License
  - In the CoreUI Icons Free download, the MIT license applies to all non-font and non-icon files.
