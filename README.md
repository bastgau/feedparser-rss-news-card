# 📰 FeedParser RSS News Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/frontend)
![HA](https://img.shields.io/badge/Home%20Assistant-2026.5+-green)
![license](https://img.shields.io/badge/license-MIT-lightgrey)

My fork of [https://github.com/suxlala/rss-news-card](https://github.com/suxlala/rss-news-card), credits go to **suxlala** for originally making this card.

A RSS newsfeed reader card specifically for use with FeedParser sensors. Works with multiple feeds, has a visual editor and allows filtering unwanted news tags / categories.

![Overview](https://github.com/xorinzor/feedparser-rss-news-card/blob/main/cardoverview.png)

## Features

- Multiple RSS sources using FeedParser sensors in a single card, sorted by datetime
- Filter out unwanted news items by tags directly from the UI
- Automatic language & date format detection from Home Assistant settings
- Visual editor with color picker, toggle switches, and font size controls
- Community localization support (English, French, Hungarian, German included)
- Flexible layout

## Requirements

- You will need to have [FeedParser](https://github.com/custom-components/feedparser) installed

## Installation (using HACS)

[![Open HACS Repository](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xorinzor&repository=feedparser-rss-news-card&category=plugin)

> If the button doesn't work, add manually:

1. Go to the HACS store 
2. Click on the 3 dots in the upper right corner
3. Select Custom repos and add the url `https://github.com/xorinzor/feedparser-rss-news-card` 
4. Choose Dashboard as a type

HACS Will automatically add the JS resource to your dashboard and refresh it when updated.
You will need to refresh the browser page for updates to work.

## Configuration

### Feedparser sensor in 'configuration.yaml'

*Note: Ensure you include `tags` in your inclusions list if you plan to use the category filtering feature. The Python feedparser library standardizes `<category>` XML tags into the `tags` array!*

*Note: use `summary`, not `description`. The Python feedparser library normalizes the RSS
`<description>` element into `summary`, so `description` in `inclusions` silently matches
nothing and the card shows no text at all.*

*Note: include `media_content` if your feeds put their image in `<media:content>` — see
[Article images](#article-images) below.*

```yaml
sensor:
  - platform: feedparser
    name: "rss_nu_nl_feed"
    feed_url: 'https://www.nu.nl/rss/Algemeen'
    date_format: '%a, %d %b %Y %H:%M:%S %z'
    scan_interval:
      minutes: 30
    show_topn: 20
    inclusions:
      - title
      - link
      - summary
      - image
      - media_content
      - published
      - tags

```

### Card config example

```yaml
type: custom:feedparser-rss-news-card
title: Latest News
card_height: 400
max_articles: 20
show_description: true
max_description_length: 200
description_max_lines: 3
show_source: true
show_domain: true
hide_visited: true
show_date: true
image_position: left
image_width: 100
image_height: 70
image_radius: 6
exclude_categories: formule-1, voetbal
sources:
  - entity: sensor.rss_nu_nl_feed
    name: NU.nl Algemeen
    color: "#e63946"
  - entity: sensor.rss_another_feed
    name: Tech News
    color: "#0077cc"

```

### Image position

`image_position` controls where an article's image sits:

| Value | Layout |
| --- | --- |
| `left` (default) | Thumbnail in a column to the left of the text, sized by `image_width` × `image_height`. |
| `top` | Image below the title and the source line, above the description. It spans the full width of the card, so `image_width` no longer applies and only `image_height` is used. |

With `top`, raise `image_height` — the 70px default was meant for a 100px-wide thumbnail and
looks like a thin strip once stretched across the card; 130–160 reads better. Expect articles
to be noticeably taller, so fewer of them fit in a given `card_height`.

`image_radius` rounds the image corners, in pixels. It defaults to `6`, which is what the card
has always used; `0` gives square corners and larger values read better on a full-width image.
The reserved block of `keep_image_space` is rounded to match.

`keep_image_space` works in both layouts: with `top` it reserves a full-width block of
`image_height`. On `top` the image also carries a 10px margin above and below (and none on the
sides, so it stays flush with the text), keeping it off the source line and the description.

### Article images

The integration only looks for an image in `<enclosure>` and in `<img>` tags inside the
summary. A feed that carries its image solely in `<media:content>` — common on WordPress
sites — therefore reaches the card with the Home Assistant favicon instead of its picture.

The card widens the search and takes the first usable URL from, in order:

1. `image` (a plain URL, or an object with `href` / `url`)
2. `media_content`, images first
3. `media_thumbnail`
4. `enclosures` of an image type
5. `links` with `rel="enclosure"` and an image type
6. the first `<img>` found in the summary

The Home Assistant favicon is demoted to last resort rather than taken first, so it never
shadows a field holding the real image. Every candidate must be an absolute `http(s)` URL,
so a relative path or a `javascript:` value yields no image rather than a broken one.

For the extra fields to reach the card they have to survive the integration's `inclusions`
filter, hence `media_content` in the sensor example above. Feeds whose images are inline in
the summary need `summary` instead.

### Aggregated feeds

If a single sensor carries articles from several sites (FreshRSS categories, Feedly boards and
similar aggregators), `show_source` can only show the one `name` you gave that entity. Set
`show_domain: true` to also show each article's own site, derived from its link:

```
Blogs · korben.info · 18 Sept
```

The link is the only per-article field that reliably identifies the origin — RSS `<source>` is
usually absent from aggregator output, and the author can differ from one article to the next
within the same site. The leading `www.` is stripped. The option is off by default.

The domain is shown as a coloured badge, its hue derived from the domain itself, so every site
keeps the same colour across reloads and a site added to the feed later is coloured without any
configuration. The colour is blended with the theme's text colour rather than picked per theme,
so the badge stays readable on light and dark themes alike — measured at 4.5:1 or better across
the hue range. With many sources, two domains can land on nearby hues; the hue is stable, but
its distance from the others is not guaranteed.

Alternatively, if you prefer a coloured badge per site, split the aggregated feed into one feed
per site, declare one `feedparser` sensor for each, and list them all under `sources:` with their
own `name` and `color`.

### Hiding articles you already opened

An aggregated feed serves the same articles for days, so `hide_visited: true` drops the ones you
have already opened from the list. It works in two steps: the article you click stays put and its
title greys out, then it is gone at the next render — a view change, a reload, or a sensor
update. Nothing disappears from under your finger mid-click.

A line above the list says how many are hidden and switches them back on
(`3 read hidden · show` / `hide read`), so you can look at them again without editing the card.
That switch is not remembered: reloading returns to whatever `hide_visited` says. The line only
appears when the option is on, so a card that never asked for this gains no control of its own.

Read articles are filtered before `max_articles` is applied, so hiding three of them backfills
the list with three more rather than leaving you short.

What to expect, since none of it is obvious:

- The list lives in `localStorage`, so it survives reloads but is **per browser**: an article
  read on a desktop still shows up on a phone, and clearing site data resets it. It is capped at
  500 entries, oldest dropped first.
- "Read" means "opened from this card". An article read anywhere else still shows.
- There is no way to clear the list, and no per-article way to mark something unread.
- If every article in the feed has been read, the card shows its "no articles" message.
- With the option off, one thing still changes: a read title now stays greyed after a reload
  instead of turning black again.

### Full-text feeds

Some publishers put the **entire article** inside the RSS `<description>`, which makes the card
unreadable. Two options keep descriptions short:

| Option | Default | Effect |
| --- | --- | --- |
| `max_description_length` | `0` (no limit) | Shortens the description to N characters, cutting on a word boundary and appending `...`, joined to the last word by a non-breaking space so the dots are never left alone at the start of a line. Whitespace runs are always collapsed first, so the budget is spent on readable text. |
| `description_max_lines` | `0` (no limit) | Clamps the description to N rendered lines, so every article row has the same height whatever the card width. Text that would overflow is shortened to end with the same `...` inside the visible lines, and descriptions shorter than the clamp are left untouched. |

They are independent and can be combined — `max_description_length` bounds the text,
`description_max_lines` bounds the height. When both apply, the line clamp wins: the text is
re-shortened to fit the lines, so the ellipsis stays visible rather than landing on a hidden
line. Fitting is measured after layout and repeated when the card is resized; with a hundred
articles that costs on the order of 100ms per render. Both default to *no limit*, so existing cards render
exactly as before; new cards added from the UI start at `200` / `3`.

Note that this only affects display. The sensor still stores the full HTML, which for a
full-text feed can exceed Home Assistant's 16 KB limit on recorded state attributes — the card
keeps working (it reads live state), but the entity's history is not recorded. To reduce the
payload at the source, list only the keys you need in the integration's `inclusions` (in
particular leave out `summary_detail`, which is a verbatim duplicate of `summary`).

## Development

To test changes locally, you can use the [File Editor](https://github.com/home-assistant/addons/blob/master/configurator/README.md) app.
1. Navigate to `homeassistant/www/community/feedparser-rss-news-card/`
2. Remove the `feedparser-rss-news-card.js.gz` file, if you don't do this, changes you'll be making will not become visible.
3. Edit the `feedparser-rss-news-card.js` file, apply your changes here.
4. Save the changes and reload your browser, make sure to empty the cache.
