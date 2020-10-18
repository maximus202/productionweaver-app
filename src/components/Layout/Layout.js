import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
