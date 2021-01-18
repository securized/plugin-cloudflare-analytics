export default function (Vue, options, { head }) {
  if (process.env.NODE_ENV !== 'production') {
    // Only send hits on production builds
    return;
  }

  head.script.push({
    src: 'https://static.cloudflareinsights.com/beacon.min.js',
    defer: true,
    'data-cf-beacon': JSON.stringify({ token: options.token }),
  })
}
