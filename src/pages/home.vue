<template>
  <div class="page">
    <h2>{{text}}</h2>
    <div class="test-panel">
      <div class="select-panel">
        <div class="select-item">
          <div class="top" @click="pull">
            <span class="title">粉丝年龄</span>
            <div class="arrow">
              <div :class="{'icon': isShow, 'default': !isShow}">
                <i class="iconfont iconxiala"></i>
              </div>
            </div>
          </div>
          <div class="pull-panel" v-show="isShow">
            <el-select v-model="value" placeholder="请选择" class="select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <div>
              <span>大于</span>
              <el-input-number v-model="num" :precision="2" :step="0.1" :min="0" :max="100"></el-input-number>
              <span>%</span>
              <el-button type="primary">确定</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <draggable @start="start" @end="end">
          <transition-group tag="div">
            <div class="pull-item" v-for="item in list" :key="item.id">{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div class="bottom">
        <router-link :to="{ name: 'test' }">进入测试页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  metaInfo: {
    title: '首页'
  },
  data () {
    return {
      text: 'Welcome to My testWebsite',
      isShow: false,
      value: '',
      num: 0,
      options: [{
        label: '0-18',
        value: '0-18'
      }, {
        label: '19-25',
        value: '19-25'
      }, {
        label: '26-30',
        value: '26-30'
      }, {
        label: '31-35',
        value: '31-35'
      }, {
        label: '36-40',
        value: '36-40'
      }, {
        label: '41-45',
        value: '41-45'
      }, {
        label: '46以上',
        value: '46以上'
      }],
      list: [{
        name: '组件一',
        id: 1
      }, {
        name: '组件二',
        id: 2
      }, {
        name: '组件三',
        id: 3
      }, {
        name: '组件四',
        id: 4
      }]
    }
  },
  methods: {
    pull () {
      this.isShow = !this.isShow
    },
    start (e) {
      console.log(e)
    },
    end (e) {
      console.log(e)
    }
  },
  components: {
    draggable
  }
}
</script>

<style lang='less' scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888888;
  .test-panel {
    width: 80%;
    padding: 30px;
    background: #eeeeee;
    border-radius: 15px;
    .select-panel {
      display: flex;
      justify-content: space-around;
      .select-item {
        width: 200px;
        min-height: 30px;
        line-height: 30px;
        border-radius: 8px;
        background: #ffffff;
        border: 1px solid #dddddd;
        cursor: pointer;
        .top {
          display: flex;
          justify-content: space-between;
          .title {
            padding-left: 20px;
          }
          .arrow {
            width: 30px;
            height: 30px;
            border-left: 1px solid #dddddd;
            .icon {
              transform: rotate(180deg);
              transition: all .8s
            }
            .default {
              transition: all .8s
            }
          }
        }
        .pull-panel {
          width: 100%;
          height: 150px;
          border-top: 1px solid #dddddd;
        }
      }
      .select-item:hover {
        border: 1px solid red;
        transition: border .8s;
      }
    }
    .content {
      .pull-item {
        width: 100px;
        height: 50px;
        margin: 10px 0;
        padding: 0 20px;
        background: cornflowerblue;
        border-radius: 8px;
        line-height: 50px;
        color: cornsilk;
        cursor: pointer;
      }
    }
    .bottom {

    }
  }
}
</style>
<style lang="less">
.select{
  margin-top: 10px;
  .el-input__inner {
  font-size:12px !important;
  width: 150px;
  height: 22px !important;
  line-height: 22px !important;
  }
  .el-input{
    font-size:12px !important;
    width: 150px;
    height: 22px !important;
    line-height: 22px !important;
  }
}
.el-select .el-input .el-select__caret {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
