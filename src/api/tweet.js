import { v4 as uuidv4 } from "uuid";
import {remove} from "lodash"
import {TWEETS} from "../utils/constants";


export const saveTweetsApi = (tweet,username) => {
    const tweets = getTweetsApi();

    if(!tweets.length){
        const tweetData = [
            {
            id: uuidv4(),
            tweet,
            username,
            created: new Date(),
            },
        ];
        localStorage.setItem(TWEETS, JSON.stringify(tweetData))
    } 
    else 
    {
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            created: new Date(),
        })
        localStorage.setItem(TWEETS, JSON.stringify(tweets))
    }
}

export function getTweetsApi() {
    const tweetsLocalStorage = localStorage.getItem(TWEETS);
    if(tweetsLocalStorage) {
        return JSON.parse(tweetsLocalStorage)
    }
    return []
}

export function deleteTweetApi(idTweet) {
    const tweets = getTweetsApi();

    remove(tweets, tweet => tweet.id === idTweet);
    localStorage.setItem(TWEETS, JSON.stringify(tweets))
}