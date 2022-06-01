// 紀錄google登入裝態
export function setGoogleState(response) {
    localStorage.setItem('googleState', response)
}

// 取得google登入裝態
export function getGoogleState() {
    return localStorage.getItem('googleState')
}

// 初始google登入裝態
export function defaultGoogleState() {
    return localStorage.removeItem('googleState')
}
