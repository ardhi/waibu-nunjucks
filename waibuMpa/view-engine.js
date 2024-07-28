import loader from '../lib/engine/loader.js'
import extend from '../lib/engine/extend.js'

async function render (tplFile, params, reply) {
  await this.instance.render(tplFile, params)
}

async function renderString (text, params = {}, opts = {}) {
  await this.instance.renderString(text, params)
}

async function view (ctx) {
  await loader.call(this)
  for (const type of ['global', 'filter', 'extension']) {
    await extend.call(this, type)
  }

  return {
    name: 'nunjucks',
    fileExts: '.njk',
    render: render.bind(this),
    renderString: renderString.bind(this)
  }
}

export default view
