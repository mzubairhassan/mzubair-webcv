import React from "react";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js
const ProgressProvider = ({ valueStart, children }) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueStart);
  }, [valueStart]);

  return children(value);
};
export default ProgressProvider;
