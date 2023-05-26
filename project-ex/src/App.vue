<template>
  <div>
    <TheMenu></TheMenu>
  </div>
</template>

<script>
  import TheMenu from '@/components/general/TheMenu.vue'

  export default{
    components: {
      TheMenu
    }
  }
</script>

<style lang="scss">
 
  @import '@/scss/app.scss';
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  * {
    font-family: 'Poppins', sans-serif;
  }

  .icon_action {
    cursor: pointer;
  }

</style>
