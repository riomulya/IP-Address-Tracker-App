# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

First Time Using Vuetify for styling and the result im not confident with it.

using vue leaflet for maps and geo ipify for search IP Address

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](/src/assets/images/hasil_dekstop.jpeg)
![](/src/assets/images/hasil_hp.jpeg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Github](https://github.com/riomulya/IP-Address-Tracker-App)
- Live Site URL: [Github Pages](https://riomulya.github.io/ip_address_tracker_app.github.io/)

### Built with

- Semantic HTML5 markup
- Flexbox
- [Vue](https://vuejs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components Vuetify](https://vuetifyjs.com/en/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

using vuetify component

## vue

```vue
<v-text-field>
      </v-text-field>
```

```vue leaflet
<l-map ref="map" v-model:zoom="zoom" :center="markerLatLng">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer
        ><l-marker :lat-lng="markerLatLng"></l-marker>
      </l-map>
```

## Author

- Frontend Mentor - [Rio Mulya S](https://www.frontendmentor.io/profile/riomulya)
