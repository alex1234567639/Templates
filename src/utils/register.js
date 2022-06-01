import store from '@/store';

// 設定使用者狀態
export function setRegisterState(res, fbToken) {
    localStorage.setItem('registerId', res.id)
    localStorage.setItem('registerToken', res.access_token)
    sessionStorage.setItem('fbToken', fbToken)
}

// 取得FB登入狀態
export function getRegisterFBState() {
    return sessionStorage.getItem('fbToken')
}

// 初始使用者狀態
export function defaultRegisterState() {
    localStorage.removeItem('registerId')
    localStorage.removeItem('registerToken')
    sessionStorage.removeItem('fbToken')
}
