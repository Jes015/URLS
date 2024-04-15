export const getUrlsLink = (id: string) => {
    let currentUrl = location.origin + '/'
    currentUrl += id

    return currentUrl
}