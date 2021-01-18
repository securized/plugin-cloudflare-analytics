export default function (Vue, options, { head }) {
  head.script.push({
    src: 'https://static.cloudflareinsights.com/beacon.min.js',
    defer: true,
    'data-cf-beacon': JSON.stringify({ token: options.token }),
  })
}
