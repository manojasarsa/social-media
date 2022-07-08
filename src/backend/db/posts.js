import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The more I talk to founders and builders, the more I realise that the market is huge and there is so much opportunity to create an impact.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/kg2l47k0/sticker/q/a/z/startup-concept-portrait-peel-stick-vinyl-wall-sticker-54inch-x-original-imafwdts5nfzhxb7.jpeg?q=70",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "veron_d12",
    createdAt: "12:00 PM May 15, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Feel like it's too late? Life has passed you by – your dream is gone? Too many awful things have happened to you or you’ve made too many mistakes? In this 100th episode of the podcast, I explore these questions and will teach you how to have hope again. Join: http://lucy_st4.com/podcast",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/kehfi4w0-0/poster/y/f/m/medium-408-keep-calm-poster-sticker-for-wall-12x18-inch-multi-original-imafv5qn9kbqbwzb.jpeg?q=70",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lucy_st4",
    createdAt: "09:23 AM December 31, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Programming is a game of persistence where devs usually mindlessly scroll google/stackoverflow/github smashing ctrl-c ctrl-v until a new bug appears because we love pain.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/k3dc7m80/sticker/7/c/3/computer-programming-languages-motivational-inspirational-original-imafmgmav7cnyz6d.jpeg?q=70",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rachel_dy3",
    createdAt: "10:09 PM August 01, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I'm finally going to build my own website with a blog! Send the coolest personal websites that you've seen.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        content: "Here is mine build with HTML, CSS and JS: https://veronicane.info",
        _id: uuid(),
        username: "veron_d12",
        createdAt: ""
      }
    ],
    username: "stuart_99",
    createdAt: "04:32 PM October 10, 2019",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Yesterday, I received around 135+ emails from people exploring career opportunities with us. Do yourself a favour and learn excellent e-mail writing skills. You can beat 99% of your immediate competition if pitching to Startups.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/jupu7ww0/poster/g/c/g/large-8704-stop-surfing-start-writing-motivational-poster-original-imaffr7zqpyt9wjb.jpeg?q=70",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "chrislevin22",
    createdAt: "06:00 AM January 23, 2018",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Chase the vision, not the money, the money will end up following you.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/k0flmkw0/poster/e/r/a/large-chase-the-vision-motivational-poster-107136-original-imafj9r6pxtffxmu.jpeg?q=70",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "chrislevin22",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/k5r2mq80/poster/z/a/g/large-learn-from-yesterday-live-motivational-gym-poster-premium-original-imafgmhbxd4xvtue.jpeg?q=70",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rachel_dy3",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/jtltw280/poster/g/7/w/large-5191-ok-monday-lets-do-it-wall-poster-sticker-for-bedroom-original-imafeqhfgnzekfsc.jpeg?q=70",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "stuart_99",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/poster/g/j/4/medium-inephos-00349-inephos-happiness-poster-original-imaermfc4a8jwzc7.jpeg?q=70",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "veron_d12",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I get a lot of letters from people. They say, I want to be a writer. What should I do? I tell them to stop writing to me and get on with it.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/jua4djk0/poster/z/4/7/medium-ainan-m03-writers-motivational-quotes-posters-for-bedroom-original-imafffxhdxafawds.jpeg?q=70",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lucy_st4",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
    postImageUrl: "https://rukminim1.flixcart.com/image/416/416/k0tw13k0/poster/8/t/g/medium-motivational-quotes-wall-frame-frame-3009-original-imafkgzh3zn5kkwg.jpeg?q=70",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "chrislevin22",
    createdAt: "05:23 PM August 15, 2020",
    updatedAt: formatDate(),
  },
];
