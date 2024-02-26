import "./styles.css";
import { Children, useState } from "react";

import Feedback from "../../components/Feedback/Feedback";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { profile } from "../../components/ProfileCard/data";

function Homework21() {
  // // Создаем state для likes
  // const [likes, setLikes] = useState(0);
  // // Создаем state для dislikes
  // const [dislikes, setDislikes] = useState(0);

  // // Создаем функцию, которая будет увеличивать likes на 1
  // const onLike = () => {
  //   setLikes((prevValue) => {
  //     return prevValue + 1;
  //   });
  // };

  // // Создаем функцию, которая будет увеличивать dislikes на 1
  // const onDislike = () => {
  //   setDislikes((prevValue) => prevValue + 1);
  // };

  // // Создаем функцию, которая будет сбрасывать все результаты
  // const resetResults = () => {
  //   setLikes(0);
  //   setDislikes(0);
  // };

  const profile = {
    src: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    firstName: "Homer",
    lastName: "Simpson",
    career: "Nuclear Safety Inspector",
    hairColor: "Black",
    hobby: "Drink beer Duff",
  };

  return (
    <div className="homework21-wrapper">
      {/* <Feedback
        likes={likes}
        dislikes={dislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
      <div> */}
      {/* <div>
        <Input
          id="exampleId"
          name="exampleName"
          placeholder="Enter..."
          label="name"
          type="text"
        />
      </div> */}
      {/* <div>
        <LoginForm />
      </div> */}
      <div>
        <ProfileCard profileData={profile} imgSrc={profile.src} />
      </div>
    </div>
  );
}

export default Homework21;
