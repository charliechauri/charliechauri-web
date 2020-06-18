import React, { Component } from 'react';

import { withTranslation, WithTranslation } from 'react-i18next';

import Link, { TargetTypes } from 'components/Link/Link';
import Heading, { Levels } from 'components/Heading/Heading';

export interface ErrorBoundaryProps extends WithTranslation {}

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

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { t } = this.props;
    const emojiDescription = t('error_emoji_description');
    const errorMessage = t('error_message');
    const errorButtonMessage = t('error_button');

    return (
      <section>
        <Heading level={Levels.ONE} locKey="error_heading" />
        <p>{errorMessage}</p>
        <p>
          <span role="img" aria-label={emojiDescription}>
            😕
          </span>
        </p>

        <Link href="#" target={TargetTypes.SELF}>
          {errorButtonMessage}
        </Link>
      </section>
    );
  }
}

export default withTranslation()(ErrorBoundary);
