import { axiosInstance } from "./axios";

export const NewsletterServices = {
  subscribe: async (email: string) => {
    try {
      const reqBody = { email };
      const res = await axiosInstance.post("/subscriptions/subscribe", reqBody);
      const data = JSON.parse(JSON.stringify(res.data));

      if (data.status_code === 200) {
        return { success: true, message: data.message };
      }
      return { success: false, message: data.detail };
    } catch (error: any) {
      return { success: false, message: error.response.data.detail };
    }
  },

  unsubscribe: async (subscriptionId: string) => {
    try {
      const res = await axiosInstance.delete(
        `/subscriptions/unsubscribe/${subscriptionId}`
      );
      const data = JSON.parse(JSON.stringify(res.data));

      if (data.status_code === 200) {
        return { success: true, message: data.message, email: data.email };
      }
      return { success: false, message: data.detail };
    } catch (error: any) {
      return { success: false, message: error.response.data.detail };
    }
  },
};
