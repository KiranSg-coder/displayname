import React, { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const submitForm = () => {
    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setFullName(`Full Name: ${fullName}`);
    } else {
      alert("Please fill in both fields before submitting.");
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <br />

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>

      <p>{fullName}</p>
    </div>
  );
};

export default NameForm;
