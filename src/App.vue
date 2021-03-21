<template>
 <Menu :openForm="openForm" :showForm="showForm"/>
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

    const reloadTweets = () => tweets.value = getTweetsApi().reverse()

    return{
      ...useFormTweets(),
      tweets,
      reloadTweets,
    }
  }
}
</script>

<style></style>
