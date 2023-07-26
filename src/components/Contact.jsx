import "../App.css"
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform validation
        let errors = {};
    
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
        }
    
        if (!formData.message) {
          errors.message = 'Message is required';
        }
    
        setErrors(errors);
    }
  return (
    <div className="contactRapper">
      <h1>Talk to me baby</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
