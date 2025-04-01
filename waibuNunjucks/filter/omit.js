function omit (env, obj, params = []) {
  const { omit } = this.lib._
  return omit(obj, params)
}

export default omit
