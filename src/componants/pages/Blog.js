import React from "react";

import "../../styles/pages/Blog.css";
import PageTitle from "../../styles/Shared/PageTitle";

const Blog = () => {
  return (
    <div>
      <PageTitle title={"Blogs"}></PageTitle>
      <h1 className="table-header">
        Q.No 1: Differences between Node js and `JavaScript` databases.
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
      <br />
      <br />
      <h1 className="table-header">
        Q.No 2: Differences between Sql and `Nonsql` databases.
      </h1>
      <table id="table-container">
        <tr>
          <th>S.No</th>
          <th>Sql</th>
          <th>Node Sql</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Structured query language is called SQL</td>
          <td>non Structured query language is called noSQL.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>SQL is a relational database</td>
          <td>noSQL is a non relational database..</td>
        </tr>
        <tr>
          <td>3</td>
          <td>SQL is an organized database system</td>
          <td>noSQL is not so organized database system.</td>
        </tr>
        <tr>
          <td>4</td>
          <td>SQL Databases are best for inserting multi-row data</td>
          <td>noSQL is best for inserting document or json data. </td>
        </tr>
        <tr>
          <td>5</td>
          <td> SQL databases are table based. On the other hand</td>
          <td>noSql databases are document base</td>
        </tr>
      </table>
      <h1 className="table-header">
        What is the purpose of `jwt` and how does it work
      </h1>
      <table id="table-container">
        <tr>
          <td>The main purposes of JWT is using stateless authentication</td>
        </tr>
        <tr>
          <td>Another is to get rid of stateful authentication</td>
        </tr>
        <tr>
          <h6>How does JWT works:</h6>
        </tr>
        <tr>
          <td>Json Web Tokens(JWT) contain a set of claims.</td>
        </tr>
        <tr>
          <td>Claims are used to transmit information between two parties.</td>
        </tr>
        <tr>
          <td>
            A JWT is a Base64Url -encoded text format that consists of three
            parts These are: Header, Payload, Signature.
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Blog;
