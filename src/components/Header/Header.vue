<template>
  <div class="header">
    <img class="header-img" src="./img/logo.png" />
    <img
      class="header-gif"
      src="http://hbimg.b0.upaiyun.com/3a79b9621ec11645340b15b091868af1eaa539c4fdf4-ajLkdI_fw658"
    />
    <aplayer :audio="audio" :lrcType="3" class="header-music" />
    <ul class="header-nav">
      <router-link to="/home">
        <li class="header-list">首页</li>
      </router-link>
      <router-link to="/history">
        <li class="header-list">建站史</li>
      </router-link>
      <router-link to="/music">
        <li class="header-list">超喜欢的歌</li>
      </router-link>
      <router-link to="/homeTown">
        <li class="header-list">我的家乡</li>
      </router-link>
      <router-link to="/red">
        <li class="header-list">那些年的网红</li>
      </router-link>
      <router-link to="/learn">
        <li class="header-list">笔记</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      audio: [
         {
          name: "一曲肝肠断",
          artist: "背着琴的俩兄弟",
          url: "https://sharefs.yun.kugou.com/201911072012/c486fd1c54d32c35892733b60c44a1dd/G177/M00/10/14/UYcBAF2Li2KAezcrACE9j3JX0Fg585.mp3",
          // cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // 图片
          // lrc: "https://cdn.moefe.org/music/lrc/thing.lrc" //歌词
        }
      ]
    };
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.header
  background-color #cccccc
  min-width 1920px
  height 100px
  background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573057251841&di=1279269e0f328750c5e36680b2c7e6e4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20171107%2F8dfce3a16e684eb08f3d70f6e91d4cc2.gif')
  .header-img
    width 200px
    height 100px
    margin-left 100px
  .header-music
    position absolute
    top 0
    left 430px
    width 770px
    z-index 1
  .header-gif
    width 100px
    height 100px
  .header-nav
    height 100px
    float right
    margin-right 50px
    .header-list
      float left
      line-height 100px
      margin-right 10px
      width 100px
      text-align center
    :hover
      background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573057549478&di=1b38053c574c78a23ff7d3c4e1b8fa00&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Ff4c65e46db3d9704cb43cd1180482a4f0098c7b4.gif')
      background-size 100% 100%
      
</style>