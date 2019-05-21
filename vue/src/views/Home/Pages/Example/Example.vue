<template>
  <div class="example">
    <mt-search autofocus v-model="searchText" :result="searchResult"></mt-search>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Example",
    data(){
     return{
       searchText:"",
       defaultResult: [
         'Apple',
         'Banana',
         'Orange',
         'Durian',
         'Lemon',
         'Peach',
         'Cherry',
         'Berry',
         'Core',
         'Fig',
         'Haw',
         'Melon',
         'Plum',
         'Pear',
         'Peanut',
         'Other'
       ]
     }
    },
    computed:{
      searchResult(){
        return this.defaultResult.filter(value => new RegExp(this.searchText, 'i').test(value));
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
