import axios from "axios";

export const axiosPublicInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWSLETTER_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosLoginInstance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWSLETTER_API_URL}/api`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const axiosPrivateInstance = (accessToken: string) =>
  axios.create({
    baseURL: `${import.meta.env.VITE_NEWSLETTER_API_URL}/api`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
