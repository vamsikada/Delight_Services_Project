// LifecycleComponent.js
import React from 'react';
import { useTheme } from './ThemeContext'; // Import useTheme

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component Mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { theme } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={this.increment} className={theme}>Increment</button>
      </div>
    );
  }
}

// Wrap LifecycleComponent in HOC to pass theme as prop
const WithThemeLifecycleComponent = () => {
  const { theme } = useTheme();
  return <LifecycleComponent theme={theme} />;
};

export default WithThemeLifecycleComponent;
