<template>
  <div class="container">
      <h1 class="text-center mb-4">Tweets</h1>
      <p v-if="tweets.length===0">No hay tweets</p>
      <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
          <p class="tweet__title">{{tweet.username}}</p>
          <p class="tweet__text">{{tweet.tweet}}</p>
          <span>{{formDate(tweet.created)}}</span>
          <Close @click="deleteTweet(tweet.id)"/>
      </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es";
import {Close} from "./icons/index";
import {deleteTweetApi} from "../api/tweet"

export default {
    props: {
        tweets: Array,
        reloadTweets: Function,
    },
    components: {
        Close,
    },
    setup(props){

        const formDate = date => moment(date).fromNow();

        const deleteTweet = idTweet => (deleteTweetApi(idTweet),props.reloadTweets())

        return {
            formDate,
            deleteTweet,
        }
    }  
}
</script>

<style lang="scss">

.tweet {
    position: relative;
    border: 0.5px solid #ccc;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

p {
    margin: 0;
}

&__title {
    position: absolute;
    top: -15px;
    left: 10px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
    color: #111;
}

&__text {
    color: gray;
}

span{
    position: absolute;
    bottom: -9px;
    right: 10px;
    font-size: 12px;
    color: gray;
    background-color: #fff;
    padding: 0 10px;
    border: 0.5px solid #ccc;
    border-radius: 6px;
}

svg {
    width: 20px;
    height: 20px;

    &:hover {
        cursor: pointer;
        color: red;
    }
}
}
</style>