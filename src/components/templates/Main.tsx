import React, { FunctionComponent } from 'react';

interface Props {
  meta: JSX.Element;
}

// FIXME: Dummy Main component - just to make build pass
// this component has been imported in "src/pages/about.tsx" and "src/pages/index.tsx"
const Main: FunctionComponent<Props> = ({ children }) => <div>{children}</div>;

export { Main };
