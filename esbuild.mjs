import * as esbuild from 'esbuild'

let notifyPlugin = {
  name: 'notify-plugin',
  setup(build) {
    build.onEnd(result => {
      console.log(`Built with ${result.errors.length} errors`)
    })
  }
}

let ctx = await esbuild.context({
  entryPoints: ['app.tsx'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  minify: true,
  plugins: [notifyPlugin]
})

await ctx.watch()

console.log('Watching for changes...')