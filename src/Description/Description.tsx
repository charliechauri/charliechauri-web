import React, { FunctionComponent } from 'react';

import './Description.scss';

export interface DescriptionProps {}

const Description: FunctionComponent<DescriptionProps> = () => (
  <section className="description">
    <p>
      I'm a <mark>Software Engineer</mark> with experience in different
      industries (travel technology, human resources, legal services and energy)
      with global projects and remote teams.
    </p>
  </section>
);

export default Description;
