<template>
  <div class="app-switch">
    <div id="on" @click="switched(true)" :class="{active:value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>
<script>
  export default {
    props: [
      'value'
    ],
    methods: {
      switched(isOn) {
  
        this.$emit('input', isOn)
      }
    }
    
  }
</script>
<style>
  #on,
  #off {
    width: 30px;
    height: 20px;
    display: inline-block;
    padding: 2px;
    background-color: rosybrown;
    cursor: pointer;
    box-sizing: content-box;
    margin: 20px -2px;
    text-align: center;
  }

  #on:hover,
  #off:hover {
    background-color: royalblue;
  }

  #on:active,
  #off:active {
    background-color: violet;
  }
  #on:checked,
  #off:checked {
    background-color: violet;
  }
</style>