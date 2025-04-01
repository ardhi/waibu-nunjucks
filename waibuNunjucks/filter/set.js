function set (env, obj = {}, key, def) {
  const { set } = this.lib._
  return set(obj, key, def)
}

export default set
