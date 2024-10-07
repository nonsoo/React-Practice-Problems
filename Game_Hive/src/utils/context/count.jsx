import { useState } from "react";

const CountProvider = ({ children }) => {
  const { count, setCount } = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count >= 0) {
      setCount((prev) => prev - 1);
    }
  };
  return <div>{children}</div>;
};

export default CountProvider;
