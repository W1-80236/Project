// const SERVER_URL = "http://localhost:9898"

import config from "../config"
export function createUrl(path) {
  return `${config.server}/${path}`
}

export function createError(error) {
  return { status: 'error', error }
}