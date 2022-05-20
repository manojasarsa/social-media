import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Chris",
    lastName: "Levin",
    userName: "chrislevin22",
    password: "chrislevin@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    profilePicture: "",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Veronica",
    lastName: "Dane",
    userName: "veron_d12",
    password: "veron_d12",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    profilePicture: "",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    profilePicture: "",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    website: "",
    profilePicture: "",
    followers: [],
    following: [],
  },
];
