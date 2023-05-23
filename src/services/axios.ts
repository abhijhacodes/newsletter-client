import axios from "axios";

export const axiosPublicInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWSLETTER_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivateInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWSLETTER_API_URL}/api`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
