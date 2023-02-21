<template>
  <div class="all">
    <div class="indexPage">
      <div>个人预约</div>
      <div>团体预约</div>
      <div>团体家属预约</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.all{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.indexPage {
  padding: 0 8vw;
  flex: 1;
}
.white-background,
.indexPage > div {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.1);
  padding: 4.48vw;
  flex: 1;
  margin: 40px 0;
}
.indexPage > div:active{
  background-color: #409eff;
  color: white;
}
</style>