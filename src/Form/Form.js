import { useState } from "react";

export default function Form(props) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(location);
    setLocation("");
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="form">
      <form className="form form-main" onSubmit={handleSubmit}>
        <label htmlFor="location">Location: </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={handleChange}
        />
        <input type="submit" value="Get weather info" />
      </form>
    </div>
  );
}
