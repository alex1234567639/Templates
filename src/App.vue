<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import i18n from "./i18n/i18n"
import { defaultRegisterState } from '@/utils/register'

export default {
  name: 'app',
  data() {
    return {
      tabsList: [
        { name: '', link: '' }
      ]
    }
  },
  methods: {
    initApiService() {
      this.$apiService.setStaticFail((resData) => {
        if (this.$store.state.showLog) {
          console.log(resData);
        }
        // token過期
        if( resData === 10005 ){
          this.$popup(this.$t('error.10005'), 'reload')
          window.scrollTo(0,0)
          this.defaultState()
        }
      });

      this.$apiService.setStaticError((error, command) => {
        if (this.$store.state.showLog) {
          console.log(error, command);
        }
      });
    },
    defaultState() {
      defaultRegisterState(); // 初始使用者狀態
    },
    getUserDevice() {
      const navUserAgent = navigator.userAgent;
      if (navUserAgent.match(/line/i)) {
        this.$store.commit('setBrowser', 'line');
        this.$popup(this.$t('open_default_browser'))
      }

      // 取得ip
      this.$apiService.getIP().then((res) => {
        if (res.data) {
          const ip = res.data;
          this.$store.commit('setIp', ip);
        }
      }).catch((err) => {
        if (this.$store.state.showLog) {
          console.log(err);
        }
      });
    },
  },
  beforeCreate() {
    i18n.locale = sessionStorage.getItem('locale') || 'tw';
  },
  created() {
    this.initApiService();
    this.getUserDevice();
  }
}
</script>
