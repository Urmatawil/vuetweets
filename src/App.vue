<template>
<!--agregamos la funcion de abrir y cerrar al menu-->
 <Menu :openForm="openForm" :showForm="showForm"/>
 <!--agregamos la funcion showform al componente TweetForm -->
 <TweetForm :showForm="showForm" />
</template>

<script>
import Menu from './components/menu.vue'
import TweetForm from './components/tweetform'
import useFormTweets from './hooks/useFormTweets'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
  },
  setup(){
    return{
      //sacamos las funciones de useFormTweets con spread operator
      ...useFormTweets(),
    }
  }
}
</script>

<style lang="scss">

</style>
