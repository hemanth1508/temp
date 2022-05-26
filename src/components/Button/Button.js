import React, { Component } from "react";

class Button extends Component {
  render() {
    return <div class="button">
      <code class="code">
        version: "3.2"
        services:
          react-app:
            build:
              context: .
              dockerfile: dockerfile.dev
          ports:
            - "5000:3000"
          volumes:
            - /app/node_modules
            - .:/app
      </code>
    </div>;
  }
}

export default Button;
