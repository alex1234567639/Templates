<template>
  <div class="collapse-wrapper">

    <Header />

    <div class="result-box">
      <div v-for="(item, index) in fakeData.list" :key="index" class="result">
        <div class="pic-box">
          <img src="" alt="">
        </div>
        <div class="info-box">
          <div class="title" @click="item.isCollapse = !item.isCollapse">{{ item.title }}</div>
          <div v-if="item.status===0" class="status status-apply">申請中</div>
          <div v-else class="status status-registered">已註冊</div>
          <br>
          <div class="item">
            <div class="item-title">保護類別</div>
            <div class="item-content">{{ item.type }}</div>
          </div>
          <div class="item">
            <div class="item-title">申請人</div>
            <div class="item-content">{{ item.applier }}</div>
          </div>
<!--          <div v-show="item.isCollapse">-->
          <div class="show-box" :class="{ noShowContent: !item.isCollapse }">
            <div class="item">
              <div class="item-title">申請國家</div>
              <div class="item-content">{{ item.country }}</div>
            </div>
            <div class="item">
              <div class="item-title">申請日期</div>
              <div class="item-content">{{ item.applyDate }}</div>
            </div>
            <div class="item">
              <div class="item-title">申請案號</div>
              <div class="item-content">{{ item.applyNum }}</div>
            </div>
            <div class="item">
              <div class="item-title">註冊日期</div>
              <div class="item-content">{{ item.registerDate }}</div>
            </div>
            <div class="item">
              <div class="item-title">註冊案號</div>
              <div class="item-content">{{ item.registerNum }}</div>
            </div>
            <div class="item">
              <div class="item-title">保護效期</div>
              <div class="item-content">{{ item.term }}</div>
            </div>
            <div class="item">
              <div class="item-title">代理人</div>
              <div class="item-content">{{ item.agent }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index'

export default {
  components: {
    Header
  },
  data() {
    return {
      fakeData: {
        list: [
          {
            status: 0,
            title: 'Le chat goods store 設計圖',
            country: '台灣',
            applyDate: '2021/10/14',
            registerDate: '-',
            type: '35, 42, 43',
            applyNum: '110001748',
            registerNum: '01234562',
            applier: '睿加科技股份有限公司',
            agent: '吳鵬君',
            term: '-'
          },
          {
            status: 1,
            title: 'Le chat goods store 設計圖',
            country: '台灣',
            applyDate: '2021/12/14',
            registerDate: '-',
            type: '35, 31, 43',
            applyNum: '110311748',
            registerNum: '01324562',
            applier: '睿加科技股份有限公司',
            agent: '吳鵬君',
            term: '2022/10/23'
          }
        ]
      }
    }
  },
  mounted() {
    this.fakeData.list.map(item => {
      this.$set(item, 'isCollapse', false)
    })
  }
}
</script>

<style lang="scss" scoped>
.collapse-wrapper {
  overflow: hidden;
  background-color: antiquewhite;
  width: 100%;

  & .result-box {
    width: 23.44vw;
    margin: 100px 50px 50px;
    & .result {
      border-bottom: 2px solid #979797;
      width: 100%;
      & .pic-box {
        display: inline-block;
        width: 4.16vw;
        height: 4.86vw;
        vertical-align: top;
        img {
          width: 90%;
          margin: calc(2.08vw - 50%) 5%;
        }
      }
      & .info-box {
        display: inline-block;
        padding: 0.26vw 0.78vw;
        & .title {
          @apply cursor-pointer;
          display: inline-block;
          font-size: 0.97vw;
          font-weight: bold;
          margin: 0 0.52vw 0.39vw 0;
        }
        & .status {
          display: inline-block;
          font-size: 0.625vw;
          text-align: center;
          padding: 0.1vw 0.52vw;
          border-radius: 0.35vw;
          color: #ffffff;
        }
        & .status-apply {
          background-color: #0465A8;
        }
        & .status-registered {
          background-color: #FC6F60;
        }
        & .item {
          margin-bottom: 0.26vw;
          font-size: 0.83vw;
          vertical-align: top;
          & .item-title {
            display: inline-block;
            width: 5.2vw;
            color: #333333;
            vertical-align: top;
          }
          & .item-content {
            display: inline-block;
            color: #797979;
          }
        }
        & .show-box {
          animation: fadeEffect .5s;
        }
        @keyframes fadeEffect {
          from {opacity: .3;}
          to {opacity: 1;}
        }
        .noShowContent{
          display: none;
        }
      }
    }
  }
}
</style>

