function pick (env, obj, params = []) {
  const { pick } = this.lib._
  return pick(obj, params)
}

export default pick
