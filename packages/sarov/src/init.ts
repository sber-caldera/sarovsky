import { settings } from './settings'

export function init (options: Partial<typeof settings>) {
  settings.react = options.react
  settings.useState = options.useState
}
