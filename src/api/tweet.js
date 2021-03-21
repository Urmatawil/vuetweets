import { v4 as uuidv4 } from "uuid";
import {TWEETS} from "../utils/constants"

export const saveTweetsApi = (tweet,username) => {
    const tweets = getTweetsApi();

    if(tweets.length===0){
        console.log("nuevo")
        const tweetData = [
            {
            id: uuidv4(),
            tweet,
            username,
            created: new Date(),
            },
        ];
        localStorage.setItem(TWEETS, JSON.stringify(tweetData) )
    } else {
        console.log("añadir")
        tweets.push({
            id: uuidv4(),
            tweet,
            username,
            created: new Date(),
        })
        localStorage.setItem(TWEETS, JSON.stringify(tweets) )
    }
}

export function getTweetsApi() {
    const tweetsLocalStorage = localStorage.getItem(TWEETS);
    if(tweetsLocalStorage) {
        return JSON.parse(tweetsLocalStorage)
    }
    return []
}