# Project Overview
This is my Angular projecy where I'm teaching my self Angular. This project looks like a tradition resposnsive web site, with a main nav, footer, site map page, etc.

# Features

## Home Hero slider

- fully based on JSON data
- Copy block locations are set via JSON as well. 

## Dark Mode
There are still a few UI bugs, but it works. And the selection is stored in Local Storage for the users next visit

## Dynamic Site Map Page and Footer Nav
These two items are built from the router

## Localization
Using ng-translate, there are EN and FR il8n files with terms. The language select stores the user selection in local storate. Not all terms have been enabled

# TODO

## Bug Fixes

**Various known bugs**

### Dark Mode

- The current logo, an SVG, needs fixed wile in dark mode
- Nav drop down needs update
- Mobile nav has not been tested

### Sign Up Form

- When using the country select drop down:
  - the State/Provce field should offer the apporiate options if America or Canada is selected
  - The postal/Zip code should update, with the aproprate validation
  - If Nither Canada or America is selected, the state/province and postal/zip code fields should not be visible, and the UI should not leave any gaps

### Cross Platform Testing

- Cross browser/OS
  - on PC, Firefox and Chrome (Current dev is done against Edge)
  - on Mac, Safari, Edge, Firefox, and Chrome
  - Full mobile testing on iOS and Android, both Cell and Tablets


## New Features

### Sortable Table

- Source a public API that can represent data in a table format, and allow for sortable column.

### Dynamic Main Nav

- Similar to the site-map.html and footer nav, have the main nav source be app.routes.ts

### 404/Error page

- Just need a simple page and router update
