function map (env, obj = [], handler) {
  const { map } = this.lib._
  return map(obj, handler)
}

export default map
