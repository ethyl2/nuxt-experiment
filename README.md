# nuxt-experiment

## This repo is a place for me to experiment with Nuxt.js.

So far, it contains:

- my gratitude journal
- my campfire songs collection
- advent calendar
- mountains info
- song search using iTunes Search API
- drawing app that uses HTML Canvas with mouse and touch events; enables user to save their creations
- binary/text conversion
- text/elements conversion
- inspiration quotes page
- landing page for my family's 3D printing shop

Deployed at https://nuxt-experiments.herokuapp.com/

---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

## Environment Variables

In order for all features of this site to work correctly, you need to set up your own environment variables. Add an .env file containing the following:

- MAIL_URL (Obtained from your formspree.io account)
- LOCATION_APP_ID (Obtained from your developer.here.com account)
- LOCATION_APP_CODE (Obtained from your developer.here.com account)
- FORM_SUBMIT_URL (https://formsubmit.co/your@email.com, or once you make a submission, formsubmit will email you a random-like string to use instead of your email address. See https://formsubmit.co/ for more details.)

---

## Useful Resources:

### JS

- Sorting arrays of objects by property values: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/

- 2 approaches for randomly shuffling arrays: https://css-tricks.com/snippets/javascript/shuffle-array/

- Using comparisons in a switch statement: https://stackoverflow.com/questions/32576618/switch-statement-to-compare-values-greater-or-less-than-a-number/32576647

### Data

- Data for periodic table elements: https://github.com/andrejewski/periodic-table/blob/master/data.json

- Mountains API: https://api.nuxtjs.dev/

### Canvas

- Using refs with Vue.js: https://blog.logrocket.com/how-to-use-refs-to-access-your-application-dom-in-vue-js/

- Example of creating button for downloading canvas image: https://riptutorial.com/html5-canvas/example/31763/save-canvas-to-image-file

- Example of drawing on canvas with Vue.js: https://codepen.io/reiallenramos/pen/MWaEmpw https://dev.to/reiallenramos/drawing-in-vue-using-mousemove-event-34cg

- Touch events with canvas example: http://bencentra.com//code/2014/12/05/html5-canvas-touch-events.html

- Touch events documentation: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

- Drawing rounded rectangles: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas

### Implementing UX

- Making a toggle using tailwind and minimal CSS: https://codepen.io/lhermann/pen/EBGZRZ

- Playing audio in a Vue app: https://www.raymondcamden.com/2019/09/18/an-itunes-audio-enabled-search-built-in-vuejs

- Example of copying to clipboard: https://codepen.io/PJCHENder/pen/jamJpj?editors=1010

- Example of Vue.js image slider: https://www.digitalocean.com/community/tutorials/vuejs-create-image-slider

### CORS

- Discussion about dealing with CORS: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

### Vue.js

- Getting window size (Note: use `mounted()` instead of `created()`): https://codepen.io/sethdavis512/pen/EvNKWw

### Nuxt

- To learn about Nuxt.js, check out this course: [Nuxt.js Fundamentals](https://vueschool.io/courses/nuxtjs-fundamentals)
