import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/styles.scss";

import MeetingProvider from "./context/MeetingContext";
import TopicProvider from "./context/TopicContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MeetingProvider>
        <TopicProvider>
          <App />
        </TopicProvider>
      </MeetingProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
