<p align="center">
  <img src="favicon.ico">
</p>

[Kanji](https://github.com/bbkrealm/Kanji)
  <a href="https://github.com/bbkrealm/startpage/blob/main/LICENSE">
    <img align="right" src="https://img.shields.io/github/license/bbkrealm/kanji?color=%23cd58f4&style=flat">
  </a>
  <a href="https://github.com/bbkrealm/startpage/releases">
    <img align="right" src="https://img.shields.io/github/v/release/bbkrealm/kanji?color=ee4f84&include_prereleases&style=flat">
  </a>
  <a href="https://github.com/bbkrealm/startpage/commits/main">
    <img align="right" src="https://img.shields.io/github/last-commit/bbkrealm/kanji?color=%231ce590&style=flat">


## Release v3.1 <img alt="" align="right" src="https://img.shields.io/github/repo-size/bbkrealm/kanji?color=%2358d0f4&style=flat"/>

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

- [Default font for greetings](https://www.1001fonts.com/electroharmonix-font.html)
- [The rest of newly added fonts](https://fonts.google.com/)
- [Default image on left](https://wallpapercave.com/mt-fuji-wallpaper)
