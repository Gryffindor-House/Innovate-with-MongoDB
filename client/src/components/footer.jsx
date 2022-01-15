import React, { Component } from "react";

function Footer() {
  return (
    <body>
      <div id="footer">
        <div className="container text-center">
          <footer>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Services</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About Our Team</a>
              </li>
            </ul>
            <p class="copyright">Team Gryffindor</p>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default Footer;
