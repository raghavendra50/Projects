import axios from "../../../axios";
import { BASE_URL } from "../../../constants";
import toast from "react-hot-toast";
import { User } from "../../reduxStore/index.js";

const addUser = async (setLoading, navigate, dispatch, formData) => {
  try {
    setLoading(true);
    const response = await axios.post(`${BASE_URL}/user`, {
      formData: formData,
    });
    if (response.status == 200) {
      const data = { ...formData, isAuthenticated: true };
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      dispatch(User.setUser(data));
      navigate("/signup/plan");
    } else if (response.status == 409) {
      navigate("/signin");
      toast.error(response.data.message);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export default addUser;
