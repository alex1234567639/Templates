<template>
  <div class="send-email-wrapper" id="printTest">
    <Header />
    <div class="input-form">
      <div class="item"><label>{{ $t('email.name') }}:<input v-model="name" type="text"></label></div>
      <div class="item"><label>{{ $t('email.email') }}:<input v-model="email" type="text"></label></div>
    </div>
    <div class="email" @click="sendEmail">{{ $t('email.send') }}</div>
    <button class="email" v-print="'#printTest'">列印</button>
    <div>
      <a class="call-btn" href="tel://0955030940">{{ $t('email.call') }}</a>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header/index'
import emailjs from 'emailjs-com'

export default {
  components: {
    Header
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    sendEmail() {
      const templateParams = {
        user: this.name,
        userMail: this.email,
        message: '已經成功寄出信件囉！',
        to_name: this.name,
        from_name: '測試信箱'
      }
      emailjs.send('service_c5dxur7', 'template_yhj4wnp', templateParams, 'user_v9HVg0jJjkaLqDt9oknqE')
          .then(() => {
            alert('已發寄出信件！')
          }, (error) => {
            alert('寄出信件失敗！')
            console.log('Failed!', error)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.send-email-wrapper {
  font-size: 16px;
  .input-form {
    padding: 66px 0 0 20px;
    .item {
      margin: 25px 10px;
      input {
        margin-left: 10px;
        border: 1px solid black;
      }
    }
  }
  .email {
    @apply inline-block text-center bg-black text-white cursor-pointer;
    border: 1px solid black;
    width: 100px;
    border-radius: 5px;
    padding: 5px;
    margin: 0 0 0 100px;
    transition-duration: 300ms;
    &:hover {
      background-color: #3c3c3c;
    }
  }
  .call-btn {
    @apply inline-block text-center cursor-pointer bg-red-800 text-white;
    border: 1px solid darkred;
    width: 100px;
    border-radius: 5px;
    padding: 5px;
    margin: 20px 0 0 100px;
    transition-duration: 300ms;
    &:hover {
      @apply bg-red-700;
    }
  }
}
</style>
