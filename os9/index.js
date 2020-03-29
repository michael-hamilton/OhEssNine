// OhEssNine

import React, {Fragment} from 'react';
import Desktop from './desktop';
import Menu from './menu';
import Startup from './startup';

const OS9 = () => (
  <Fragment>
    <Startup />
    <Menu />
    <Desktop />
  </Fragment>
);

export default OS9;
