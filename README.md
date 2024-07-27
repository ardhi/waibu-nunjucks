# wakatobi-nunjucks

Plugin name: **wakatobiNunjucks**, alias: **wktbnunjucks**

![GitHub package.json version](https://img.shields.io/github/package-json/v/ardhi/wakatobi-nunjucks) ![NPM Version](https://img.shields.io/npm/v/wakatobi-nunjucks)

> <br />**Attention**: I do NOT accept any pull request at the moment, thanks!<br /><br />

Multi Pages App (MPA)'s Nunjucks View Engine support for [Bajo](https://github.com/ardhi/bajo)'s Web Framework.

## Installation

Goto your ```<bajo-base-dir>``` and type:

```bash
$ npm install wakatobi-nunjucks
```

Now open your ```<bajo-data-dir>/config/.plugins``` and put ```wakatobi-nunjucks``` in it

## Hooks

- ```bajoWebMpaNunjucks:afterBuildLocals (locals, req)```
- ```bajoWebMpaNunjucks.<routeOpts.ns>:afterBuildLocals (locals, req)```


## License

[MIT](LICENSE)
