import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "@ant-design/pro-layout/dist/layout.css";
import Main from "./Pages/Main";
import { HashRouter as Router, Route } from "react-router-dom";
import en_GB from "antd/lib/locale/en_GB";
import { ConfigProvider } from "antd";
import history from "./history";

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Main}></Route>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <ConfigProvider locale={en_GB}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
