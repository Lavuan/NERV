<p align="center">
  <img src="favicon.ico">
</p>

<h1 align="center"><strong>startpage</strong>

<p align="center">
  <a href="https://github.com/Alededorigo/startpage/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/alededorigo/kanji?color=%23cd58f4&style=flat">
  </a>
  <a href="https://github.com/Alededorigo/startpage/releases">
    <img src="https://img.shields.io/github/v/release/alededorigo/kanji?color=ee4f84&include_prereleases&style=flat">
  </a>
  <a href="https://github.com/Alededorigo/startpage/commits/main">
    <img src="https://img.shields.io/github/last-commit/alededorigo/kanji?color=%231ce590&style=flat">
  </a>
</p>
</h1>

<br />

# **A startpage for the browser**

## Release v3.1 <img alt="" align="right" src="https://img.shields.io/github/repo-size/alededorigo/kanji?color=%2358d0f4&style=flat"/>

[**Changelog**](https://github.com/Alededorigo/startpage/blob/main/changelog.md) <kbd>v3.1</kbd>:

- [[added](https://github.com/Alededorigo/startpage/commit/23e37f84a1d4cc6f55be543789ffb0801ad145f2)] Chrome theme-color meta tag
- [added] `package.sh` for extensions
- [improved] input box style
- [improved] light instead of dark in CSS
- [fixed] font issues for greetings
- [fixed] removed useless metadata
- [fixed] gap between image and links
- [fixed] font issues
- [[fixed](https://github.com/Alededorigo/startpage/commit/e0c797d3199b7ad878bc7585cc06ada79cb1f8de)] write `/` in input box after focused

## Changing links:

```html
<div class="column">
  <p>SECTION TITLE</p>
  <a class="link" href="WEBSITE LINK">WEBSITE NAME</a>
  <!-- To make a link opening in a new tab, add 'target="_BLANK"' inside the link tag: -->
  <a target="_BLANK"></a>
</div>
```

```html
<div>: column container
├── <p>: section title
│    ├── <a>: bookmark
│    └── <a>: bookmark
└── <p>: section title
     ├── <a>: bookmark
     └── <a>: bookmark
</div>
```

## Keybindings:

| Key        | Function                                  |
| ---------- | ----------------------------------------- |
| `ctrl + m` | Mode - switch between light and dark mode |
| `/`        | Search - focus the search box             |

## Credits:

- [Font for greetings](https://www.1001fonts.com/electroharmonix-font.html)
- [Image on left](https://wallpapercave.com/mt-fuji-wallpaper)
