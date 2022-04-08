const compareVer = require('./')
const assert = (say, when) => {
  const actions = {
    true: v => Promise.resolve(v === true),
    false: v => Promise.resolve(v === false),
    is: (v, val) => Promise.resolve(v === val)
  }

  when(actions).then(res => {
    console.log(`[${res ? 'o' : 'x'}] ` + say)
  })
}
const versions = [
  '1.0.0-alpha',
  '1.0.0-beta',
  '1.0.0-beta.11',
  '1.0.0-rc.1',
  '1.0.0-alpha.beta',
  '1.0.0',
  '1.0.2',
  '1.0.11',
  '1.2.3',
  '1.0.0-x.7.z.92',
  '1.0.0-beta.2',
  '1.0.0-alpha.1',
  '1.0.0+20130313144700',
  '1.0.0-beta+exp.sha.5114f85',
];

const pairs = [
  ['1.0.0-alpha.1', '1.0.0-alpha.beta', -1],
  ['1.0.0+20220101', '1.0.0+exp.sha.5114f85', 0],
  ['1.0.0', '1.0.0-alpha', 1],
]

pairs.forEach((i) => {
  assert(`${i[0]} ${i[2] == 1 ? '>' : i[2] == -1 ? '<' : '=='} ${i[1]}`, t => t.true(compareVer(i[0], i[1]) == i[2]))
})

console.log('\nSORT:\n' + versions.sort(compareVer).join('\n'))
