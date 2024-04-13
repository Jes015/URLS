import { FC } from "react"

export interface PageProps {
    params: string
    searchParams: Record<string, string>
  }
  
  export type PageType = FC<PageProps>