<template>
  <div class="all">
    <div class="list-item">
      <img :src="setMealData.headImg" alt />
      <div>
        <div>
          <div class="list-item-title">{{ setMealData.title }}</div>
          <div>{{ hospitalData.address }}</div>
        </div>
        <div>
          <div class="price">￥{{ setMealData.price }}</div>
        </div>
      </div>
    </div>
    <img src="../assets/imagePage/page1.png" alt />
    <div class="head-con2">
      <i class="font-icon-address"></i>
      <div>{{ hospitalData.address }}</div>
    </div>
    <van-sticky :container="card2">
      <van-tabs v-model="type" title-active-color="rgb(248,216,0)" color="rgb(248,216,0)">
        <van-tab title="检测项目" name="1"></van-tab>
        <van-tab title="筛查疾病" name="2"></van-tab>
        <van-tab title="体检须知" name="3"></van-tab>
        <van-tab title="体检保障" name="4"></van-tab>
      </van-tabs>
    </van-sticky>
    <div class="writings-title"></div>
    <img src="../assets/imagePage/page2.jpg" alt="">
    <img src="../assets/imagePage/page3.png" alt="">
    <img src="../assets/imagePage/page4.png" alt="">
    <img src="../assets/imagePage/page5.png" alt="">
    <img src="../assets/imagePage/page6.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      type:'1',
      searchData: {
        type: "host",
        sortType: 1
      },
      setMealData: {
        id: 1,
        headImg:
          "https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/2/2/3/6/3/6/201812312133/pixta_31920516_M.jpg",
        title: "双人体检套餐",
        price: "3000",
        sign: "15个项目,筛查20个疾病,万元保障"
      },
      hospitalData: {
        icon: "",
        name: "",
        address: "",
        bgImage: "",
        setMealList: [
          {
            id: 1,
            headImg:
              "https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/2/2/3/6/3/6/201812312133/pixta_31920516_M.jpg",
            title: "双人体检套餐",
            price: "3000",
            sign: "15个项目,筛查20个疾病,万元保障"
          },
          {
            id: 2,
            headImg: "https://mimage.aflo.com/resources/category/10_1602.jpg",
            title: "入职体检套餐",
            price: "2299",
            sign: "13个项目,筛查9个疾病"
          },
          {
            id: 3,
            headImg:
              "https://suke-up.com/wp-content/uploads/2014/06/76620c36b56c7c8d3b6c16bf4a668fe5.jpg",
            title: "女性体检套餐",
            price: "2213",
            sign: "13个项目,筛查8个疾病"
          },
          {
            id: 4,
            headImg:
              "https://th.bing.com/th/id/R.b020e45cdffcfb235b3a2b430e67f022?rik=6xG654CzCO6EDQ&riu=http%3a%2f%2fpic4.nipic.com%2f20090811%2f2000112_180732049_2.jpg&ehk=CC0qPXUn%2fORD69hMecpRL7%2fBgHYiwsIv8AGPYuoKNN8%3d&risl=&pid=ImgRaw&r=0",
            title: "双人体检套餐(二)",
            price: "2945",
            sign: "6个项目,筛查3个疾病"
          },
          {
            id: 4,
            headImg:
              "https://th.bing.com/th/id/R.c3091eb5837dc4936ab82d42d0c2dd17?rik=5ABHM%2fTfitvWjg&riu=http%3a%2f%2fpic5.nipic.com%2f20100224%2f2000112_141940079862_2.jpg&ehk=ziE5j387wRCcrPrM0r%2fh4DZJMp%2bPr1do%2bDsfbObWBdo%3d&risl=&pid=ImgRaw&r=0",
            title: "单人体检套餐",
            price: "2939",
            sign: "20个项目,筛查24个疾病"
          }
        ]
      },
      setMealList: [
        {
          id: 1,
          headImg:
            "https://imgcp.aacdn.jp/img-a/800/auto/aa/gm/article/2/2/3/6/3/6/201812312133/pixta_31920516_M.jpg",
          title: "双人体检套餐",
          price: "3000",
          sign: "15个项目,筛查20个疾病,万元保障"
        },
        {
          id: 2,
          headImg: "https://mimage.aflo.com/resources/category/10_1602.jpg",
          title: "入职体检套餐",
          price: "2299",
          sign: "13个项目,筛查9个疾病"
        },
        {
          id: 3,
          headImg:
            "https://suke-up.com/wp-content/uploads/2014/06/76620c36b56c7c8d3b6c16bf4a668fe5.jpg",
          title: "女性体检套餐",
          price: "2213",
          sign: "13个项目,筛查8个疾病"
        },
        {
          id: 4,
          headImg:
            "https://th.bing.com/th/id/R.b020e45cdffcfb235b3a2b430e67f022?rik=6xG654CzCO6EDQ&riu=http%3a%2f%2fpic4.nipic.com%2f20090811%2f2000112_180732049_2.jpg&ehk=CC0qPXUn%2fORD69hMecpRL7%2fBgHYiwsIv8AGPYuoKNN8%3d&risl=&pid=ImgRaw&r=0",
          title: "双人体检套餐(二)",
          price: "2945",
          sign: "6个项目,筛查3个疾病"
        },
        {
          id: 4,
          headImg:
            "https://th.bing.com/th/id/R.c3091eb5837dc4936ab82d42d0c2dd17?rik=5ABHM%2fTfitvWjg&riu=http%3a%2f%2fpic5.nipic.com%2f20100224%2f2000112_141940079862_2.jpg&ehk=ziE5j387wRCcrPrM0r%2fh4DZJMp%2bPr1do%2bDsfbObWBdo%3d&risl=&pid=ImgRaw&r=0",
          title: "单人体检套餐",
          price: "2939",
          sign: "20个项目,筛查24个疾病"
        }
      ],
      hospitalList: [
        {
          id: 1,
          headImg:
            "https://img1.dxycdn.com/2019/1213/913/3384883214438322267-7.jpg!q80",
          title: "成都市温江区人民医院",
          level: "三级甲等",
          address: "四川省成都市温江区康泰路86号",
          bgImage:
            "https://ts1.cn.mm.bing.net/th/id/R-C.a4f8ac31165939c00314f5c8228aa66d?rik=wrPXT%2fgvn2NNLA&riu=http%3a%2f%2fpic.yishengyue.cn%2f202004201013111587348791298098489.jpg&ehk=xAR%2fuJyF8rp48RhKFOyxIWdDc9DrjKuUv3bw%2f7dUPLM%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          id: 2,
          headImg: "http://www.sc2zyy.com/images/logo.png",
          title: "四川省第二中医院",
          level: "三级甲等",
          address: "四川省第二中医医院位于成都市青羊区四道街20号",
          bgImage:
            "https://file.fh21static.com/fhfile1/M00/54/F4/ooYBAFlQtF-ACmvPAAKnr7mxOmc322.jpg"
        },
        {
          id: 3,
          headImg: "https://static.cd2120.com/images/footer-logo.png",
          title: "成都市第二人民医院",
          level: "三级甲等",
          address: "四川省成都市庆云南街10号",
          bgImage:
            "https://www.liangrongwang.com/uploads/allimg/140818/1-140QP9243KF.jpg"
        },
        {
          id: 4,
          headImg:
            "https://images3.viptijian.com/group1/M00/16/0E/dr6LkWBunSqAAqxDAAFVr4JwOwM283.jpg",
          title: "核工业416医院",
          level: "三级甲等",
          address: "成都市二环路北四段4号",
          bgImage:
            "https://file1.dxycdn.com/2019/0122/676/3324634072487413561-7.png"
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
    let setMeal = this.setMealList.filter(i => i.id == this.id)[0];
    this.hospitalData.icon = obj.headImg;
    this.hospitalData.name = obj.title;
    this.hospitalData.address = obj.address;
    this.hospitalData.bgImage = obj.bgImage;
    this.hospitalData.level = obj.level;
    this.setMealData = setMeal;
  }
};
</script>

<style scoped>
.all {
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column; */
  background-color: white;
}
.background-con {
  flex: 1;
}
.background-con img {
  height: 25vh;
}
.content-con {
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -7vh;
}
.card {
  background-color: white;
  border-radius: 10px;
  margin: 10px 15px;
  padding: 15px;
  position: relative;
}
.card2 {
  padding-top: 0;
}
.all >>> .van-sticky{
  box-shadow: 0 20px 20px 0px rgba(0, 0, 0, 0.05);
}
.head-con1 {
  display: flex;
  font-weight: 700;
  font-size: 14px;
  text-align: left;
}
.head-con1 > div > div {
  margin-bottom: 5px;
}
.head-con2 {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 30px;
  text-align: left;
  padding-left: 17px;
}
.head-con2 i {
  font-size: 22px;
  margin-right: 10px;
  color: rgb(191, 171, 115);
}
.hospital-icon {
  height: 41px;
  width: 41px;
  object-fit: cover;
  object-position: left;
  margin-right: 15px;
}
.indexPage {
  flex: 1;
}
.list-item {
  background-color: white;
  padding: 4.48vw;
  flex: 1;
  text-align: left;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.list-item > img {
  height: 130px;
  width: 130px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  margin-right: 15px;
}
.list-item:active {
  /* background-color: #409eff; */
  opacity: 0.8;
  /* color: white; */
}
.list-item > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-item-title {
  font-size: 17px;
  color: black;
  font-weight: 700;
  margin-bottom: 5px;
}
.price {
  font-size: 20px;
  color: rgb(241, 49, 47);
  font-weight: 700;
}
</style>