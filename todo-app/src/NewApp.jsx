import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TodoList from "./user/TodoList";
import AddTodo from "./user/AddTodo";
import ErrorPage from "./user/error-page";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-user",
    element: <AddTodo />,
  },
]);

// Define the Higher-Order Component

function withLogger(WrappedComponent) {
  // Return a new component

  return function (props) {
    return props.name === "World" ? (
      <div>
        <WrappedComponent {...props} />
        <button>ADD</button>
      </div>
    ) : (
      <div>Invalid credentials</div>
    );
    // return <WrappedComponent {...props} />;
  };
}

// Example component to be wrapped
function MyComponent(props) {
  return (
    <div new="New world">
      Hello, {props.name}!
      <input
        type="text"
        placeholder="enter name"
        className="border border-black"
      />
    </div>
  );
}

// Wrap MyComponent with the Higher-Order Component
const EnhancedComponent = withLogger(MyComponent);

/* <RouterProvider router={router} /> */
function NewApp() {
  return <EnhancedComponent name="World" text="123" />;
}

export default NewApp;
