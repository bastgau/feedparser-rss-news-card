const RSS_LOCALES = {
  en: {
    no_articles: 'No articles to display.',
    diag_title: '⚠️ Sensor diagnostics',
    diag_footer: 'Missing sensors must be created using the <b>feedparser</b> custom component.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Missing entity ID in configuration.' },
      not_found:             { icon: '❌', text: 'Entity does not exist in Home Assistant.' },
      unavailable:           { icon: '🔌', text: 'Entity is unavailable or in unknown state.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Entity has no "entries" attribute (check feedparser configuration).' },
      empty:                 { icon: '📭', text: 'Entity is reachable but contains no articles yet.' },
    },
    unread: '{n} unread',
    unread_one: '{n} unread',
    hidden_read: '{n} read hidden',
    hidden_read_one: '{n} read hidden',
    show_read: 'show',
    hide_read: 'hide read',
    dismiss: 'Mark as read without opening',
    cmd_hint: 'Ensure feedparser is configured correctly:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:        'Card title',
      card_title_color:  'Card title color',
      article_title_color: 'Article title color',
      desc_color:        'Description color',
      sources:           'Sources (entity · name · color)',
      add_source:        '+ Add source',
      exclude_categories: 'Exclude categories (comma-separated)',
      max_articles:      'Max articles',
      card_height:       'Card height (px)',
      image_position:    'Image position',
      pos_left:          'Left of the text',
      pos_top:           'Above the description',
      img_radius:        'Image corner radius (px)',
      default_image:     'Fallback image (URL or /local/...)',
      img_width:         'Image width (px)',
      img_height:        'Image height (px)',
      show_source:       'Show source name',
      show_domain:       'Show article domain',
      hide_visited:      'Hide articles already opened',
      oldest_first:      'Oldest first',
      show_date:         'Show date',
      show_desc:         'Show description',
      show_images:       'Show images',
      keep_image_space:  'Keep space if image missing',
      title_size:        'Article title font size (px)',
      desc_size:         'Description font size (px)',
      desc_length:       'Max description length (chars, 0 = no limit)',
      desc_lines:        'Max description lines (0 = no limit)',
      color_hint:        'Leave empty for theme default',
    },
  },
  hu: {
    no_articles: 'Nincs megjeleníthető cikk.',
    diag_title: '⚠️ Szenzor diagnosztika',
    diag_footer: 'A hiányzó szenzorokat a <b>feedparser</b> integrációval kell létrehozni.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Hiányzó entitás azonosító a konfigurációban.' },
      not_found:             { icon: '❌', text: 'Az entitás nem létezik a Home Assistantban.' },
      unavailable:           { icon: '🔌', text: 'Az entitás elérhetetlen vagy ismeretlen állapotban van.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Az entitásnak nincs "entries" attribútuma (ellenőrizd a feedparser beállítást).' },
      empty:                 { icon: '📭', text: 'Az entitás elérhető, de még nincs benne cikk.' },
    },
    unread: '{n} olvasatlan',
    unread_one: '{n} olvasatlan',
    hidden_read: '{n} olvasott elrejtve',
    hidden_read_one: '{n} olvasott elrejtve',
    show_read: 'megjelenítés',
    hide_read: 'olvasottak elrejtése',
    dismiss: 'Megjelölés olvasottként megnyitás nélkül',
    cmd_hint: 'Feedparser beállítás szükséges:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:          'Kártya cime',
      card_title_color:    'Kártya cím színe',
      article_title_color: 'Cikkek cím színe',
      desc_color:          'Leírás színe',
      sources:             'Források (entitás · név · szín)',
      add_source:          '+ Forrás hozzáadása',
      exclude_categories:  'Kizárt kategóriák (vesszővel elválasztva)',
      max_articles:        'Max cikkek száma',
      card_height:         'Kártya magassága (px)',
      image_position:      'Kép elhelyezése',
      pos_left:            'A szöveg bal oldalán',
      pos_top:             'A leírás fölött',
      img_radius:          'Kép sarok lekerekítése (px)',
      default_image:       'Tartalék kép (URL vagy /local/...)',
      img_width:           'Kép szélessége (px)',
      img_height:          'Kép magassága (px)',
      show_source:         'Forrás neve látható',
      show_domain:         'Cikk domainje látható',
      hide_visited:        'Már megnyitott cikkek elrejtése',
      oldest_first:        'Legrégebbi elöl',
      show_date:           'Dátum látható',
      show_desc:           'Leírás látható',
      show_images:         'Képek megjelenítése',
      keep_image_space:    'Hely megtartása hiányzó képnél',
      title_size:          'Cím betűmérete (px)',
      desc_size:           'Leírás betűmérete (px)',
      desc_length:         'Leírás max. hossza (karakter, 0 = nincs korlát)',
      desc_lines:          'Leírás max. sorszáma (0 = nincs korlát)',
      color_hint:          'Üresen hagyva a téma alapszínét használja',
    },
  },
  de: {
    no_articles: 'Keine Artikel zum Anzeigen.',
    diag_title: '⚠️ Sensor-Diagnose',
    diag_footer: 'Fehlende Sensoren müssen mit der <b>feedparser</b>-Integration erstellt werden.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Fehlende Entitäts-ID in der Konfiguration.' },
      not_found:             { icon: '❌', text: 'Entität existiert nicht in Home Assistant.' },
      unavailable:           { icon: '🔌', text: 'Entität ist nicht verfügbar oder in unbekanntem Zustand.' },
      no_entries_attribute:  { icon: '🗂️', text: 'Entität hat kein "entries"-Attribut (feedparser Konfiguration prüfen).' },
      empty:                 { icon: '📭', text: 'Entität ist erreichbar, enthält aber noch keine Artikel.' },
    },
    unread: '{n} ungelesen',
    unread_one: '{n} ungelesen',
    hidden_read: '{n} gelesene ausgeblendet',
    hidden_read_one: '{n} gelesene ausgeblendet',
    show_read: 'anzeigen',
    hide_read: 'gelesene ausblenden',
    dismiss: 'Als gelesen markieren, ohne zu öffnen',
    cmd_hint: 'feedparser Konfiguration erforderlich:<br><b>platform:</b> feedparser<br><b>inclusions:</b> title, link, summary, image, published',
    ed: {
      card_title:          'Kartentitel',
      card_title_color:    'Farbe Kartentitel',
      article_title_color: 'Farbe Artikeltitel',
      desc_color:          'Farbe Beschreibung',
      sources:             'Quellen (Entität · Name · Farbe)',
      add_source:          '+ Quelle hinzufügen',
      exclude_categories:  'Kategorien ausschließen (kommagetrennt)',
      max_articles:        'Max. Artikel',
      card_height:         'Kartenhöhe (px)',
      image_position:      'Bildposition',
      pos_left:            'Links vom Text',
      pos_top:             'Über der Beschreibung',
      img_radius:          'Eckenradius des Bildes (px)',
      default_image:       'Ersatzbild (URL oder /local/...)',
      img_width:           'Bildbreite (px)',
      img_height:          'Bildhöhe (px)',
      show_source:         'Quellenname anzeigen',
      show_domain:         'Domain des Artikels anzeigen',
      hide_visited:        'Bereits geöffnete Artikel ausblenden',
      oldest_first:        'Älteste zuerst',
      show_date:           'Datum anzeigen',
      show_desc:           'Beschreibung anzeigen',
      show_images:         'Bilder anzeigen',
      keep_image_space:    'Platz freihalten wenn Bild fehlt',
      title_size:          'Schriftgröße Artikeltitel (px)',
      desc_size:           'Schriftgröße Beschreibung (px)',
      desc_length:         'Max. Beschreibungslänge (Zeichen, 0 = unbegrenzt)',
      desc_lines:          'Max. Beschreibungszeilen (0 = unbegrenzt)',
      color_hint:          'Leer lassen für Themenstandardfarbe',
    },
  },
  fr: {
    no_articles: 'Aucun article à afficher.',
    diag_title: '⚠️ Diagnostic des capteurs',
    diag_footer: 'Les capteurs manquants doivent être créés avec l\'intégration <b>feedparser</b>.',
    problems: {
      missing_entity:        { icon: '⚠️', text: 'Identifiant d\'entité absent de la configuration.' },
      not_found:             { icon: '❌', text: 'L\'entité n\'existe pas dans Home Assistant.' },
      unavailable:           { icon: '🔌', text: 'L\'entité est indisponible ou dans un état inconnu.' },
      no_entries_attribute:  { icon: '🗂️', text: 'L\'entité n\'a pas d\'attribut «\u00A0entries\u00A0» (vérifiez la configuration de feedparser).' },
      empty:                 { icon: '📭', text: 'L\'entité répond mais ne contient encore aucun article.' },
    },
    unread: '{n} non lus',
    unread_one: '{n} non lu',
    hidden_read: '{n} lus masqués',
    hidden_read_one: '{n} lu masqué',
    show_read: 'afficher',
    hide_read: 'masquer les lus',
    dismiss: 'Marquer comme lu sans ouvrir',
    cmd_hint: 'Vérifiez la configuration de feedparser\u00A0:<br><b>platform\u00A0:</b> feedparser<br><b>inclusions\u00A0:</b> title, link, summary, image, published',
    ed: {
      card_title:          'Titre de la carte',
      card_title_color:    'Couleur du titre de la carte',
      article_title_color: 'Couleur du titre des articles',
      desc_color:          'Couleur de la description',
      sources:             'Sources (entité · nom · couleur)',
      add_source:          '+ Ajouter une source',
      exclude_categories:  'Catégories à exclure (séparées par des virgules)',
      max_articles:        'Nombre maximal d\'articles',
      card_height:         'Hauteur de la carte (px)',
      image_position:      'Position de l\'image',
      pos_left:            'À gauche du texte',
      pos_top:             'Au-dessus de la description',
      img_radius:          'Arrondi des coins de l\'image (px)',
      default_image:       'Image de remplacement (URL ou /local/...)',
      img_width:           'Largeur de l\'image (px)',
      img_height:          'Hauteur de l\'image (px)',
      show_source:         'Afficher le nom de la source',
      show_domain:         'Afficher le domaine de l\'article',
      hide_visited:        'Masquer les articles déjà ouverts',
      oldest_first:        'Les plus anciens en premier',
      show_date:           'Afficher la date',
      show_desc:           'Afficher la description',
      show_images:         'Afficher les images',
      keep_image_space:    'Conserver l\'espace si l\'image manque',
      title_size:          'Taille du titre des articles (px)',
      desc_size:           'Taille de la description (px)',
      desc_length:         'Longueur maximale de la description (caractères, 0\u00A0= illimité)',
      desc_lines:          'Nombre maximal de lignes de description (0\u00A0= illimité)',
      color_hint:          'Laisser vide pour la couleur du thème',
    },
  },
};

const HA_LANG_TO_DATE_LOCALE = {
  hu: 'hu-HU', en: 'en-US', de: 'de-DE', fr: 'fr-FR',
  es: 'es-ES', it: 'it-IT', pl: 'pl-PL', nl: 'nl-NL',
  pt: 'pt-PT', ru: 'ru-RU', cs: 'cs-CZ', sk: 'sk-SK',
  ro: 'ro-RO', sv: 'sv-SE', nb: 'nb-NO', da: 'da-DK',
  fi: 'fi-FI', tr: 'tr-TR', zh: 'zh-CN', ja: 'ja-JP',
  ko: 'ko-KR',
};

function getLocale(lang) {
  return RSS_LOCALES[lang] || RSS_LOCALES['en'];
}

function detectHaLanguage(hass) {
  try {
    return hass?.locale?.language || hass?.language || 'en';
  } catch { return 'en'; }
}

// ─── Date parsing ─────────────────────────────────────────────────────────────
const MONTH_MAP = {
  jan:0, feb:1, mar:2, apr:3, may:4, jun:5,
  jul:6, aug:7, sep:8, oct:9, nov:10, dec:11,
};

function parsePublishedDate(str) {
  if (!str) return 0;

  const cleaned = str.replace(/^[A-Za-z]+,?\s+/, '').trim();
  const m12 = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  const m24 = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{2}):(\d{2})$/);
  const dm12 = cleaned.match(/^(\d{1,2})\s+([A-Za-z]+),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  const dm24 = cleaned.match(/^(\d{1,2})\s+([A-Za-z]+),?\s+(\d{2}):(\d{2})$/);

  let monthStr, dayStr, hourStr, minStr, ampm = null;

  if (m12)       { [, monthStr, dayStr, hourStr, minStr, ampm] = m12; }
  else if (m24)  { [, monthStr, dayStr, hourStr, minStr]       = m24; }
  else if (dm12) { [, dayStr, monthStr, hourStr, minStr, ampm] = dm12; }
  else if (dm24) { [, dayStr, monthStr, hourStr, minStr]       = dm24; }

  if (monthStr) {
    const monthIdx = MONTH_MAP[monthStr.toLowerCase().slice(0, 3)];
    if (monthIdx !== undefined) {
      let hour = parseInt(hourStr, 10);
      const min = parseInt(minStr, 10);
      const day = parseInt(dayStr, 10);
      if (ampm) {
        if (ampm.toUpperCase() === 'PM' && hour !== 12) hour += 12;
        if (ampm.toUpperCase() === 'AM' && hour === 12) hour  =  0;
      }
      const now = new Date();
      let d = new Date(now.getFullYear(), monthIdx, day, hour, min);
      if (d.getTime() - now.getTime() > 7 * 24 * 3600 * 1000) {
        d = new Date(now.getFullYear() - 1, monthIdx, day, hour, min);
      }
      return d.getTime();
    }
  }

  const native = new Date(str);
  return isNaN(native.getTime()) ? 0 : native.getTime();
}

// ─── Safe rendering helpers ──────────────────────────────────────────────────
// Feed entries are third-party content and must never reach innerHTML.

const SAFE_URL_PROTOCOLS = new Set(['http:', 'https:']);

/** Returns the URL if it is an absolute http(s) URL, otherwise ''. */
function sanitizeUrl(value) {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  try {
    const url = new URL(trimmed);
    return SAFE_URL_PROTOCOLS.has(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

/** Converts (possibly HTML) feed text to plain text without executing anything. */
function feedTextToPlain(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (!/[<&]/.test(str)) return str;
  try {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    doc.querySelectorAll('script, style, template').forEach(n => n.remove());
    return (doc.body ? doc.body.textContent : '') || '';
  } catch {
    return str;
  }
}

/**
 * Returns the display hostname of an http(s) URL, with a leading "www." removed.
 * Aggregated feeds (FreshRSS and friends) carry articles from several sites under
 * a single sensor, and the link is the only per-article field that identifies the
 * origin: RSS <source> is usually absent and the author can differ within one site.
 */
function hostnameFromUrl(value) {
  const url = sanitizeUrl(value);
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

// The feedparser integration falls back to this when it finds no image of its own.
const HA_DEFAULT_THUMBNAIL = 'https://www.home-assistant.io/images/favicon-192x192-full.png';

/**
 * True for the stand-in the integration supplies when it finds nothing. It marks the absence of
 * an image rather than being one, so the card treats it as no image at all.
 *
 * Matched by host and filename rather than by the exact URL, so a different favicon size is
 * recognised too; an article genuinely illustrated with a picture from home-assistant.io keeps
 * its image, since only favicons are discarded.
 */
function isPlaceholderImage(url) {
  if (!url) return true;
  if (url === HA_DEFAULT_THUMBNAIL) return true;
  try {
    const { hostname, pathname } = new URL(url);
    return /(^|\.)home-assistant\.io$/.test(hostname) && /favicon/i.test(pathname);
  } catch {
    return false;
  }
}

/** First <img> of an HTML fragment. DOMParser builds an inert document: nothing is fetched. */
function firstImageInHtml(html) {
  if (!html) return '';
  try {
    const doc = new DOMParser().parseFromString(String(html), 'text/html');
    const img = doc.querySelector('img[src]');
    // getAttribute, not .src: the latter would resolve a relative path against the card.
    return img ? sanitizeUrl(img.getAttribute('src')) : '';
  } catch {
    return '';
  }
}

/**
 * Picks an article's image from whichever field the feed happens to use.
 *
 * The integration only ever looks at <enclosure> and at <img> tags inside the summary, so a
 * feed carrying its image solely in <media:content> — common on WordPress sites — ends up with
 * the Home Assistant favicon instead. Reading the other fields here covers those articles
 * without touching the integration.
 *
 * That favicon is therefore demoted to last resort rather than accepted first, otherwise it
 * would shadow the very fields that hold the real image. Every candidate goes through
 * sanitizeUrl(), so feed data still cannot inject anything.
 */
function resolveArticleImage(a) {
  const candidates = [];
  const push = (value) => { const url = sanitizeUrl(value); if (url) candidates.push(url); };
  const pushList = (list, pick) => { if (Array.isArray(list)) list.forEach(item => item && push(pick(item))); };
  const isImage = (item) => item.medium === 'image' || String(item.type || '').startsWith('image/');

  push(typeof a.image === 'string' ? a.image : a.image?.href ?? a.image?.url);
  // Images first, then anything else carrying a URL: some feeds omit medium and type.
  pushList((a.media_content || []).filter(isImage), m => m.url ?? m.href);
  pushList((a.media_content || []).filter(m => !isImage(m)), m => m.url ?? m.href);
  pushList(a.media_thumbnail, m => m.url ?? m.href);
  pushList((a.enclosures || []).filter(isImage), e => e.href ?? e.url);
  pushList((a.links || []).filter(l => l.rel === 'enclosure' && isImage(l)), l => l.href ?? l.url);
  push(firstImageInHtml(a.summary));

  return candidates.find(url => url !== HA_DEFAULT_THUMBNAIL) || candidates[0] || '';
}

/**
 * Image source taken from the card configuration, which may be a Home Assistant local path
 * such as /local/placeholder.svg as well as an absolute http(s) URL. Feed data still goes
 * through sanitizeUrl: only the configuration, authored by the user, may name a local file.
 * A leading "//" is protocol-relative — another origin in disguise — and is not a local path.
 */
function sanitizeImageSource(value) {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (trimmed.startsWith('//')) return '';
  if (trimmed.startsWith('/')) return trimmed;
  return sanitizeUrl(trimmed);
}

/**
 * Stable hue (0-359) derived from a domain, so a site always gets the same colour
 * without any configuration, and a site added to the feed later just works.
 */
function domainHue(domain) {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) hash = (hash * 31 + domain.charCodeAt(i)) % 360;
  return hash;
}

/**
 * Collapses whitespace runs and shortens text to maxChars, cutting on a word
 * boundary. Feed summaries often carry long runs of newlines and spaces, which
 * would otherwise eat the character budget before any readable text.
 * maxChars <= 0 means no limit (whitespace is still collapsed). A non-breaking space joins the
 * ellipsis to the last word, so a wrap cannot strand the dots at the start of a line. It is
 * written as an escape on purpose: a literal U+00A0 would be invisible on review, and a stray
 * reformat could silently turn it back into an ordinary space.
 */
const ELLIPSIS = '\u00A0...';

const VISITED_KEY = 'feedparser-rss-news-card:visited';
// Bounds the stored list: ~500 URLs stay well under 100KB, and without a cap it would only grow.
const VISITED_LIMIT = 500;
let VISITED_CACHE = null;

function truncateText(value, maxChars) {
  const str = String(value ?? '').replace(/\s+/g, ' ').trim();
  const limit = parseInt(maxChars, 10);
  if (!Number.isFinite(limit) || limit <= 0 || str.length <= limit) return str;
  const clipped = str.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(' ');
  return (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trimEnd() + ELLIPSIS;
}

/** Only allow simple CSS colour values (named, hex, rgb()/hsl(), CSS vars). */
function sanitizeCssColor(value, fallback) {
  if (typeof value !== 'string') return fallback;
  const v = value.trim();
  if (/^(#[0-9a-fA-F]{3,8}|[a-zA-Z]+|(rgb|rgba|hsl|hsla)\([0-9.,%\s]+\)|var\(--[a-zA-Z0-9-]+\))$/.test(v)) return v;
  return fallback;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
class FeedparserRssNewsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._articles = [];
    this._lastStateKey = '';
    this._initialized = false;
    // Pre-clamp text per description node; a WeakMap keeps it out of the DOM.
    this._fullDescriptions = new WeakMap();
  }

  static getConfigElement() {
    return document.createElement('feedparser-rss-news-card-editor');
  }

  static getStubConfig() {
    return {
      title: 'News',
      sources: [{ entity: 'sensor.feedparser_news', name: 'Feedparser Source', color: '#e63946' }],
      exclude_categories: '',
      max_articles: 10,
      card_height: 400,
      show_description: true,
      show_source: true,
      show_domain: false,
      hide_visited: false,
      oldest_first: false,
      show_date: true,
      show_images: true,
      keep_image_space: false,
      image_position: 'left',
      image_radius: 6,
      default_image: '',
      image_width: 100,
      image_height: 70,
      title_font_size: 15,
      desc_font_size: 14,
      max_description_length: 200,
      description_max_lines: 3,
      card_title_color: '',
      article_title_color: '',
      desc_color: '',
    };
  }

  setConfig(config) {
    if (!config.sources || !Array.isArray(config.sources) || config.sources.length === 0) {
      throw new Error('At least one source must be defined in the "sources" list.');
    }
    this._config = {
      title:            config.title || '',
      sources:          config.sources,
      exclude_categories: config.exclude_categories || '',
      max_articles:     config.max_articles || 10,
      card_height:      config.card_height || 400,
      show_description: config.show_description !== false,
      show_source:      config.show_source !== false,
      show_domain:      config.show_domain === true,
      hide_visited:     config.hide_visited === true,
      oldest_first:     config.oldest_first === true,
      show_date:        config.show_date !== false,
      show_images:      config.show_images !== false,
      keep_image_space: config.keep_image_space === true,
      image_position:   config.image_position === 'top' ? 'top' : 'left',
      image_radius:     Number.isFinite(parseInt(config.image_radius, 10)) && parseInt(config.image_radius, 10) >= 0
                          ? parseInt(config.image_radius, 10) : 6,
      default_image:    sanitizeImageSource(config.default_image),
      image_width:      config.image_width || 100,
      image_height:     config.image_height || 70,
      title_font_size:  config.title_font_size || 15,
      desc_font_size:   config.desc_font_size || 14,
      // 0 means "no limit", which keeps existing cards rendering as before.
      max_description_length: parseInt(config.max_description_length, 10) || 0,
      description_max_lines:  parseInt(config.description_max_lines, 10) || 0,
      card_title_color: config.card_title_color || '',
      article_title_color: config.article_title_color || '',
      desc_color:       config.desc_color || '',
    };
    this._initialized = false;
    this._showVisited = !this._config.hide_visited;
    this._render();
    if (this._hass) {
      this._updateContent(this._articles || [], JSON.parse(this._lastIssuesJson || '[]'));
    }
  }

  set hass(hass) {
    this._hass = hass;
    const stateKey = this._config.sources.map(s => {
      const st = hass.states[s.entity];
      return st ? (s.entity + ':' + st.state + ':' + st.last_updated) : s.entity;
    }).join('|');
    if (stateKey === this._lastStateKey && this._initialized) return;
    this._lastStateKey = stateKey;
    const newArticles = this._getArticles();
    const newIssues = this._validateSources();
    this._articles = newArticles;
    this._lastIssuesJson = JSON.stringify(newIssues);
    this._updateContent(newArticles, newIssues);
  }

  _getLang() {
    const haLang = detectHaLanguage(this._hass);
    return haLang.split('-')[0].toLowerCase();
  }

  _getDateLocale() {
    const haLang = detectHaLanguage(this._hass);
    const shortLang = haLang.split('-')[0].toLowerCase();
    return HA_LANG_TO_DATE_LOCALE[shortLang] || haLang || 'en-US';
  }

  _t() { return getLocale(this._getLang()); }

  _validateSources() {
    if (!this._hass) return [];
    const issues = [];
    for (const source of this._config.sources) {
      if (!source.entity) { issues.push({ entity: '(empty)', name: source.name || '?', problem: 'missing_entity' }); continue; }
      const state = this._hass.states[source.entity];
      if (!state) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'not_found' }); continue; }
      if (state.state === 'unavailable' || state.state === 'unknown') { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'unavailable' }); continue; }
      const entries = state.attributes.entries;
      if (!Array.isArray(entries)) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'no_entries_attribute' }); continue; }
      if (entries.length === 0) { issues.push({ entity: source.entity, name: source.name || source.entity, problem: 'empty' }); }
    }
    return issues;
  }

  _renderDiagnostics() {
    if (!this._hass || !this._config) return null;

    const issues = [];
    for (const source of this._config.sources) {
      const state = this._hass.states[source.entity];
      if (!state) issues.push(`Entity not found: ${source.entity}`);
    }
    if (issues.length === 0) return null;

    const panel = el('div', 'diagnostics-panel');
    panel.appendChild(el('strong', '', '⚠️ Sensor diagnostics'));
    const ul = document.createElement('ul');
    issues.forEach(issue => ul.appendChild(el('li', '', issue)));
    panel.appendChild(ul);
    return panel;
  }

  _getArticles() {
    if (!this._hass) return [];
    let all = [];

    
    const excludeString = this._config.exclude_categories || '';
    const excludeList = excludeString.split(',').map(c => c.trim().toLowerCase()).filter(c => c.length > 0);
    
    for (const source of this._config.sources) {
      const state = this._hass.states[source.entity];
      if (!state) continue;
      
      const entries = state.attributes.entries;
      if (!Array.isArray(entries)) continue;
      
      entries.forEach(a => {
        if (excludeList.length > 0 && Array.isArray(a.tags)) {
          const isExcluded = a.tags.some(tag => 
            tag && tag.term && excludeList.includes(tag.term.trim().toLowerCase())
          );
          if (isExcluded) return; 
        }

        all.push({ 
          ...a, 
          _visited: this._isVisited(sanitizeUrl(a.link)),
          _sourceName: source.name || source.entity, 
          _sourceColor: source.color || 'var(--primary-color)' 
        });
      });
    }

    all.sort((a, b) => parsePublishedDate(b.published) - parsePublishedDate(a.published));

    const max = this._config.max_articles;
    // Count what the toggle would actually change, not every read article the feed still holds:
    // only those that would make the visible list. One already dropped by exclude_categories, or
    // sitting past max_articles, changes nothing on screen and must not be announced as hidden.
    this._visitedCount = all.slice(0, max).filter(a => a._visited).length;
    // Unread is counted over the whole feed rather than the visible slice: it answers "how much
    // is left to read", which max_articles does not bound.
    this._unreadCount = all.filter(a => !a._visited).length;
    // Read articles are removed before max_articles applies, so hiding them backfills the list
    // with further articles instead of leaving it short.
    const shown = this._showVisited ? all : all.filter(a => !a._visited);
    const kept = shown.slice(0, max);
    // Reversed after the slice, not by sorting the other way: the card still keeps the newest
    // max_articles and merely reads them oldest first. Sorting ascending would instead pick the
    // oldest articles of the feed and never show a new one.
    return this._config.oldest_first ? kept.reverse() : kept;
  }

  _formatDate(dateStr) {
    try {
      const ts = parsePublishedDate(dateStr);
      if (!ts) return dateStr;
      
      const dateObj = new Date(ts);
      const userLangLocale = this._hass?.locale?.language || this._getDateLocale();
      
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      };

      if (this._hass?.locale?.time_format) {
        if (this._hass.locale.time_format === '12') options.hour12 = true;
        if (this._hass.locale.time_format === '24') options.hour12 = false;
      }

      return new Intl.DateTimeFormat(userLangLocale, options).format(dateObj);
    } catch { return dateStr; }
  }

  /**
   * Read articles, kept in localStorage so they survive a reload — the set used to live on
   * window and was lost on every refresh, which made greying a read title pointless and
   * hiding it impossible. Cached in memory because _isVisited runs once per article, and
   * stored as an array rather than a serialised Set to keep insertion order for trimming.
   * Every access is guarded: localStorage throws in Safari private mode, with site data
   * blocked, or over quota, and the card must still render.
   */
  _getVisited() {
    if (VISITED_CACHE) return VISITED_CACHE;
    VISITED_CACHE = new Set();
    try {
      const raw = window.localStorage.getItem(VISITED_KEY);
      if (raw) JSON.parse(raw).forEach(url => VISITED_CACHE.add(url));
    } catch {
      // No persistence available: the cache alone still works for this session.
    }
    return VISITED_CACHE;
  }

  _markVisited(url) {
    const visited = this._getVisited();
    // Re-adding would keep the URL at its original position, losing its recency on trim.
    visited.delete(url);
    visited.add(url);
    try {
      const urls = [...visited];
      // Insertion order runs oldest first, so drop from the front.
      const trimmed = urls.length > VISITED_LIMIT ? urls.slice(urls.length - VISITED_LIMIT) : urls;
      if (trimmed.length !== urls.length) {
        VISITED_CACHE = new Set(trimmed);
      }
      window.localStorage.setItem(VISITED_KEY, JSON.stringify(trimmed));
    } catch {
      // Storage refused the write; the in-memory set keeps this session consistent.
    }
  }

  _isVisited(url) {
    return this._getVisited().has(url);
  }

  _buildArticleNodes(articles) {
    const { show_source, show_domain, show_date, show_description, image_width, image_height, image_position, image_radius, default_image, title_font_size, desc_font_size, max_description_length, description_max_lines, article_title_color, desc_color, show_images, keep_image_space, hide_visited } = this._config;
    const t = this._t();
    const frag = document.createDocumentFragment();
    if (articles.length === 0) {
      frag.appendChild(el('div', 'no-articles', t.no_articles));
      return frag;
    }

    const imgW = parseInt(image_width, 10) || 100;
    const imgH = parseInt(image_height, 10) || 70;
    const titleSize = parseInt(title_font_size, 10) || 15;
    const descSize = parseInt(desc_font_size, 10) || 14;
    const descLen = parseInt(max_description_length, 10) || 0;
    const descLines = parseInt(description_max_lines, 10) || 0;
    const imageTop = image_position === 'top';
    const imgRadius = Number.isFinite(parseInt(image_radius, 10)) ? parseInt(image_radius, 10) : 6;
    const titleColor = sanitizeCssColor(article_title_color, 'var(--primary-text-color)');
    const descColor = sanitizeCssColor(desc_color, 'var(--secondary-text-color)');

    articles.forEach(a => {
      const link = sanitizeUrl(a.link);
      const title = feedTextToPlain(a.title);
      const desc = truncateText(feedTextToPlain(a.summary), descLen);
      const pubDate = typeof a.published === 'string' ? a.published : '';

      const row = el('div', 'article-row');
      if (link) row.dataset.rssUrl = link;

      // On top, the image spans the row, so only its height is configurable.
      const imageBox = (imageTop
        ? `width:100%;height:${imgH}px;`
        : `width:${imgW}px;min-width:${imgW}px;height:${imgH}px;`) + `border-radius:${imgRadius}px;`;
      let imageNode = null;
      if (show_images) {
        const found = resolveArticleImage(a);
        // The integration's stand-in means "no image", so it never reaches the page. What is
        // drawn in its place is then keep_image_space's call: off, the row carries no thumbnail
        // at all, which is what asking for no reserved space means.
        const real = isPlaceholderImage(found) ? '' : found;
        const image = !real && keep_image_space && default_image ? default_image : real;
        if (image) {
          const img = el('img', 'article-image');
          img.src = image;
          img.alt = '';
          img.referrerPolicy = 'no-referrer';
          img.style.cssText = imageBox;
          img.addEventListener('error', () => {
            if (keep_image_space) img.style.visibility = 'hidden';
            else img.style.display = 'none';
          });
          imageNode = img;
        } else if (keep_image_space) {
          const placeholder = document.createElement('div');
          placeholder.style.cssText = imageBox + (imageTop ? '' : 'flex-shrink:0;');
          imageNode = placeholder;
        }
        // Left of the text, the image is a sibling of the content column; on top it belongs
        // inside that column, so that it lines up with the title rather than with the row.
        if (imageNode && !imageTop) row.appendChild(imageNode);
      }

      const content = el('div', 'article-content');

      const titleEl = el('div', 'article-title', title);
      titleEl.style.fontSize = `${titleSize}px`;
      titleEl.style.color = (link && this._isVisited(link)) ? 'var(--disabled-text-color)' : titleColor;
      content.appendChild(titleEl);

      if (show_source || show_domain || show_date) {
        // Collect the parts first, so separators only ever sit between two of them.
        const parts = [];
        if (show_source) {
          const src = el('span', 'article-source', String(a._sourceName ?? ''));
          src.style.color = sanitizeCssColor(a._sourceColor, 'var(--primary-color)');
          parts.push(src);
        }
        if (show_domain) {
          const domain = hostnameFromUrl(a.link);
          if (domain) {
            const badge = el('span', 'article-domain', domain);
            badge.style.setProperty('--domain-hue', String(domainHue(domain)));
            parts.push(badge);
          }
        }
        if (show_date && pubDate) parts.push(el('span', '', this._formatDate(pubDate)));
        if (parts.length) {
          const meta = el('div', 'article-meta');
          parts.forEach((part, i) => {
            if (i > 0) meta.appendChild(el('span', 'article-meta-separator', '·'));
            meta.appendChild(part);
          });
          content.appendChild(meta);
        }
      }

      if (imageNode && imageTop) {
        imageNode.classList.add('image-top');
        content.appendChild(imageNode);
      }

      if (show_description && desc) {
        const descEl = el('div', 'article-description', desc);
        descEl.style.fontSize = `${descSize}px`;
        descEl.style.color = descColor;
        if (descLines > 0) {
          descEl.classList.add('clamped');
          descEl.style.webkitLineClamp = String(descLines);
          this._fullDescriptions.set(descEl, desc);
        }
        content.appendChild(descEl);
      }

      row.appendChild(content);

      // Discarding an article only means something where read articles are hidden: without
      // hide_visited a cross would grey the title out and leave the row in place.
      if (hide_visited && link) {
        const dismiss = el('button', 'article-dismiss', '\u2715');
        dismiss.type = 'button';
        // A control with no text needs a name of its own for screen readers.
        dismiss.setAttribute('aria-label', t.dismiss);
        dismiss.title = t.dismiss;
        row.appendChild(dismiss);
        // Keeps the first line of the title clear of the button, which is out of the flow.
        row.classList.add('has-dismiss');
      }

      frag.appendChild(row);
    });
    return frag;
  }

  _handleLinkClick(url) {
    if (window.externalApp?.openExternalUrl) {
      window.externalApp.openExternalUrl(url);
      return;
    }
    const w = Math.min(window.screen.width, 520);
    const h = Math.min(window.screen.height, 900);
    const left = Math.round((window.screen.width - w) / 2);
    const top  = Math.round((window.screen.height - h) / 2);
    window.open(
      url, 'rss_article',
      `width=${w},height=${h},left=${left},top=${top},` +
      'toolbar=no,menubar=no,scrollbars=yes,resizable=yes'
    );
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        .card-body { padding: 12px 16px; }
        .card-title { font-size: 24px; font-weight: 400; margin-bottom: 8px; }
        .scroll-container { overflow-y: scroll; overflow-x: hidden; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; touch-action: pan-y; scrollbar-width: thin; scrollbar-color: var(--divider-color) transparent; }
        .visited-toggle { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 6px; }
        .visited-toggle button { font: inherit; color: var(--primary-color); background: none; border: none; padding: 0; cursor: pointer; text-decoration: underline; }
        .no-articles { padding: 20px; color: var(--secondary-text-color); text-align: center; }
        .article-row { position: relative; display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--divider-color); cursor: pointer; -webkit-tap-highlight-color: transparent; }
        /* Anchored to the row rather than to the text, so it lands in the same place whether
           the image sits in a left column or above the description. The padding gives it a
           touch target of 32px while the cross itself stays small. */
        .article-dismiss { position: absolute; top: 4px; right: 0; width: 32px; height: 32px; padding: 0;
          font: inherit; font-size: 14px; line-height: 1; color: var(--secondary-text-color);
          background: none; border: none; border-radius: 50%; cursor: pointer; }
        .article-dismiss:hover { color: var(--primary-text-color); background: var(--divider-color); }
        .article-row.has-dismiss .article-title { padding-right: 36px; }
        /* Without a pointer there is no hover to reveal it, so it stays on screen. */
        @media (hover: none) { .article-dismiss { opacity: 1; } }
        @media (hover: hover) {
          .article-dismiss { opacity: 0; transition: opacity 0.15s; }
          .article-row:hover .article-dismiss, .article-dismiss:focus-visible { opacity: 1; }
        }
        .article-content { flex: 1; min-width: 0; text-align: left; }
        .article-title { font-weight: 600; line-height: 1.4; white-space: normal; word-break: break-word; margin-bottom: 4px; }
        .article-meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 4px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
        .article-source { font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; }
        .article-meta-separator { opacity: 0.4; }
        /* oklch() keeps perceived lightness constant across hues, which hsl() does not:
           at a fixed hsl lightness a yellow-green badge is far paler than a blue one.
           Blending with the theme's own text colour then keeps it readable on light and
           dark themes alike, without guessing which is active — HA themes do not follow
           prefers-color-scheme. Lightness, chroma and blend ratio were calibrated over
           24 hues on light, dark and grey cards for the most saturated badge that still
           clears 4.5:1 everywhere (worst case 4.95:1). The hsl() lines are fallbacks for
           engines lacking either function. */
        .article-domain { font-weight: 600; padding: 1px 7px; border-radius: 999px; line-height: 1.6;
          color: hsl(var(--domain-hue, 0) 65% 40%);
          color: color-mix(in srgb, oklch(0.58 0.22 var(--domain-hue, 0)) 65%, var(--primary-text-color));
          background: hsl(var(--domain-hue, 0) 70% 50% / 0.16);
          background: oklch(0.58 0.22 var(--domain-hue, 0) / 0.16); }
        .article-description { line-height: 1.4; white-space: normal; word-break: break-word; }
        .article-description.clamped { display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
        .article-image { object-fit: cover; flex-shrink: 0; }
        .article-image.image-top, .article-content > div.image-top { display: block; margin: 10px 0; }
        .diagnostics-panel { background: var(--error-color, #ffcccc); padding: 12px; margin-bottom: 8px; border-radius: 4px; }
        .diagnostics-panel ul { margin: 8px 0; padding-left: 20px; }
      </style>
      <ha-card>
        <div class="card-body">
          <div class="card-title"></div>
          <div class="diagnostics"></div>
          <div class="visited-toggle"></div>
          <div class="scroll-container"><div class="article-list"></div></div>
        </div>
      </ha-card>`;
    this._initialized = true;
    this._observeResize();
  }

  /**
   * Re-fits descriptions when the card is resized: a narrower card wraps the
   * text over more lines, so a description that fitted may start overflowing.
   * _render() replaces the shadow DOM, so the old observer is dropped first.
   */
  _observeResize() {
    this._resizeObserver?.disconnect();
    const scrollEl = this.shadowRoot.querySelector('.scroll-container');
    if (!scrollEl || typeof ResizeObserver === 'undefined') return;
    this._resizeObserver = new ResizeObserver(() => this._fitDescriptions());
    this._resizeObserver.observe(scrollEl);
  }

  /**
   * Trims clamped descriptions so they end with our own ellipsis inside the visible
   * lines. Descriptions shorter than the clamp are left untouched, so nothing is cut
   * that would have fitted. Overflow can only be measured once the nodes are laid
   * out, hence the animation frame; text changes here never alter the node's own box,
   * so this cannot feed back into the resize observer. In the event the passes run out,
   * -webkit-line-clamp still cuts the text and appends its own ellipsis, so the reader is
   * never left thinking the description ended there.
   */
  _fitDescriptions() {
    if (!this.shadowRoot) return;
    cancelAnimationFrame(this._fitFrame);
    this._fitFrame = requestAnimationFrame(() => {
      this.shadowRoot.querySelectorAll('.article-description.clamped').forEach(node => {
        const full = this._fullDescriptions.get(node);
        if (full === undefined) return;
        node.textContent = full;
        if (node.scrollHeight <= node.clientHeight + 1) return;
        // -webkit-line-clamp cuts the text itself and appends its own ellipsis, glued to the
        // last word with no space. Shorten the text so our own ellipsis lands inside the clamp
        // instead, keeping the non-breaking space in front of it.
        const base = full.endsWith(ELLIPSIS) ? full.slice(0, -ELLIPSIS.length) : full;
        // Rendered height is near enough linear in the character count for the first guess to
        // land, so this normally costs one extra measure rather than a binary search.
        let len = Math.floor(base.length * (node.clientHeight / node.scrollHeight) * 0.98);
        for (let pass = 0; pass < 5 && len > 0; pass++) {
          node.textContent = base.slice(0, len).replace(/\s+\S*$/, '') + ELLIPSIS;
          if (node.scrollHeight <= node.clientHeight + 1) break;
          len = Math.floor(len * 0.94);
        }
      });
    });
  }

  disconnectedCallback() {
    this._resizeObserver?.disconnect();
    cancelAnimationFrame(this._fitFrame);
  }

  _updateContent(articles, issues) {
    if (!this._initialized) this._render();
    const { title, card_height, card_title_color } = this._config;

    const titleEl = this.shadowRoot.querySelector('.card-title');
    if (titleEl) {
      titleEl.style.display = title ? '' : 'none';
      titleEl.style.color = sanitizeCssColor(card_title_color, 'var(--primary-text-color)');
      titleEl.textContent = title || '';
    }

    const scrollEl = this.shadowRoot.querySelector('.scroll-container');
    if (scrollEl) scrollEl.style.height = (parseInt(card_height, 10) || 400) + 'px';

    this._renderVisitedToggle();

    const diagEl = this.shadowRoot.querySelector('.diagnostics');
    const artEl = this.shadowRoot.querySelector('.article-list');
    if (diagEl) {
      const panel = issues.length > 0 ? this._renderDiagnostics(issues) : null;
      diagEl.replaceChildren(...(panel ? [panel] : []));
    }
    if (artEl) {
      artEl.replaceChildren(this._buildArticleNodes(articles));
      artEl.querySelectorAll('.article-row').forEach(row => {
        row.addEventListener('click', () => {
          const url = sanitizeUrl(row.dataset.rssUrl);
          if (!url) return;
          this._markVisited(url);
          const rowTitle = row.querySelector('.article-title');
          if (rowTitle) rowTitle.style.color = 'var(--disabled-text-color)';
          this._handleLinkClick(url);
        });
      });
      artEl.querySelectorAll('.article-dismiss').forEach(btn => {
        btn.addEventListener('click', ev => {
          // The whole row opens the article, and the button sits inside it.
          ev.stopPropagation();
          const url = sanitizeUrl(btn.closest('.article-row')?.dataset.rssUrl);
          if (!url) return;
          this._markVisited(url);
          // Unlike the opening click, whose effect is deferred so a row never vanishes under
          // the finger, making the article go away is the whole point here.
          const scroll = this.shadowRoot.querySelector('.scroll-container');
          const offset = scroll ? scroll.scrollTop : 0;
          this._updateContent(this._getArticles(), JSON.parse(this._lastIssuesJson || '[]'));
          // The list is rebuilt from scratch, which would otherwise send the view back to
          // the top of a feed the reader had scrolled into.
          if (scroll) scroll.scrollTop = offset;
        });
      });
      this._fitDescriptions();
    }
  }

  /**
   * Line above the list: how many read articles are hidden, and the switch to show them.
   * The count is what makes it useful — without it nothing says anything is missing.
   */
  _renderVisitedToggle() {
    const box = this.shadowRoot.querySelector('.visited-toggle');
    if (!box) return;
    const visited = this._visitedCount || 0;
    const unread = this._unreadCount || 0;
    // Tied to the option: a card that never asked to hide anything should not sprout a line of
    // its own. Once enabled the line stays, even with nothing hidden yet, so the unread count is
    // always on show and the button still switches both ways.
    if (!this._config.hide_visited) {
      box.replaceChildren();
      box.style.display = 'none';
      return;
    }
    const t = this._t();
    box.style.display = '';
    // French takes the singular at 0 as well as 1; the other locales spell both alike here.
    const say = (one, many, n) => String(n <= 1 ? one : many).replace('{n}', n);
    const parts = [el('span', '', say(t.unread_one, t.unread, unread))];
    // No button while nothing would come back from pressing it.
    if (visited) {
      const btn = el('button', '', this._showVisited ? t.hide_read : t.show_read);
      btn.addEventListener('click', () => {
        this._showVisited = !this._showVisited;
        // `set hass` would be swallowed by the stateKey guard, so re-render directly.
        this._updateContent(this._getArticles(), JSON.parse(this._lastIssuesJson || '[]'));
      });
      if (!this._showVisited) parts.push(el('span', '', say(t.hidden_read_one, t.hidden_read, visited)));
      parts.push(btn);
    }
    const line = [];
    parts.forEach((node, i) => {
      if (i > 0) line.push(el('span', '', ' · '));
      line.push(node);
    });
    box.replaceChildren(...line);
  }

  getCardSize() { return 5; }
}

// ─── Editor ───────────────────────────────────────────────────────────────────
class FeedparserRssNewsCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._rendered = false;
  }

  setConfig(config) {
    const prevSourceCount = (this._config.sources || []).length;
    this._config = { ...config };
    if (!this._rendered) {
      this._renderShell();
    } else {
      this._syncFields();
      const newSourceCount = (this._config.sources || []).length;
      if (newSourceCount !== prevSourceCount) {
        this._renderSources();
      }
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this._renderShell();
  }

  _getLang() {
    try {
      const haLang = this._hass?.locale?.language || this._hass?.language || 'en';
      return haLang.split('-')[0].toLowerCase();
    } catch { return 'en'; }
  }

  _t() { return getLocale(this._getLang()); }

  _renderShell() {
    this._rendered = true;
    const c = this._config || {};
    const t = this._t();

    this.shadowRoot.innerHTML = `
      <style>
        .editor { padding: 12px; }
        .editor label { display: block; font-size: 12px; color: var(--secondary-text-color); margin: 10px 0 4px; }
        .editor select { width: 100%; padding: 4px 8px; box-sizing: border-box; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--card-background-color); color: var(--primary-text-color); }
        .editor input[type=text], .editor input[type=number] { width: 100%; padding: 4px 8px; box-sizing: border-box; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--card-background-color); color: var(--primary-text-color); }
        .source-row { display: flex; gap: 8px; align-items: center; margin-bottom: 6px; }
        .source-row input { width: auto !important; }
        .source-entity-input { flex: 1; min-width: 0; }
        .source-name-input { width: 80px; flex-shrink: 0; }
        .btn-add { margin-top: 6px; padding: 4px 12px; cursor: pointer; background: var(--primary-color); color: white; border: none; border-radius: 4px; }
        .btn-delete { padding: 2px 8px; cursor: pointer; border: 1px solid var(--divider-color); border-radius: 4px; background: transparent; color: var(--primary-text-color); }
        .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--divider-color); }
        .toggle-row label { margin: 0; font-size: 13px; color: var(--primary-text-color); }
        .toggle { position: relative; width: 36px; height: 20px; flex-shrink: 0; }
        .toggle input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; inset: 0; background: var(--disabled-color, #ccc); border-radius: 20px; transition: .2s; }
        .slider:before { content: ''; position: absolute; height: 14px; width: 14px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: .2s; }
        input:checked + .slider { background: var(--primary-color); }
        input:checked + .slider:before { transform: translateX(16px); }
        .color-field { display: flex; gap: 8px; align-items: center; }
        .color-swatch-label { position: relative; width: 32px; height: 28px; flex-shrink: 0; cursor: pointer; border-radius: 4px; overflow: hidden; border: 1px solid var(--divider-color); }
        .color-swatch { position: absolute; inset: 0; pointer-events: none; }
        .color-picker-input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; }
        .toggle-section { margin-top: 12px; }
        .color-hint { opacity: 0.6; }
      </style>
      <div class="editor">
        <label>${t.ed.card_title}</label>
        <input type="text" id="ed-title" value="${c.title || ''}"/>

        <label>${t.ed.sources}</label>
        <div id="ed-sources"></div>
        <button class="btn-add" id="ed-add">${t.ed.add_source}</button>

        <label>${t.ed.exclude_categories}</label>
        <input type="text" id="ed-exclude-cats" placeholder="e.g. politics, sports" value="${c.exclude_categories || ''}"/>

        <label>${t.ed.max_articles}</label>
        <input type="number" id="ed-max" min="1" max="50" value="${c.max_articles || 10}"/>

        <label>${t.ed.card_height}</label>
        <input type="number" id="ed-height" min="100" max="2000" value="${c.card_height || 400}"/>

        <label>${t.ed.image_position}</label>
        <select id="ed-imgpos">
          <option value="left" ${c.image_position !== 'top' ? 'selected' : ''}>${t.ed.pos_left}</option>
          <option value="top" ${c.image_position === 'top' ? 'selected' : ''}>${t.ed.pos_top}</option>
        </select>

        <label>${t.ed.default_image}</label>
        <input type="text" id="ed-defaultimg" placeholder="/local/feedparser-placeholder.svg" value="${c.default_image || ''}"/>

        <label>${t.ed.img_radius}</label>
        <input type="number" id="ed-imgradius" min="0" max="40" value="${c.image_radius === undefined ? 6 : c.image_radius}"/>

        <label>${t.ed.img_width}</label>
        <input type="number" id="ed-imgw" min="50" max="300" value="${c.image_width || 100}"/>

        <label>${t.ed.img_height}</label>
        <input type="number" id="ed-imgh" min="50" max="300" value="${c.image_height || 70}"/>

        <label>${t.ed.title_size}</label>
        <input type="number" id="ed-titlesize" min="10" max="30" value="${c.title_font_size || 15}"/>

        <label>${t.ed.desc_size}</label>
        <input type="number" id="ed-descsize" min="10" max="24" value="${c.desc_font_size || 14}"/>

        <label>${t.ed.desc_length}</label>
        <input type="number" id="ed-desclen" min="0" max="2000" value="${c.max_description_length || 0}"/>

        <label>${t.ed.desc_lines}</label>
        <input type="number" id="ed-desclines" min="0" max="20" value="${c.description_max_lines || 0}"/>

        <label>${t.ed.card_title_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-card-title-color" class="color-swatch" style="background:${c.card_title_color || 'transparent'};${!c.card_title_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-card-title-color" class="color-picker-input" value="${c.card_title_color || '#ffffff'}"/>
          </label>
          <input type="text" id="ed-card-title-color-text" placeholder="e.g. #ff0000 or empty" value="${c.card_title_color || ''}"/>
        </div>

        <label>${t.ed.article_title_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-article-title-color" class="color-swatch" style="background:${c.article_title_color || 'transparent'};${!c.article_title_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-article-title-color" class="color-picker-input" value="${c.article_title_color || '#ffffff'}"/>
          </label>
          <input type="text" id="ed-article-title-color-text" placeholder="e.g. #ff0000 or empty" value="${c.article_title_color || ''}"/>
        </div>

        <label>${t.ed.desc_color} <small class="color-hint">(${t.ed.color_hint})</small></label>
        <div class="color-field">
          <label class="color-swatch-label">
            <div id="prev-desc-color" class="color-swatch" style="background:${c.desc_color || 'transparent'};${!c.desc_color ? 'background-image:repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%);background-size:6px 6px;' : ''}"></div>
            <input type="color" id="ed-desc-color" class="color-picker-input" value="${c.desc_color || '#ffffff'}"/>
          </label>
          <input type="text" id="ed-desc-color-text" placeholder="e.g. #ff0000 or empty" value="${c.desc_color || ''}"/>
        </div>

        <div class="toggle-section">
          <div class="toggle-row">
            <label for="tog-source">${t.ed.show_source}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-source" ${c.show_source !== false ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-oldest">${t.ed.oldest_first}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-oldest" ${c.oldest_first === true ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-hide-visited">${t.ed.hide_visited}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-hide-visited" ${c.hide_visited === true ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-domain">${t.ed.show_domain}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-domain" ${c.show_domain === true ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-date">${t.ed.show_date}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-date" ${c.show_date !== false ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-desc">${t.ed.show_desc}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-desc" ${c.show_description !== false ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row">
            <label for="tog-images">${t.ed.show_images}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-images" ${c.show_images !== false ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-row" id="row-image-space" style="${c.show_images !== false ? '' : 'display:none;'}">
            <label for="tog-image-space">${t.ed.keep_image_space}</label>
            <label class="toggle">
              <input type="checkbox" id="tog-image-space" ${c.keep_image_space === true ? 'checked' : ''}/>
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>`;

    this._renderSources();
    this._attachListeners();
    requestAnimationFrame(() => this._syncColorPreviews());
  }

  _syncColorPreviews() {
    const card = this.closest('ha-card') || document.querySelector('feedparser-rss-news-card');
    const syncPreview = (previewId, configVal, cssVar) => {
      const preview = this.shadowRoot.querySelector(previewId);
      if (!preview) return;
      if (configVal) {
        preview.style.backgroundImage = 'none';
        preview.style.background = configVal;
      } else {
        if (card) {
          const computed = getComputedStyle(card).getPropertyValue(cssVar).trim();
          if (computed) {
            preview.style.backgroundImage = 'none';
            preview.style.background = computed;
            return;
          }
        }
        preview.style.background = 'transparent';
        preview.style.backgroundImage = 'repeating-linear-gradient(45deg,#ccc 0,#ccc 2px,transparent 0,transparent 50%)';
        preview.style.backgroundSize = '6px 6px';
      }
    };
    const c = this._config || {};
    syncPreview('#prev-card-title-color',    c.card_title_color,    '--primary-text-color');
    syncPreview('#prev-article-title-color', c.article_title_color, '--primary-text-color');
    syncPreview('#prev-desc-color',          c.desc_color,          '--secondary-text-color');
  }

  _renderSources() {
    const container = this.shadowRoot.querySelector('#ed-sources');
    if (!container) return;
    const sources = this._config.sources || [];
    container.innerHTML = sources.map((s, i) => `
      <div class="source-row" data-idx="${i}">
        <input type="text" class="source-entity-input" placeholder="sensor.feedparser_news" data-field="entity" value="${s.entity || ''}"/>
        <input type="text" class="source-name-input" placeholder="Name" data-field="name" value="${s.name || ''}"/>
        <label class="color-swatch-label">
          <div class="color-swatch color-preview-${i}" style="background:${s.color || '#0077cc'};"></div>
          <input type="color" class="color-picker-input" data-field="color" value="${s.color || '#0077cc'}"/>
        </label>
        <button class="btn-delete" data-idx="${i}">✕</button>
      </div>`).join('');

    container.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        const row = input.closest('.source-row');
        const idx = parseInt(row.dataset.idx);
        const field = input.dataset.field;
        const sources = [...(this._config.sources || [])];
        sources[idx] = { ...sources[idx], [field]: input.value };
        this._upd('sources', sources);
        if (field === 'color') {
          const preview = row.querySelector('.color-preview-' + idx);
          if (preview) preview.style.background = input.value;
        }
      });
    });

    container.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const sources = (this._config.sources || []).filter((_, i) => i !== idx);
        this._upd('sources', sources);
        this._renderSources();
      });
    });
  }

  _attachListeners() {
    const bind = (id, key, transform) => {
      const el = this.shadowRoot.querySelector(id);
      if (!el) return;
      el.addEventListener('input', e => this._upd(key, transform ? transform(e.target.value) : e.target.value));
    };
    const bindChk = (id, key) => {
      const el = this.shadowRoot.querySelector(id);
      if (!el) return;
      el.addEventListener('change', e => this._upd(key, e.target.checked));
    };

    bind('#ed-title',    'title');
    bind('#ed-exclude-cats', 'exclude_categories');
    bind('#ed-max',      'max_articles',    v => parseInt(v) || 10);
    bind('#ed-height',   'card_height',     v => parseInt(v) || 400);
    bind('#ed-imgpos',   'image_position',  v => v === 'top' ? 'top' : 'left');
    bind('#ed-defaultimg','default_image');
    bind('#ed-imgradius','image_radius',    v => { const n = parseInt(v, 10); return Number.isFinite(n) && n >= 0 ? n : 6; });
    bind('#ed-imgw',     'image_width',     v => parseInt(v) || 100);
    bind('#ed-imgh',     'image_height',    v => parseInt(v) || 70);
    bind('#ed-titlesize','title_font_size', v => parseInt(v) || 15);
    bind('#ed-descsize', 'desc_font_size',  v => parseInt(v) || 14);
    bind('#ed-desclen',  'max_description_length', v => parseInt(v) || 0);
    bind('#ed-desclines','description_max_lines',  v => parseInt(v) || 0);
    bind('#ed-card-title-color-text',    'card_title_color');
    bind('#ed-article-title-color-text', 'article_title_color');
    bind('#ed-desc-color-text',          'desc_color');

    const bindColorPicker = (pickerId, textId, previewId, key) => {
      const picker = this.shadowRoot.querySelector(pickerId);
      const text   = this.shadowRoot.querySelector(textId);
      const preview = this.shadowRoot.querySelector(previewId);
      if (!picker) return;
      picker.addEventListener('input', e => {
        const val = e.target.value;
        if (text) text.value = val;
        if (preview) preview.style.background = val;
        this._upd(key, val);
      });
      if (text) {
        text.addEventListener('input', e => {
          const val = e.target.value;
          if (preview && (val === '' || /^#[0-9a-fA-F]{3,6}$/.test(val))) {
            preview.style.background = val || '#ffffff';
            if (picker) picker.value = val || '#ffffff';
          }
        });
      }
    };
    bindColorPicker('#ed-card-title-color',    '#ed-card-title-color-text',    '#prev-card-title-color',    'card_title_color');
    bindColorPicker('#ed-article-title-color', '#ed-article-title-color-text', '#prev-article-title-color', 'article_title_color');
    bindColorPicker('#ed-desc-color',          '#ed-desc-color-text',          '#prev-desc-color',          'desc_color');

    bindChk('#tog-source', 'show_source');
    bindChk('#tog-domain', 'show_domain');
    bindChk('#tog-hide-visited', 'hide_visited');
    bindChk('#tog-oldest', 'oldest_first');
    bindChk('#tog-date',   'show_date');
    bindChk('#tog-desc',   'show_description');
    bindChk('#tog-images', 'show_images');
    bindChk('#tog-image-space', 'keep_image_space');

    const togImages = this.shadowRoot.querySelector('#tog-images');
    const rowImageSpace = this.shadowRoot.querySelector('#row-image-space');
    if (togImages && rowImageSpace) {
      togImages.addEventListener('change', e => {
        rowImageSpace.style.display = e.target.checked ? '' : 'none';
      });
    }

    const addBtn = this.shadowRoot.querySelector('#ed-add');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const sources = [...(this._config.sources || []), { entity: '', name: '', color: '#0077cc' }];
        this._upd('sources', sources);
        this._renderSources();
      });
    }
  }

  _syncFields() {
    const c = this._config;
    const set = (id, val) => { const el = this.shadowRoot.querySelector(id); if (el && document.activeElement !== el) el.value = val ?? ''; };
    const setChk = (id, val) => { const el = this.shadowRoot.querySelector(id); if (el) el.checked = !!val; };
    
    set('#ed-title',     c.title);
    set('#ed-exclude-cats', c.exclude_categories);
    set('#ed-max',       c.max_articles);
    set('#ed-height',    c.card_height);
    set('#ed-imgpos',    c.image_position || 'left');
    set('#ed-defaultimg', c.default_image);
    set('#ed-imgradius', c.image_radius === undefined ? 6 : c.image_radius);
    set('#ed-imgw',      c.image_width);
    set('#ed-imgh',      c.image_height);
    set('#ed-titlesize', c.title_font_size);
    set('#ed-descsize',  c.desc_font_size);
    set('#ed-desclen',   c.max_description_length);
    set('#ed-desclines', c.description_max_lines);
    set('#ed-card-title-color-text',    c.card_title_color);
    set('#ed-article-title-color-text', c.article_title_color);
    set('#ed-desc-color-text',          c.desc_color);
    setChk('#tog-source', c.show_source !== false);
    setChk('#tog-domain', c.show_domain === true);
    setChk('#tog-hide-visited', c.hide_visited === true);
    setChk('#tog-oldest', c.oldest_first === true);
    setChk('#tog-date',   c.show_date !== false);
    setChk('#tog-desc',   c.show_description !== false);
    setChk('#tog-images', c.show_images !== false);
    setChk('#tog-image-space', c.keep_image_space === true);

    const rowImageSpace = this.shadowRoot.querySelector('#row-image-space');
    if (rowImageSpace) {
      rowImageSpace.style.display = c.show_images !== false ? '' : 'none';
    }
  }

  _upd(key, value) {
    this._config = { ...this._config, [key]: value };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
  }
}

customElements.define('feedparser-rss-news-card', FeedparserRssNewsCard);
customElements.define('feedparser-rss-news-card-editor', FeedparserRssNewsCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'feedparser-rss-news-card',
  name: 'Feedparser RSS News Card',
  description: 'Scrollable RSS news card specifically mapped for the feedparser integration.',
  preview: true,
});
