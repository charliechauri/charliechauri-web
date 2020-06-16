import React, { Component } from 'react';
import Link, { TargetTypes } from 'components/Link/Link';

export interface ErrorBoundaryProps {}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <section>
        <h1>Error</h1>
        <p>
          Something went wrong{' '}
          <span role="img" aria-label="disappointed face">
            😕
          </span>
          , please reload page
        </p>

        <Link href="#" target={TargetTypes.SELF}>
          Reload!
        </Link>
      </section>
    );
  }
}

export default ErrorBoundary;
