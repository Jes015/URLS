import { FC } from "react"

export interface PramsProps {
  slug: string
}

export interface PageProps {
    params: PramsProps
    searchParams: Record<string, string>
  }
  
  export type PageType = FC<PageProps>