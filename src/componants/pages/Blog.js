import React from "react";

import "../../styles/pages/Blog.css";
import PageTitle from "../../styles/Shared/PageTitle";

const Blog = () => {
  return (
    <div>
      <PageTitle title={"Blogs"}></PageTitle>
      <h1 className="table-header">
        Q.No 1: Difference Between Node Js And JavaScript
      </h1>
      <table id="table-container">
        <tr>
          <th>S.No</th>
          <th>Node JS</th>
          <th>JavScript</th>
        </tr>
        <tr>
          <td>1</td>
          <td>NodeJS is a Javascript runtime environment.</td>
          <td>
            Javascript is a programming language that is used for writing
            scripts on the website.
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            We can run Javascript outside the browser with the help of NodeJS.
          </td>
          <td>Javascript can only be run in the browsers.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>It is mostly used on the server-side.</td>
          <td>It is basically used on the client-side.</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Nodejs does not have capability to add HTML tags.</td>
          <td>
            Javascript is capable enough to add HTML and play with the DOM.{" "}
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            {" "}
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox.
          </td>
          <td>
            V8 is the Javascript engine inside of node.js that parses and runs
            Javascript.{" "}
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>
            {" "}
            It is the upgraded version of ECMA script that uses Chrome’s V8
            engine written in C++.{" "}
          </td>
          <td>Nodejs is written in C, C++ and Javascript.</td>
        </tr>
      </table>
    </div>
  );
};

export default Blog;
