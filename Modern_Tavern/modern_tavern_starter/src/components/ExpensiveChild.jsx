const ExpensiveChild = ({ state1 }) => {
  console.log("ExpensiveChild rendered");

  // Simulate an expensive calculation
  const expensiveCalculation = () => {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  };

  expensiveCalculation();

  return (
    <div className="expensiveWrapper">
      <h2>Expensive Child Component</h2>
      <p>{state1}</p>
    </div>
  );
};

export default ExpensiveChild;
