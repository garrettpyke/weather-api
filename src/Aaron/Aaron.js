import { useState, useEffect } from "react";
import welcome_img from "../images/styling/home_graphic_short.jpg";

export default function Aaron({ handleSubmit }) {
  const [broLocation, setBroLocation] = useState("98274");
  const [insult, setInsult] = useState("");

  // const insultUrl = '(placeholder for insult url)'

  useEffect(() => {
    handleSubmit(broLocation);
  }, [broLocation]);

  // useEffect(() => {
  //     fetch(insultUrl)
  //     .then((result) => result.json())
  //     .then((data) => {setInsult(data)})
  // }, [insult])
  // console.log(insult)

  return (
    <div className="home home-aaron">
      <img src={welcome_img} alt="welcome image" />
      <h2>to my weather API app!</h2>
      <div className="bro-div"></div>
    </div>
  );
}
