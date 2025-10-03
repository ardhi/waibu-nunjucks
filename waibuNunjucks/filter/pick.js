function pick (env, obj, params = []) {
  const { pick } = this.app.lib._
  return pick(obj, params)
}

export default pick
