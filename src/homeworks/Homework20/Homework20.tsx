import { v4 } from "uuid";

import "./styles.css";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = true;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = [
    "JavaScript",
    "Python",
    "Machine Learning",
    "Java",
    "C++",
  ];

  // Мэпим массив и возвращаем массив JSX элементов в константу langsElements
  const langsElements = programLangs.map((lang: string) => {
    return (
      <li key={v4()} className="program-lang">
        {lang}
      </li>
    );
  });

  return (
    <div className="homework20-wrapper">
      <div className="card">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{isManager ? "Manager" : "Employee"}</p>
        <p>Job: {job}</p>
        <p>Experience: {experience} years</p>
        <p>Email: {email}</p>
        {/* <p>Program Languages: {programLangs.join(", ")}</p> */}
        <p className="card-info card-info-name">Program laguages: </p>
        <ul className="langs-list">
          {/* Однотипная верстка */}
          {/* <li className="program-lang">{programLangs[0]}</li>
          <li className="program-lang">{programLangs[1]}</li>
          <li className="program-lang">{programLangs[2]}</li> */}
          {langsElements}
        </ul>
      </div>
    </div>
  );
}

export default Homework20;
