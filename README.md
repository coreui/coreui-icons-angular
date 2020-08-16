# CoreUI Icons Angular

[![NPM](https://img.shields.io/npm/v/@coreui/icons-angular/latest?style=flat-square&color=brightgreen)][coreui-angular-icons-npm]
[![Downloads](https://img.shields.io/npm/dm/@coreui/icons-angular.svg?style=flat-square)][coreui-angular-icons-npm]
[![License](https://img.shields.io/npm/l/@coreui/angular?style=flat-square)][coreui]

[coreui]: https://coreui.io/icons
[coreui-angular-icons-npm]: https://www.npmjs.com/package/@coreui/icons-angular

## `c-icon` component

Angular component for [CoreUI Icons SVG set](https://coreui.io/icons/).

### Features

- Loads icons in three ways:
  - stored globally in Angular service,
  - directly passed SVG tag content,
  - source link to SVG file
- Reduces icons bundle size when imported as single icons,
- Full functionality of `<svg>` html tag,
- Clean API

For component description visit [CIcon component documentation](https://icons.coreui.io/docs/using-coreui-icons-with/angular/)

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
<c-icon name="cil-envelope-open" size="lg"></c-icon>
<c-icon name="cifAu"></c-icon>
```

### API
> Use one of `name`, `src` or `content` prop as it defines the way of icon import

proprerty | type | default | description  
---|---|---|---
`name` | string | undefined | name of SVG icon stored in IconSetService
`content` | string, string[] | undefined | SVG content 
`src` | string | undefined | Link to the icon. If defined, component will be rendered as `<img>` tag |
`size` | `custom`, `custom-size`, `sm`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl` |  '' | Size of icon
`title` | string | undefined |
`use` | string | undefined | SVG `<use>` 
`customClasses` | string | undefined | Replaces default `c-icon` component classes
`viewBox` | string | undefined | SVG `viewbox`
`attributes` | any | `{ role: 'img' }` |  Object with additional html attributes
`width` | | undefined | SVG `width`
`height` | | undefined | SVG `height`

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
