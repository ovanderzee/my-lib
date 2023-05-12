// babel.config.js
export function (api) {
  api.cache(true)

  const presets = [
  	["@babel/preset-env", {"targets": "> 0.25%, not dead"}],
  	"@babel/preset-typescript"
  ]

  return {
    presets
  }
}
