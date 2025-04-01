function get (env, obj = {}, key, def) {
  const { get } = this.lib._
  return get(obj, key, def)
}

export default get
