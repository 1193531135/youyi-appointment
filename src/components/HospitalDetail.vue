<template>
  <div class="all">
    <div class="background-con">
      <img :src="hospitalData.bgImage" alt="" />
    </div>
    <div class="content-con">
      <div class="card">
        <div class="head-con1">
          <img :src="hospitalData.icon" class="hospital-icon"/>
          <div>
            <div>{{ hospitalData.name }}</div>
            <van-tag plain type="primary">{{ hospitalData.level }}</van-tag>
          </div>
        </div>
        <div>
          <i></i>
          <div>{{ hospitalData.address }}</div>
        </div>
      </div>
      <div class="card card2">
        <van-tabs v-model="searchData.type">
          <van-tab title="热门" name="host"></van-tab>
          <van-tab title="父母" name="parents"></van-tab>
          <van-tab title="男性" name="man"></van-tab>
          <van-tab title="女性" name="woman"></van-tab>
        </van-tabs>
        <van-tabbar
          v-model="searchData.sortType"
          :fixed="false"
          :border="false"
        >
          <van-tabbar-item>综合</van-tabbar-item>
          <van-tabbar-item>价格</van-tabbar-item>
          <van-tabbar-item>销量</van-tabbar-item>
        </van-tabbar>
        <div class="indexPage">
          <div
            v-for="item in hospitalData.setMealList"
            :key="item.title"
            class="list-item"
          >
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
        sortType: 1,
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
            address: "四川省成都市温江区康泰路86号",
          },
          {
            id: 2,
            headImg: "http://www.sc2zyy.com/images/logo.png",
            title: "四川省第二中医院",
            level: "三级甲等",
            address: "四川省第二中医医院位于成都市青羊区四道街20号",
          },
          {
            id: 3,
            headImg: "https://static.cd2120.com/images/logo.jpg",
            title: "成都市第二人民医院",
            level: "三级甲等",
            address: "四川省成都市庆云南街10号",
          },
          {
            id: 4,
            headImg: "https://www.416h.com/static/images/logo.jpg",
            title: "核工业416医院",
            level: "三级甲等",
            address: "成都市二环路北四段4号",
          },
        ],
      },
      hospitalList: [
        {
          id: 1,
          headImg: "https://img1.dxycdn.com/2019/1213/913/3384883214438322267-7.jpg!q80",
          title: "成都市温江区人民医院",
          level: "三级甲等",
          address: "四川省成都市温江区康泰路86号",
          bgImage:
            "https://ts1.cn.mm.bing.net/th/id/R-C.a4f8ac31165939c00314f5c8228aa66d?rik=wrPXT%2fgvn2NNLA&riu=http%3a%2f%2fpic.yishengyue.cn%2f202004201013111587348791298098489.jpg&ehk=xAR%2fuJyF8rp48RhKFOyxIWdDc9DrjKuUv3bw%2f7dUPLM%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          id: 2,
          headImg: "http://www.sc2zyy.com/images/logo.png",
          title: "四川省第二中医院",
          level: "三级甲等",
          address: "四川省第二中医医院位于成都市青羊区四道街20号",
          bgImage:
            "https://file.fh21static.com/fhfile1/M00/54/F4/ooYBAFlQtF-ACmvPAAKnr7mxOmc322.jpg",
        },
        {
          id: 3,
          headImg: "https://static.cd2120.com/images/logo.jpg",
          title: "成都市第二人民医院",
          level: "三级甲等",
          address: "四川省成都市庆云南街10号",
          bgImage:
            "https://www.liangrongwang.com/uploads/allimg/140818/1-140QP9243KF.jpg",
        },
        {
          id: 4,
          headImg: "https://www.416h.com/static/images/logo.jpg",
          title: "核工业416医院",
          level: "三级甲等",
          address: "成都市二环路北四段4号",
          bgImage:
            "https://bkimg.cdn.bcebos.com/pic/ae51f3deb48f8c5425ee28a330292df5e0fe7f79?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5",
        },
      ],
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    },
  },
  created() {
    document.title = "医院详情";
    this.id = this.$route.query.id;
    let obj = this.hospitalList.filter((i) => i.id == this.id)[0];
    this.hospitalData.icon = obj.headImg;
    this.hospitalData.name = obj.title;
    this.hospitalData.address = obj.address;
    this.hospitalData.bgImage = obj.bgImage;
    this.hospitalData.level = obj.level;
  },
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
.background-con{
  flex: 1;
}
.background-con img{
  height: 25vh;
}
.content-con {
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 15vh;
}
.card{
  background-color: white;
  border-radius: 10px;
  margin: 10px 15px;
  padding: 15px;
}
.card2{
  padding-top: 0;
}
.head-con1{
  display: flex;
  font-weight: 700;
  font-size: 14px;
  text-align: left;
}
.head-con1 > div > div{
  margin-bottom: 5px;
}
.hospital-icon{
  height: 41px;
  width: 41px;
  object-fit:cover;
  object-position: left;
  margin-right: 15px;
}
.indexPage {
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