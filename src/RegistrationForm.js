// RegistrationForm.js
import React, { useState } from 'react';
import { useTheme } from './ThemeContext'; // Import useTheme

const RegistrationForm = () => {
  const { theme } = useTheme(); // Get theme from context
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    errors: {},
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value, errors: {} }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!formState.email || !validateEmail(formState.email)) {
      errors.email = 'Valid email is required.';
    }
    if (!formState.password) {
      errors.password = 'Password is required.';
    }

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
    } else {
      console.log('Registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className={`${theme}`} // Apply theme class
          value={formState.email}
          onChange={handleChange}
        />
        {formState.errors.email && <p>{formState.errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className={`${theme}`} // Apply theme class
          value={formState.password}
          onChange={handleChange}
        />
        {formState.errors.password && <p>{formState.errors.password}</p>}
      </div>
      <button type="submit" className={theme}>Register</button>
    </form>
  );
};

export default RegistrationForm;
