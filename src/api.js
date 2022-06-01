import CryptoJS from 'crypto-js';

export default class api {
    constructor(axios, store) {
        this._axios = axios;
        this._store = store;
        this._aesKey = process.env.VUE_APP_API_KEY;
        this._iv = '0000000000000000';
    }

    setStaticFail(value) {
        this._staticFail = value;
    }

    setStaticError(value) {
        this._staticError = value;
    }

    getIP() {
        return new Promise((resolve) => {
            this._axios.post("https://getip.futuregame.com.tw", 'ZXDRFG@#qaE78(')
                .then(res => {
                    if (this._store.state.showLog) {
                        console.log('getIP 成功 回傳如下');
                        console.log(res);
                    }
                    resolve(res);
                })
                .catch((error) => {
                    if (this._store.state.showLog) {
                        console.log('getIP 失敗 回傳如下');
                        console.log(error);
                    }
                });
        });
    }

    getApiUrl() {
        return this._store.state.apiUrl;
    }

    registerId() {
        let registerId = '';
        if (localStorage.registerId) {
            registerId = localStorage.registerId;
        } else {
            registerId = '';
        }
        return Number(registerId);
    }

    registerToken() {
        let registerToken = '';
        if (localStorage.registerToken) {
            registerToken = localStorage.registerToken;
        } else {
            registerToken = '';
        }
        return registerToken;
    }

    encryptedData(body) {
        const key = CryptoJS.enc.Utf8.parse(this._aesKey);
        const ivKey = CryptoJS.enc.Utf8.parse(this._iv);
        if (body instanceof Object) {
            body = JSON.stringify(body)
        }

        return CryptoJS.AES.encrypt(body, key, {
            iv: ivKey,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
    }

    decryptedData(body) {
        const key = CryptoJS.enc.Utf8.parse(this._aesKey);
        const ivKey = CryptoJS.enc.Utf8.parse(this._iv);
        const decrypt = CryptoJS.AES.decrypt(body, key, {
            iv: ivKey,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }

    hashData(value) {
        return CryptoJS.SHA256(value).toString();
    }

    // Facebook 登入
    loginFB(token) {
        const api = this.getApiUrl() + 'login/fb';
        const data = {
            'access_token': token,
            'company_id': this._store.state.company_id,
            'ip': this._store.state.ip,
            'source': 163332,
            'device': 0
        };
        return this.post('facebookLogin', data, api);
    }

    // 取得禮包資料
    redemptionPacks() {
        const api = this.getApiUrl() + 'redemption/packs'
        const data = {
            'company_id': this._store.state.company_id,
            'game_id': 163332
        }
        return this.post('getPreLoginSerial', data, api)
    }

    // 取得扭蛋序號紀錄
    getCapsuleToyRecord() {
        const api = this.getApiUrl() + 'preevent/getCapsuleToyRecord'
        const data = {
            'token': this.registerToken(),
            'id': this.registerId(),
            'ip': this._store.state.ip,
            'company_id': this._store.state.company_id,
            'game_id': 163332,
            'source': 163332
        }
        return this.post('getCapsuleToyRecord', data, api)
    }

    // 扭蛋
    capsuleToy() {
        const api = this.getApiUrl() + 'preevent/getCapsuleToySerialNumber';
        const data = {
            'token': this.registerToken(),
            'id': this.registerId(),
            'ip': this._store.state.ip,
            'company_id': this._store.state.company_id,
            'game_id': 163332,
            'source': 163332
        };
        return this.post('capsuleToy', data, api);
    }

    // Banner
    getBanner(type) {
        const api = this.getApiUrl() + 'news/getbanner';
        const data = {
            'company_id': this._store.state.company_id,
            'belongs': 1,
            'game_id': 163332,
            'type': type
        };
        return this.post('getBanner', data, api);
    }

    // 最新消息
    newsGet(type) {
        const api = this.getApiUrl() + 'news/get';
        const data = {
            'company_id': this._store.state.company_id,
            'news_type': type,
            'belongs': 1,
            'game_id': 163332,
        };
        return this.post('newsGet', data, api);
    }

    
    post(command, data = {}, api) {
        let body = '';
        if (this._store.state.isEncryption) {
            body = {company_id: this._store.state.company_id, data: this.encryptedData(data)};
        } else {
            body = {company_id: this._store.state.company_id, data: data};
        }

        if (this._store.state.showLog) {
            console.log(body);
            console.log(data);
        }

        return new Promise((resolve, reject) => {

            this._axios.post(api, JSON.stringify(body)).then(res => {
                if (this._store.state.showLog) {
                    console.log('$http post 成功 回傳如下');
                    console.log('command = ' + command);
                    console.log(res);
                }


                let resData = '';
                if (res.data.error_code === 0) {
                    if (res.data.data !== null) {
                        resData = this._store.state.isEncryption ? JSON.parse(this.decryptedData(res.data.data)) : res.data.data;
                    } else {
                        resData = '';
                    }
                    resolve(resData);
                } else {
                    if (this._staticFail) {
                        this._staticFail(res.data.error_code);
                    }
                    reject(res.data);
                }

            }).catch(error => {
                if (this._store.state.showLog) {
                    console.log('$http post 失敗 回傳如下');
                    console.log('command = ' + command);
                    console.log(error);
                }
                if (this._staticError) {
                    this._staticError(error, command);
                }
            })
        });
    }
}
