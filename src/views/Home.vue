<template>
  <div class="home-wrapper">
    <div class="video-wrapper">
      <!-- <video src="../../assets/yourname.mp4" controls="controls" width="90%" poster="../../assets/zju.jpg"></video> -->
    </div>

  <div class="card-wrapper">
    <el-card :body-style="{ padding: '20px'}">
      <img src="../assets/zju2.jpg" class="image">
      <div style="padding: 14px;" class="text">
        <div>
          为了展示学院和导师风采，引导大学生了解计算机学科及相关交叉学科前沿动态，在科研实践中激发学子勇攀科研高峰兴趣，浙江大学计算机学院决定面向国内兄弟院校招收暑期实习生。详细招生信息请注册登录后查阅，报名截止日期为xx月xx日。
        </div>
        <div>
          具体通知可见 <a href="http://www.cs.zju.edu.cn/csen/2020/0616/c26739a2155774/page.htm" target="_blank">浙江大学计算机学院招收2020年暑期实习生计划</a>
        </div>
        <div>
          Email： xxxxx@cs.zju.edu.cn
        </div>
        <div>
          地址： 浙江省 杭州市 浙大路38号 浙江大学 计算机科学与技术学院 教学管理科（研究生）
        </div>
        <div> 邮编：310027</div>
      </div>
    </el-card>
  </div>
    
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  name = 'ss'

}
</script>
<style lang="less">
.home-wrapper {
  .video-wrapper {
    margin: 50px auto;
    width: 100%;
  }
  .card-wrapper {
    width: 800px;
    margin: auto;
    .text{
      text-align: left;
      font-size: 16px;
      line-height: 25px;
      a {
        text-decoration: none;
        color: #2775b6;
      }
    }
  }
}
</style>