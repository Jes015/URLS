export interface Link {
    urlsid: string
    realurl:  string
    created_at: string
}

export interface CreateLinkDto extends Omit<Link, 'created_at'> {
    user_id: string
}

export type LinkArray = Link[]
