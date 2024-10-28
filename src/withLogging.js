// withLogging.js
import React from 'react';

const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('WrappedComponent Mounted');
    }

    componentDidUpdate() {
      console.log('WrappedComponent Updated');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Example usage
const ExampleComponent = ({ message }) => {
  return <div>{message}</div>;
};

const LoggedExampleComponent = withLogging(ExampleComponent);

export default LoggedExampleComponent;
