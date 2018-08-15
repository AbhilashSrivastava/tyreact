export interface AppResponse {
  appName: string
  author: string
}

export interface AppStateInterface {
  appVersion: number
  response?: AppResponse
}