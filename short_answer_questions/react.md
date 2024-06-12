# React Short Answer Questions

## Question 1

You have a large single page application (SPA) which has several routes that contains a lot of JavaScript - as a result, the bundle size of the entire application is very large. Users have noted that the application is slow to initially load but once the first render happens, it seems to be working fine.

A number of users have reported this occurrence happening and you want to investigate. Knowing that we have a SPA, and multiple routes, what would you propose to optimize this application?

## Question 2

You need to create a modal that appears above all other content on the page, even if it's nested within other components. Explain how you would build this feature.

## Question 3

Explain how to create and use a Context in a React application. Include code for creating a context provider and consuming the context in a child component.

## Question 4

GameHive Studios (client) has approached us to enhance their game application with a new feature. Specifically, they want to manage global player settings such as theme (light/dark) and language preferences throughout the application. Your colleague suggested using the Context API to store and manage these settings.

While the Context API solves many state management problems, it also has some downsides, especially when it comes to performance and preventing unnecessary re-renders.

Your challenge, should you choose to accept it, is to identify the downsides of using the Context API and implement strategies to optimize the performance of components that consume context values.

### Part 1

What are the downsides of using the Context API as a global state manager in a React application? Discuss issues related to performance, re-renders, and scalability.

### Part 2

Given the potential downsides of the Context API, how would you optimize the performance of a component that consumes context values to prevent unnecessary re-renders? Provide a detailed explanation and a code example.
