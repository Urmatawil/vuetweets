<template>
<!--agregamos la funcion de abrir y cerrar al menu-->
 <Menu :openForm="openForm" :showForm="showForm"/>
 <!--agregamos la funcion showform al componente TweetForm -->
 <TweetForm :showForm="showForm" :openForm="openForm" :reloadTweets="reloadTweets"/>
 <List :tweets="tweets" :reloadTweets="reloadTweets"/>
</template>

<script>
import {ref} from "vue"
import Menu from './components/menu.vue'
import TweetForm from './components/tweetform'
import useFormTweets from './hooks/useFormTweets'
import List from './components/list.vue'
import {getTweetsApi} from './api/tweet'

export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    List,
  },
  setup(){
    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse()
    }

    return{
      //sacamos las funciones de useFormTweets con spread operator
      ...useFormTweets(),
      tweets,
      reloadTweets,
    }
  }
}
</script>

<style></style>
