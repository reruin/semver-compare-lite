// https://semver.org/

const compareNumber = (a: string, b: string) => {
  let na = Number(a)
  let nb = Number(b)
  if (na > nb) return 1
  if (nb > na) return -1
  if (!isNaN(na) && isNaN(nb)) return 1
  if (isNaN(na) && !isNaN(nb)) return -1
}

export const semverCompare = (a: string, b: string) => {
  let [a_main, a_pre] = a.split('+')[0].split('-').map(i => i.split('.'))
  let [b_main, b_pre] = b.split('+')[0].split('-').map(i => i.split('.'))

  for (let i = 0; i < 3; i++) {
    let res = compareNumber(a_main[i], b_main[i])
    if (res !== undefined) return res
  }

  if (a_pre && b_pre) {
    let len = Math.max(a_pre.length, b_pre.length)
    for (let i = 0; i < len; i++) {
      let sa = a_pre[i] || '', sb = b_pre[i] || ''
      // is number
      if (/^\d+$/.test(sa) && /^\d+$/.test(sb)) {
        let res = compareNumber(sa[i], sb[i])
        if (res !== undefined) return res
      } else {
        if (sa > sb) return 1
        else if (sa < sb) return -1
      }
    }
    return 0
  }

  return !!a_pre ? -1 : !!b_pre ? 1 : 0
}