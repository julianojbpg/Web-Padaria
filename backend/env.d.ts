// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      DATABASE_URL:string
      SECRET_KEY: string
    }
  }
  