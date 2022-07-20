import { Component } from "react";

class TitleH1 extends Component {
  render() {
    const { title } = this.props; 
    return (
      <h1>
        {title}
      </h1>
    )
  }
}

export default TitleH1;