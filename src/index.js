import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import ErrorPage from './error-page';
import Login from './routes/Login';
import Register from './routes/Register';
import {ContactList, loader as ContactListLoader} from './routes/ContactList';
import Contact from "./components/Contact";
import LoginLine from './components/LoginLine';
import LoginGoogle from './components/LoginGoogle';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    children: [
      {
        path: "line",
        element: <LoginLine />,
      },
      {
        path: "google",
        element: <LoginGoogle />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "contacts",
    element: <ContactList />,
    loader: ContactListLoader,
    children: [
      {
        path: ":contactId",
        element: <Contact />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
