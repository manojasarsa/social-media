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
