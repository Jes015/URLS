export interface Link {
    urlsid: string
    realurl:  string
    created_at: string
}

export interface CreateLinkDto extends Omit<Link, 'created_at'> {}

export type LinkArray = Link[]
