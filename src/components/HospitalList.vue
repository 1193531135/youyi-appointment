<template>
  <div class="all">
    <van-search
      v-model="searchData.name"
      placeholder="请输入医院名称"
      @search="onSearch"
    />
    <van-dropdown-menu>
      <van-dropdown-item v-model="searchData.level" :options="hospitalType" />
      <van-dropdown-item v-model="searchData.sortType" :options="sortType" />
    </van-dropdown-menu>
    <div class="indexPage">
      <div v-for="item in hospitalList" :key="item.title" class="list-item" @click="$router.push(`/hospital-detail?id=${item.id}`)">
        <img :src="item.headImg" alt />
        <div class="list-item-title">{{ item.title }}</div>
        <div>{{ item.address }}</div>
        <van-tag plain type="primary">{{ item.level }}</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: {
        name:'',
        level: 1,
        sortType:1
      },
      hospitalType: [
        { text: "全部医院", value: 1},
        { text: "一甲", value: 2 },
        { text: "二甲", value: 3 },
        { text: "三甲", value: 4 }
      ],
      sortType: [
        { text: "综合", value: 1 },
        { text: "销量", value: 2 },
        { text: "距离", value: 3 },
      ],
      hospitalList: [
        {
          id:1,
          headImg: "http://static.wj120.com.cn/images/logo.png",
          title: "成都市温江区人民医院",
          level:'三级甲等',
          address:'四川省成都市温江区康泰路86号',
        },
        {
          id:2,
          headImg: "http://www.sc2zyy.com/images/logo.png",
          title: "四川省第二中医院",
          level:'三级甲等',
          address:'四川省第二中医医院位于成都市青羊区四道街20号', 
        },
        {
          id:3,
          headImg: "https://static.cd2120.com/images/logo.jpg",
          title: "成都市第二人民医院",
          level:'三级甲等',
          address:'四川省成都市庆云南街10号',
        },
        {
          id:4,
          headImg: "https://www.416h.com/static/images/logo.jpg",
          title: "核工业416医院",
          level:'三级甲等',
          address:'成都市二环路北四段4号',
        }
      ]
    };
  },
  methods:{
    onSearch(val){
      console.log(val)
    }
  },
  created() {
    document.title = "医院列表";
  }
};
</script>

<style scoped>
.all {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.van-dropdown-menu {
  /* height: 80px; */
  /* width: 100%; */
}
.indexPage {
  padding: 0 8vw;
  flex: 1;
  overflow: auto;
}
.list-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.1);
  padding: 4.48vw;
  flex: 1;
  margin: 40px 0;
  text-align: left;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
}
.list-item > img {
  height: 30px;
  object-fit: contain;
  object-position: left;
}
.list-item:active {
  /* background-color: #409eff; */
  opacity: 0.8;
  /* color: white; */
}
.list-item > div{
  margin: 5px 0;
}
.list-item-title{
  font-size: 15px;
  color: black;
}
</style>