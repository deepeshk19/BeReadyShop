import axios from "axios";

export const checkLoginStatus = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/login/status", {
      withCredentials: true, // ✅ Ensures cookies are sent
    });

    console.log("Login Status Response:", response.data);

    if (response.data.isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", response.data.email);
      return response.data.email;
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      return null;
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    return null;
  }
};
