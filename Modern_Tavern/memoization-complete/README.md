# Memoization

The Modern Tavern has approached us to optimize their restaurant application. They have a parent component that holds two pieces of state, and an expensive child component that performs complex calculations. One of the states from the parent component is passed down as a prop to the child component and whenever we click any of the buttons, the UI takes a long time to update. We need to optimize the child component to ensure it only re-renders when its props change.

Your colleague started working on this feature but has been pulled away for an urgent issue and has passed the task on to you.

Your challenge, should you choose to accept it, is to optimize the child component to prevent unnecessary re-renders.

> The components are located within the `./src` folder
