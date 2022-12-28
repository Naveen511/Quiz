import React from "react";

import Grid from "@mui/material/Grid";

class ErrorBoundary extends React.Component {
  // Constructor for initializing Variables etc in a state
  // Just similar to intial line of useState if you are familiar
  // with Functional Components
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log error messages to an error
    // reporting service here
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Grid container>
          <Grid item xs={6} lg={6}>
            <svg
              width="380px"
              height="500px"
              viewBox="0 0 837 1045"
              version="1.1"
              // xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              // xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                // sketch:type="MSPage"
              >
                <path
                  d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
                  id="Polygon-1"
                  stroke="#007FB2"
                  strokeWidth="6"
                  // sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
                  id="Polygon-2"
                  stroke="#EF4A5B"
                  strokeWidth="6"
                  // sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
                  id="Polygon-3"
                  stroke="#795D9C"
                  strokeWidth="6"
                  // sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
                  id="Polygon-4"
                  stroke="#F2773F"
                  strokeWidth="6"
                  // sketch:type="MSShapeGroup"
                ></path>
                <path
                  d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
                  id="Polygon-5"
                  stroke="#36B455"
                  strokeWidth="6"
                  // sketch:type="MSShapeGroup"
                ></path>
              </g>
            </svg>
          </Grid>
          <Grid item xs={6} lg={6} className="message-box">
            <h2>An Error Has Occured</h2>
            <details>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </Grid>
        </Grid>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}

export default ErrorBoundary;
