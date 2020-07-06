## Here is my webpack configs

### Requirements

1. Node.js
2. Yarn or npm

### Install dependencies

```
yarn
```

### Scripts

- Run project

  ```
  yarn start
  ```

- Build project in development mode

  ```
  yarn dev
  ```

- Build project in production mode
  ```
  yarn build
  ```

### Configurations

1. Files and folders tree

   - `src/` source folder:
     - `src/index.html` - page content;
     - `src/scss/` - styles source folder;
     - `src/js/` - scripts source folder;
     - `src/img/` - pictures folder
   - `dist/` build results folder:
     - `dist/index.html` - copying from `src/`;
     - `dist/css/styles.css` - all styles minified (unminified in dev mode);
     - `dist/css/styles.css.map` - sourcemap for styles file;
     - `dist/js/scripts.js` - all scripts minified (excluded external libraries, unminified in dev mode);
     - `dist/js/scripts.js.map` - sourcemap for scripts file;
     - `dist/js/vendor.js` - all js libraries minified (unminified in dev mode)
     - `dist/img/` - copying pictures from `src/img/`

2. Is supported SCSS
3. Is used babel with "'browserslist': '> 0.25%, not dead'" configuration. To modify, edit 'browserslist' value in 'package.json'
