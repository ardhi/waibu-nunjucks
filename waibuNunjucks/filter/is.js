function is (env, value, method) {
  const { isSet } = this.app.lib.aneka
  const { pascalCase } = this.app.lib.aneka
  method = `is${pascalCase(method)}`
  if (method === 'isSet') return isSet(value)
  return this.app.lib._[method](value)
}

export default is
