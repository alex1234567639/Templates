<template>
  <transition name="fade">
    <div class="popup" v-if="show">
      <div class="bg"></div>

      <!--訊息-->
      <div class="pop-up-box" v-if="type === 'msg' || type === 'reload'">
        <!--背景-->
<!--        <img class="pop-up-bg" src="@/assets/img/preOrder/pop_up_bg.png" alt="">-->
        <!--content-->
        <div class="content">
          <span>{{ msg }}</span>
        </div>
        <!--btn-->
        <div @click="cancel" class="pop-up-btn">
<!--          <img src="@/assets/img/preOrder/pop_up_btn.png" alt="">-->
          <span class="btn-text">{{ cancelMsg }}</span>
        </div>
      </div>

      <!-- 圖片 -->
      <div class="popup-photo" v-if="type === 'photo'" @click="cancel">
<!--        <img :src="require('@/assets/img/preOrder/' + content)" alt="">-->
<!--        <img class="cross" @click="cancel" src="@/assets/img/preOrder/leaf.png" alt="">-->
      </div>

    </div>
  </transition>
</template>

<script>
import i18n from '@/i18n/i18n/';

export default {
  name: "Popup",
  data() {
    return {
      content: '',
      type: '',
      show: false,
      cancelMsg: i18n.t('confirm')
    }
  },
  computed: {
    msg() {
      if (this.content.match('error')) {
        const code = this.content.slice(6);
        return i18n.t('contact_service') + '\n' + code;
      } else {
        return this.content;
      }
    },
  },
  methods: {
    cancel() {
      if (this.type === 'reload') {
        this.show = false
        location.reload()
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  @apply fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center;

  & .bg {
    @apply fixed top-0 bottom-0 left-0 right-0 w-full h-full;
    background-color: rgba(0, 0, 0, 0.8);
  }

  & .pop-up-box {
    @apply relative;

    & .pop-up-bg {
      width: 25vw;
      min-width: 600px;
    }

    & .content {
      @apply absolute text-center pb-4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      width: 100%;
      & span {
        @apply font-bold;
        font-size: 30px;
        line-height: 1.5;
      }
    }

    & .pop-up-btn {
      @apply absolute cursor-pointer text-center;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      &:hover .btn-text {
        color: #ffffff;
      }
      & img {
        width: 230px;
      }
      & .btn-text {
        @apply absolute top-0 bottom-0 flex items-center font-bold duration-500;
        color: #e9e9e9;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
      }
    }
  }

  & .popup-photo {
    @apply relative z-50;
    margin-bottom: 10vw;
    width: 600px;
    & .cross {
      @apply absolute cursor-pointer;
      top: -13px;
      right: -13px;
      width: 30px;
    }
  }
}

@media (max-width: 768px) {
  .popup {
    & .pop-up-box {
      @apply relative;
      margin-bottom: 30vw;

      & .pop-up-bg {
        width: 400px;
        min-width: 52vw;
      }

      & .content {
        @apply pb-6;
        width: 280px;
        & span {
          font-size: 1.7rem;
          line-height: 1.3;
        }
      }

      & .pop-up-btn {
        bottom: 25px;
        & img {
          width: 165px;
        }
        & .btn-text {
          @apply text-2xl;
        }
      }
    }

    & .popup-photo {
      margin-bottom: 30vw;
      width: 400px;
      & .cross {
        top: -13px;
        right: -13px;
        width: 28px;
      }
    }
  }
}

@media (max-width: 480px) {
  .popup {
    & .pop-up-box {
      & .content {
        @apply pb-4;
        width: 70%;
        & span {
          font-size: 1.6rem;
        }
      }

      & .pop-up-btn {
        bottom: 12%;
        & img {
          width: 140px;
        }
        & .btn-text {
          font-size: 1.4rem;
        }
      }
    }

    & .popup-photo {
      margin-bottom: 30vw;
      width: 80%;
      & .cross {
        top: -13px;
        right: -13px;
        width: 25px;
      }
    }
  }
}

@media (max-width: 375px) {
  .popup {
    & .pop-up-box {
      & .content {
        width: 70%;
        & span {
          font-size: 1.4rem;
        }
      }

      & .pop-up-btn {
        bottom: 15%;
        & img {
          width: 130px;
        }
        & .btn-text {
          font-size: 1.3rem;
        }
      }
    }

    & .popup-photo {
      margin-bottom: 30vw;
      width: 80%;
      & .cross {
        top: -11px;
        right: -11px;
        width: 22px;
      }
    }
  }
}

// 過渡效果
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 1921px) {
  .popup {
    & .pop-up-box {
      & .content {
        & span {
          font-size: 1.5vw;
        }
      }

      & .pop-up-btn {
        bottom: 1.6vw;
        & img {
          width: 12vw;
        }

        & .btn-text {
          font-size: 1.3vw;
        }
      }
    }

    & .popup-photo {
      width: 31.5vw;
      &  img{
        @apply m-auto w-full;
      }
      & .cross{
        width: 1.55vw;
        right: -1vw;
      }
    }
  }
}
</style>
