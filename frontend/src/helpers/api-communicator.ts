import axios from "axios";
import axiosRetry from "axios-retry";

// Set up axios to retry on 429 status code with exponential backoff
axiosRetry(axios, {
  retries: 3, // Number of retry attempts
  retryCondition: (error) => {
    // Retry on 429 status code
    console.log("retryCondition ran");
    return error.response ? error.response.status === 429 : false;
  },
  retryDelay: (retryCount) => {
    // Exponential backoff strategy
    console.log("retryDelay ran");
    return axiosRetry.exponentialDelay(retryCount);
  },
});

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  } else {
    const data = await res.data;
    return data;
  }
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  } else {
    const data = await res.data;
    return data;
  }
};

export const sendChatRequest = async (message: string) => {
  try {
    const res = await axios.post("/chat/new", { message });
    if (res.status !== 200) {
      const errorMessage = res.data?.message || "Unable to send chat";
      throw new Error("Unable to send chat, error: " + errorMessage);
    }
    return res.data;
  } catch (error) {
    // Log the error or handle it as needed
    console.error("Error sending chat request:", error);
    throw error; // Rethrow to allow caller to handle it as well
  }
};
