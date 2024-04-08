// api.js
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [404, 409].includes(error.response.status)) {
      // Handle 404 response here
      return Promise.resolve(error.response); // Prevent Axios from treating 404 as an error
    }
    return Promise.reject(error);
  }
);

export default axios;
