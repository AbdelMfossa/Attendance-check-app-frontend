import axios from "axios";
import Router from "next/router";

const handleSubmit = (data) => {

  // axios.post("http://192.168.1.104:8000/api/users/signin", data)
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      const { email, password, session } = data;

      if (session) {
        document.cookie = `email=${email}; path=/; max-age=80600`;
      } else {
        document.cookie = "email=; path=/;";
      }

      Router.push("/");
    })
    .catch(err => {
      console.log(err)
    })
}

export default handleSubmit;
