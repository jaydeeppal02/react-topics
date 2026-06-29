import { useState } from "react";

const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });
  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
