<template>
  <div class="header-wrapper">
    <div class="link-btn"><router-link to="/googleLogin">{{ $t('header.google_login') }}</router-link></div>
    <div class="link-btn"><router-link to="/sendEmail">{{ $t('header.send_email') }}</router-link></div>
    <div class="link-btn"><router-link to="/collapse">{{ $t('header.collapse') }}</router-link></div>
    <div class="link-btn"><router-link to="/button">{{ $t('header.button') }}</router-link></div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  @apply fixed right-0 w-full bg-black opacity-80;
  height: 72px;
  & .link-btn {
    @apply cursor-pointer text-center bg-white inline-block;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 16px;
    width: 120px;
    padding: 15px;
    margin: 7.5px
  }
}
</style>
