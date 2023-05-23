import { axiosPrivateInstance } from "./axios";

export const AdminServices = {
  login: async (username: string, password: string) => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);
      const res = await axiosPrivateInstance.post("/auth/login", formData);
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
};
