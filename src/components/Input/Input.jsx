import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label htmlFor={name} className="inputcomponent-label">
        {label}
      </label>
      <input
        className="input-field"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
