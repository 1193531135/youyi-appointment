<template>
  <div class="all">
    <div class="notic">
      <i class="font-icon-tishi"></i>
      身份信息将用于您的预约体检，不会提供泄露给任何第第三方
    </div>
    <div class="input-con">
      <van-field label="姓名" v-model="name" />
      <van-field label="身份证号" v-model="idCard" />
      <van-field label="手机号" v-model="iphoneNumber" />
    </div>
    <div class="end-btn" @click="save">保存</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      idCard: "",
      iphoneNumber: "",
    }
  },
  methods:{
    save(){
        this.$Toast.success('保存成功');
    }
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
  background-color: white;
}
.input-con{
    flex: 1;
}
.notic {
  color: rgb(25, 137, 250);
  background-color: rgb(236, 249, 255);
  text-align: left;
  padding: 15px 30px;
}
.input-con {
  padding: 0 10px;
  margin-top: 30px;
}
.end-btn{
    width: 70%;
    border-radius: 40px;
    height: 40px;
    color: white;
    background-color: rgb(48, 197, 142);
    margin: 20px auto;
    display: flex;
    justify-content: center;
    font-weight: 800;
    align-items: center;
}
</style>