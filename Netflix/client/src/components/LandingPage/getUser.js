import axios from "../../../axios";
import { BASE_URL } from "../../../constants";
const getUser = async (setLoading, navigate, email) => {
  try {
    setLoading(true);
    const response = await axios.get(`${BASE_URL}/user?email=${email}`);
    if (response.status == 200) {
      navigate("/signin");
    } else if (response.status == 404) {
      localStorage.setItem("email", email);
      navigate("/signup");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export default getUser;
