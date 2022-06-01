<template>
  <div class="google-login-wrapper">
    <Header />
    <div class="btn">
      <div class="google-btn" @click="googleLogin">{{ $t('google.login') }}</div>
      <div class="google-btn" @click="googleLogout">{{ $t('google.logout') }}</div>
    </div>
    <div v-if="isLogin" class="response">{{ $t('google.response') }}{{ googleInfo }}</div>
    <div v-else class="not-login">{{ $t('google.not_login') }}</div>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import { setGoogleState, getGoogleState, defaultGoogleState } from '@/utils/googleLogin'

export default {
  components: {
    Header
  },
  data() {
    return {
      isLogin: false,
      googleInfo: ''
    }
  },
  mounted() {
    if (getGoogleState()) {
      this.isLogin = true
      this.googleInfo = getGoogleState()
    } else {
      this.isLogin = false
      this.googleInfo = ''
    }
  },
  methods: {
    async googleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn()
        console.log(googleUser)
        setGoogleState(JSON.stringify(googleUser.wc))
        this.isLogin = true
        this.googleInfo = JSON.stringify(googleUser.wc)
      } catch (error) {
        console.error(error)
        return null
      }
    },
    async googleLogout() {
      try {
        const googleUser = await this.$gAuth.signOut()
        console.log(googleUser)
        defaultGoogleState()
        this.isLogin = false
        this.googleInfo = ''
      } catch (error) {
        console.error(error)
        return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.google-login-wrapper {
  font-size: 16px;
  .btn {
    padding-top: 66px;
    .google-btn {
      @apply inline-block cursor-pointer bg-white;
      border: 1px solid black;
      border-radius: 5px;
      margin: 20px 0 0 15px;
      padding: 10px;
      transition-duration: 300ms;
      &:hover {
        @apply bg-gray-100;
      }
    }
  }
  .response {
    @apply whitespace-normal;
    width: 800px;
    margin: 20px;
  }
  .not-login {
    color: gray;
    margin: 20px;
  }
}
</style>
