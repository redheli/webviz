// @flow

import React, { Component } from "react";

type Props = {
  children?: string,
  id: number,
  pictureSrc: any,
  setCurrentPic: any,
};

type State = {
  pictureId: number,
  label: string,
};

class Button extends Component<Props,State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      pictureId: 0,
      label: 'null',
      pictureSrc: null,
    };
    this.buttonLabel = this.buttonLabel.bind(this);
  }
//   buttonLabel = src:string => {

  /*:: buttonLabel: (string) => void */
  buttonLabel(src:string){
    src.includes("200x100")
      ? this.setState({ pictureId: this.props.id, label: "Small" })
      : this.setState({ pictureId: this.props.id, label: "Large" });
  }
  componentDidMount() {
    this.buttonLabel(this.props.pictureSrc);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.setCurrentPic(this.props.id)}>
          {this.state.label}
          bbb
        </button>
      </div>
    );
  }
};

export default Button;