function find (env, obj, condition) {
  const { find } = this.app.lib._
  return find(obj, condition)
}

export default find
