export const compose = (...funcs: Function[]) => {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((acc, cur) => (...args: any[]) => acc(cur(...args)))
}

export default compose
