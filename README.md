# waibu-nunjucks

Plugin name: **waibuNunjucks**, alias: **wbnjk**

![GitHub package.json version](https://img.shields.io/github/package-json/v/ardhi/waibu-nunjucks) ![NPM Version](https://img.shields.io/npm/v/waibu-nunjucks)

> <br />**Attention**: I do NOT accept any pull request at the moment, thanks!<br /><br />

Multi Pages App (MPA)'s Nunjucks View Engine support for [Bajo](https://github.com/ardhi/bajo)'s Web Framework.

## Installation

Goto your ```<bajo-base-dir>``` and type:

```bash
$ npm install waibu-nunjucks
```

Now open your ```<bajo-data-dir>/config/.plugins``` and put ```waibu-nunjucks``` in it

## Hooks

- ```waibuNunjucks:afterBuildLocals (locals, req)```
- ```waibuNunjucks.<routeOpts.ns>:afterBuildLocals (locals, req)```


## License

[MIT](LICENSE)
