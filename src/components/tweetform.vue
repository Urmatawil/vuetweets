<template>
    <div class="tweet-form container" :class="{open:showForm}">
        <form @submit.prevent="sendTweet">
            <!--agregamos una clase dinamica que se activa cuando showform sea verdadero-->
            <input type="text" class="form-control" placeholder="Tu nombre" v-model="username" >
            <textarea class="form-control" rows="3" placeholder="Escribe tu tweet" v-model="tweet"></textarea>
            <button type="submit" class="btn btn-primary">
                Enviar
            </button>
        </form>
    </div>
  
</template>

<script>
import {ref} from "vue"
import {saveTweetsApi} from "../api/tweet"

export default {
    //importamos el el showform como booleano
    props:{
        showForm: Boolean,
    },

    setup() {
        let username = ref("");
        let tweet = ref("")
        
        const sendTweet = () => {
            saveTweetsApi(tweet.value, username.value)
        }
        return {sendTweet, username, tweet}
    }
}

</script>

<style lang="scss" scoped>

.tweet-form {
    margin-top: 20px;
    height: 0;
    overflow: hidden;

    &.open {
        height: auto;
    }

    form {
        margin-bottom: 50px;

        input {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            margin-top: 10px;
        }
    }
}

</style>