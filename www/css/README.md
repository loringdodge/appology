CSS
==================================

### 1. Sources

The CSS styles are taken from two sources.

- `ionic.app.min.css` is the Ionic CSS Default library right out of the box and
no changes have been made to this file so any developer coming with an Ionic background
should not find any unexpected quircks from this file.

- `style.min.css` is the file where all the customized stylings for this app have been added.
It is a compiled version of `style.scss` which is a file located in `./scss` in the root folder.
This is the folder in which you'll find all the separate `.scss` modules


### 2. Modules

The source of the customized Upnest CSS files are located in the `./scss` folder and are pulled directly from
`./scss/style.scss`. Below are the contents of `./scss/style.scss` and they are structured by groups.
Please take the opportunity to add new styles into the correct file if it exists in the current structure.

```
@import

  // Variables
  "www/lib/ionic/scss/mixins", // Mixins pulled from Ionic
  "mixins", // Custom mixins
  "variables", // Custom variables specific to app

  // Globals
  "globals", // Global decorator classes

  // Components - modules that are specific to a type but not to a specific page or element
  "background",
  "bar",
  "button",
  "cards",
  "checkbox",
  "forms",
  "flexbox",
  "padding",
  "ribbons",
  "tabs",
  "text",

  // Page - modules specific to a page and aren't reusable
  "agent",
  "checklist",
  "home",
  "splash",
  "request",
  "proposal",

  // Directives - modules specific to a directive
  "commission-directive",
  "proposal-fees-directive",
  "review-img-directive",
  "star-directive",

  // New Components - components created to achieve a different look but can be reused
  "item-expand",
  "list-custom",
  "modal-custom";

```

### 3. Gulp

Whenever you modify any views that require stylistic changes, it's best to have gulp running
a watch in the background. This can be done via Bash:

```
$ gulp watch
```

Once executed, it will watch all `.scss` files in the `./scss` folder, perform an
automatic transcompile down to `style.min.css` and afterwards trigger a
livereload of the app (if viewing it in the browser).