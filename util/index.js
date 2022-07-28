require("dotenv").config();
// import { TwitterApi } from "twitter-api-v2";
const { TwitterApi } = require("twitter-api-v2");

const axios = require("axios")
// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

async function getTweet() {
  // const tweet = await roClient.v2.singleTweet("1541550653243269123", {
  //   expansions: ["entities.mentions.username", "in_reply_to_user_id"],
  // });
  // return tweet;

  const user = await roClient.v2.userByUsername("latinocodernyc", {
    "user.fields": ["profile_image_url"],
  });

  //  const userProfilePic = await axios
  //    .get(
  //      "https://api.twitter.com/2/users/by?usernames=twitterdev,twitterapi,adsapi&user.fields=created_at&expansions=pinned_tweet_id&tweet.fields=author_id,created_at",
  //      {
  //        headers: {
  //          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}}`,
  //        },
  //      }
  //    )
  //    .then((res) => {
  //      console.log(res.data);
  //    })
  //    .catch((err) => {
  //      console.log(err);
  //    });


            return user;

  
}
// async function multipleTweets() {
//     const tweetss = await roClient.v2.tweets(['1541550653243269123', '1542521246100754434']);
//     return tweetss
// }

module.exports = getTweet
// module.exports = multipleTweets;
