function filter (env, obj, condition) {
  const { filter } = this.app.lib._
  return filter(obj, condition)
}

export default filter
