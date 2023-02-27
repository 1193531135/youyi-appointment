<template>
  <div class="all">
    <div class="background-con">
      <img :src="hospitalData.bgImage" alt="">
    </div>
    <div class="content-con">
      <div class="card">
        <div>
          <img :src="hospitalData.icon">
          <div>
            <div>{{ hospitalData.name }}</div>
            <div>{{ hospitalData.level}}</div>
          </div>
        </div>
        <div>
          <i></i>
          <div>{{ hospitalData.address}}</div>
        </div>
      </div>
      <div class="card">
        <van-tabs v-model="searchData.type">
          <van-tab title="热门" name="host"></van-tab>
          <van-tab title="父母" name="parents"></van-tab>
          <van-tab title="男性" name="man"></van-tab>
          <van-tab title="女性" name="woman"></van-tab>
        </van-tabs>
        <van-tabbar v-model="searchData.sortType" :fixed="false" :border="false">
          <van-tabbar-item>综合</van-tabbar-item>
          <van-tabbar-item>价格</van-tabbar-item>
          <van-tabbar-item>销量</van-tabbar-item>
        </van-tabbar>
        <div class="indexPage">
          <div v-for="item in hospitalData.setMealList" :key="item.title" class="list-item">
            <img :src="item.headImg" alt />
            <div class="list-item-title">{{ item.title }}</div>
            <div>{{ item.address }}</div>
            <van-tag plain type="primary">{{ item.level }}</van-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      searchData: {
        type: "host",
        sortType: 1
      },
      hospitalData: {
        icon: "",
        name: "",
        address: "",
        bgImage: "",
        setMealList: [
          {
            id: 1,
            headImg: "http://static.wj120.com.cn/images/logo.png",
            title: "成都市温江区人民医院",
            level: "三级甲等",
            address: "四川省成都市温江区康泰路86号"
          },
          {
            id: 2,
            headImg: "http://www.sc2zyy.com/images/logo.png",
            title: "四川省第二中医院",
            level: "三级甲等",
            address: "四川省第二中医医院位于成都市青羊区四道街20号"
          },
          {
            id: 3,
            headImg: "https://static.cd2120.com/images/logo.jpg",
            title: "成都市第二人民医院",
            level: "三级甲等",
            address: "四川省成都市庆云南街10号"
          },
          {
            id: 4,
            headImg: "https://www.416h.com/static/images/logo.jpg",
            title: "核工业416医院",
            level: "三级甲等",
            address: "成都市二环路北四段4号"
          }
        ]
      },
      hospitalList: [
        {
          id: 1,
          headImg: "http://static.wj120.com.cn/images/logo.png",
          title: "成都市温江区人民医院",
          level: "三级甲等",
          address: "四川省成都市温江区康泰路86号"
        },
        {
          id: 2,
          headImg: "http://www.sc2zyy.com/images/logo.png",
          title: "四川省第二中医院",
          level: "三级甲等",
          address: "四川省第二中医医院位于成都市青羊区四道街20号"
        },
        {
          id: 3,
          headImg: "https://static.cd2120.com/images/logo.jpg",
          title: "成都市第二人民医院",
          level: "三级甲等",
          address: "四川省成都市庆云南街10号"
        },
        {
          id: 4,
          headImg: "https://www.416h.com/static/images/logo.jpg",
          title: "核工业416医院",
          level: "三级甲等",
          address: "成都市二环路北四段4号"
        }
      ]
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    }
  },
  created() {
    document.title = "医院详情";
    this.id = this.$route.query.id;
    let obj = this.hospitalList.filter(i => i.id == this.id)[0];
    this.hospitalData.icon = obj.headImg;
    this.hospitalData.name = obj.title;
    this.hospitalData.address = obj.address;
    this.hospitalData.bgImage = obj.bgImage;
    this.hospitalData.level = obj.level;
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
  background-color: rgb(242, 244, 246);
}
.content-con {
  position: absolute;
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
.list-item > div {
  margin: 5px 0;
}
.list-item-title {
  font-size: 15px;
  color: black;
}
</style>