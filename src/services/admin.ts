import { isTokenExpired } from "../utils/helpers";
import { axiosLoginInstance, axiosPrivateInstance } from "./axios";

export const AdminServices = {
  login: async (username: string, password: string) => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);
      const res = await axiosLoginInstance.post("/auth/login", formData);
      const data = JSON.parse(JSON.stringify(res.data));

      if (data.status_code === 200) {
        return {
          success: true,
          message: "Logged in successfully!",
          access_token: data.access_token,
        };
      }
      return { success: false, message: data.detail };
    } catch (error: any) {
      return { success: false, message: error.response.data.detail };
    }
  },

  publish: async (
    title: string,
    body: string,
    includeSubscribeLink: boolean,
    accessToken: string
  ) => {
    try {
      if (!accessToken || isTokenExpired(accessToken)) {
        return {
          success: false,
          authExpired: true,
          message: "Your auth has expired, please login again to continue",
        };
      }
      const reqBody = {
        title,
        body,
        published_by: "abhi.jha.cs@gmail.com",
        include_unsubscribe_link: includeSubscribeLink,
      };
      const res = await axiosPrivateInstance(accessToken).post(
        "/newsletters/publish",
        reqBody
      );
      const data = JSON.parse(JSON.stringify(res.data));

      if (data.status_code === 200) {
        return { success: true, message: data.message };
      }
      return { success: false, message: data.detail };
    } catch (error: any) {
      return { success: false, message: error.response.data.detail };
    }
  },
};
