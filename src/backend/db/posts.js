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
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "veron_d12",
    createdAt: formatDate(),
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Programming is a game of persistence where devs usually mindlessly scroll google/stackoverflow/github smashing ctrl-c ctrl-v until a new bug appears because we love pain.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "stuart_99",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I'm finally going to build my own website with a blog! Send the coolest personal websites that you've seen.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        content: "https://veronicane.info",
        id: uuid(),
        username: "veron_d12",
        createdAt: formatDate()
      }
    ],
    username: "stuart_99",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Yesterday, I received around 135+ emails from people exploring career opportunities with us, Do yourself a favour and learn excellent e-mail writing skills. You can beat 99% of your immediate competition if pitching to Startups.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "chrislevin22",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
