import "./styles.css";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = true;
  let experience: number = 5;
  let email: string = "john.doe@google.com";
  let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

  return (
    <div className="card">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{isManager ? "Manager" : "Employee"}</p>
      <p>Job: {job}</p>
      <p>Experience: {experience} years</p>
      <p>Email: {email}</p>
      <p>Program Languages: {programLangs.join(", ")}</p>
    </div>
  );
}

export default Homework20;
