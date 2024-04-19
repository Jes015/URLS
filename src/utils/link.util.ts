export const getUrlsLink = (id: string) => {
    let currentUrl = location.origin + '/u/'
    currentUrl += id

    return currentUrl
}