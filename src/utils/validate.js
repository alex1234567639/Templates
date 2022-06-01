// 判斷台灣手機號碼
function isPhoneNumberTW(phoneNumber) {
    return /^09\d{8}$/.test(phoneNumber)
}
// 判斷香港手機號碼
function isPhoneNumberHG(phoneNumber) {
    return /^[5|6|7|8|9]\d{7}$/.test(phoneNumber)
}
// 判斷澳門手機號碼
function isPhoneNumberMacao(phoneNumber) {
    return /^6\d{7}$/.test(phoneNumber)
}

// 手機號碼驗證
export function validatePhoneNumber(region, phoneNumber) {
    switch (region) {
        case 'taiwan':
            return isPhoneNumberTW(phoneNumber)
        case 'hongKong':
            return isPhoneNumberHG(phoneNumber)
        case 'macao':
            return isPhoneNumberMacao(phoneNumber)
    }
}
