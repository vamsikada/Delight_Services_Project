import React from 'react';
import NameList from './NameList';
import LifecycleComponent from './LifecycleComponent';
import RegistrationForm from './RegistrationForm';
import { ThemeProvider, useTheme } from './ThemeContext'; 
import LoggedExampleComponent from './withLogging'; 

const AppContent = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const { toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Dark/White</button>
      <h1>Name List</h1>
      <NameList names={names} />

      <h1>Lifecycle Component</h1>
      <LifecycleComponent />

      <h1>Registration Form</h1>
      <RegistrationForm />

      <h1>Logged Example Component</h1>
      <LoggedExampleComponent message="Hello, this is a from HOC !" />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
