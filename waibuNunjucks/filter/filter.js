function filter (env, obj, condition) {
  const { filter } = this.lib._
  return filter(obj, condition)
}

export default filter
