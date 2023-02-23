<template>
  <div class="all">
    <div class="indexPage">
      <div v-for="item in hospitalList" :key="item.title" class="list-item">
        <img :src="item.headImg" alt="">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hospitalList:[
        {
          headImg:'http://static.wj120.com.cn/images/logo.png',
          title:'成都市温江区人民医院'
        },
        {
          headImg:'http://www.sc2zyy.com/images/logo.png',
          title:'四川省第二中医院'
        },
        {
          headImg:'https://static.cd2120.com/images/logo.jpg',
          title:'成都市第二人民医院'
        },
        {
          headImg:'https://www.416h.com/static/images/logo.jpg',
          title:'核工业416医院'
        },
      ]
    }
  },
  created(){
    document.title = '医院列表'
  }
};
</script>

<style scoped>
.all{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.indexPage {
  padding: 0 8vw;
  flex: 1;
}
.list-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.1);
  padding: 4.48vw;
  flex: 1;
  margin: 40px 0;
}
.list-item > img{
  height: 60px;
  object-fit: contain;
}
.list-item:active{
  /* background-color: #409eff; */
  opacity: 0.8;
  /* color: white; */
}
</style>