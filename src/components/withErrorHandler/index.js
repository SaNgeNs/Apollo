import React from 'react';

export function withErrorHandler(Component) {
  class WithErrorHandler extends React.Component {
    constructor() {
      super();

      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
      };
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        errorInfo: info,
      });
    }

    render() {
      const {
        hasError,
        error,
        errorInfo,
      } = this.state;

      if (hasError) {
        console.error('error: ', error);
        console.error('errorInfo: ', errorInfo);

        return null;
      }

      return <Component {...this.props} />;
    }
  }

  return WithErrorHandler;
}

export default withErrorHandler;
