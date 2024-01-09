# Tailwind Expose Colors

## Introduction

This is a pretty much straighforward Tailwind plugin that exposes all of Tailwind's colors, including any custom ones included in your theme, as custom CSS properties on the :root element.

## Install

Install the plugin from npm:

```
npm i -D tailwindcss-expose-colors
```

Then add the plugin to your tailwind.config.js file:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-expose-colors'),
    // ...
  ],
}
```

## Usage

...