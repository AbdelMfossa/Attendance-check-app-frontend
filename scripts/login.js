import axios from "axios";
import Router from "next/router";

const handleSubmit = (data) => {
  const { email, password, session } = data;

  axios
    .post("users/signin", { email, password })
    .then((res) => {
      console.log(res);

      if (session) {
        localStorage.setItem("jwt", Object.values(res.data));
      }

      Router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default handleSubmit;
