import axios from "../../../axios";
import { BASE_URL } from "../../../constants";
import { User } from "../../reduxStore/index.js";

const updateUser = async (setLoading, navigate, dispatch, plan) => {
  const modifiedPlan = (({ monthlyPrice, resolution, devicesAtSameTime }) => ({
    monthlyPrice,
    resolution,
    devicesAtSameTime,
  }))(plan);
  const email = localStorage.getItem("email");
  try {
    setLoading(true);
    const authToken = localStorage.getItem("authToken");
    const response = await axios.put(
      `${BASE_URL}/user`,
      {
        plan: modifiedPlan,
        email: email,
      },
      { headers: { "Authorization": authToken } }
    );
    if (response.status == 200) {
      dispatch(User.setUser({ plan: modifiedPlan }));
      navigate("/signup/payment");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export default updateUser;
