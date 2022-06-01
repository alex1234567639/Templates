import Vue from 'vue'
import VueI18n from 'vue-i18n';

const tw = {...require('./default_tw.json')};

const en = {...require('./default_en.json')};

//使用插件
Vue.use(VueI18n);

//這個從新整理還可以存著
const locale = sessionStorage.getItem('locale') || 'tw';

// 建立 VueI18n 實體
const i18n = new VueI18n({
    locale,
    messages: {tw, en},
    silentFallbackWarn: true
});

export default i18n
