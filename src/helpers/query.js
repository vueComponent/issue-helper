import qs from 'qs'

export function getQuery () {
  return qs.parse(window.location.search.slice(1))
}

export function updateQuery (query) {
  const { origin, pathname} = window.location
  const newUrl = origin + pathname + '?' + qs.stringify(
    { ...getQuery(), ...query },
    { encode: false }
  )
  window.history.pushState({
    path: newUrl,
  }, '', newUrl)
}
