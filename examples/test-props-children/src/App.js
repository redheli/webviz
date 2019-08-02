// @flow
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { number, string } from "prop-types";
import Button from './Button';

console.log("aaaaaaappp");
const Picture = props => {
  return (
    <div className="picture">
      <img src={props.src} className="picture" />
      {props.children}
    </div>
  );
};


type Props = {
  id: number,
  src: string,
  pictureSrc: any,
  setCurrentPic: any,
};

type State = {
  pictures: any[],
  currentPic: any,
};


class App extends Component<Props,State> {
  constructor(props: Props) {
    console.log("aaaaaaappp");
    super(props);
    console.log("aaaaaaappp");
    this.state = {
      pictures: [
        { id: '1', src: "http://via.placeholder.com/200x100" },
        { id: 2, src: "http://via.placeholder.com/400x200" },
        { id: 3, src: "http://via.placeholder.com/200x100" }
      ],
      currentPic: null
    };
    this.setCurrentPic = this.setCurrentPic.bind(this);
  }

  /*:: setCurrentPic: (number) => void */
  setCurrentPic(id:number) {
    this.setState({ currentPic: id });
  }
  render() {
    return (
      <div>
        <div className="squares">
          {this.state.pictures.map(picture => {
            return (
              <Picture key={picture.id} src={picture.src}>
                <Button
                  pictureSrc={picture.src}
                  setCurrentPic={this.setCurrentPic}
                  id={picture.id}
                />
                {picture.id}
              </Picture>
            );
          })}
          asdfasdf
        </div>
        <div>
          <p>Current selected picture ID is {this.state.currentPic}</p>
        </div>
      </div>
    );
  }
};
console.log("aaaaaaappp");
// ReactDOM.render(App, document.getElementById("root"));

export default App;
