function getAssetUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

export { getAssetUrl }
