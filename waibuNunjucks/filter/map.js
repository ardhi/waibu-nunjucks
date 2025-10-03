function map (env, obj = [], handler) {
  const { map } = this.app.lib._
  return map(obj, handler)
}

export default map
