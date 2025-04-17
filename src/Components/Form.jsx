import React, { useState } from "react";
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    completed: "no",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    // Validate required fields
    if (!formData.id || !formData.title) {
      <p> ID and Title are required </p>;
      return;
    }
    // Pass data to the parent component
    if (onSubmit) {
      console.log("Form submitted:", formData);
      onSubmit(formData);
    }
    // Reset form
    setFormData({ id: "", title: "", completed: "no" });
  };
  return (
    <form onSubmit={handleSubmit} role="form">
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <fieldset>
          <legend>Completed:</legend>
          <label htmlFor="completedYes">
            <input
              type="radio"
              id="completedYes"
              name="completed"
              value="yes"
              checked={formData.completed === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label htmlFor="completedNo">
            <input
              type="radio"
              id="completedNo"
              name="completed"
              value="no"
              checked={formData.completed === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </fieldset>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
