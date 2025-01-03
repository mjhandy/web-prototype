# Project Overview
This is my Angular project where I'm teaching myself Angular. This project looks like a tradition resposnsive web site, with a main nav, footer, site map page, etc.

# Features

## WCAG 2.x

- skip to main as first tab item
- main nav has full keyboard support
- on route change screen reader prompt. 
  - as this is a SPA, screen readers don't pick up the page title change
  - needs to be fully implimented and tested

## Accordions

- data bound form parent component
- random number to ensure multiple accordions don't conflict with each other

## Home Hero slider

- fully based on JSON data
- Copy block locations are set via JSON as well. 
- clickable pips needs some tweeks, just location and size adjustments
- this is also data bound to allow the component to be reused.

## Dark Mode
- There are still a few UI bugs, but it works. And the selection is stored in Local Storage for the users next visit.
- toast message shows the mode change. Redundant, but I wanted to exploring implimeninting this.

## Dynamic Site Map Page and Footer Nav
- These two items are built from the router

## Localization
- Using ng-translate, there are EN and FR il8n files with terms. The language select stores the user selection in local storate. Not all terms have been enabled

# TODO

## Bug Fixes

**Various known bugs**

### Main Nav

- site logo link is broken 
  - needs testing

### Dark Mode

- The current logo, an SVG, needs fixed wile in dark mode
  - needs testing
- Nav drop down needs update
  - needs testing
- Mobile nav has not been tested

### Sign Up Form

- When using the country select drop down:
  - the State/Provce field should offer the apporiate options if America or Canada is selected
  - The postal/Zip code should update, with the aproprate validation
  - If neither Canada nor America is selected, the state/province and postal/zip code fields should not be visible, and the UI should not leave any gaps

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

### Analytics

- need event tracking on the following
  - all nav items
  - accordion usage
