import axios from "axios";
import { param } from "jquery";
import { useEffect } from "react";
import { parseCookie } from "../../api/client-request";

export default function Homepage() {
  useEffect(async () => {
    try {
      const head = {
        ContentType: "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      };
      await axios.get("users/currentuser").then((res) => {
        console.log(res);
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <h1> Loading...</h1>
    </>
  );
}
