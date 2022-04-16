import React from "react"
import Alert from "@mui/material/Alert"

export default class SitaAlert extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Alert severity={this.props.severe ? "error" : "success"}>
        {this.props.message}
      </Alert>
    )
  }
}
