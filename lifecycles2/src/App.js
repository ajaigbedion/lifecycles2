import React, {Component} from 'react';

class Ticker extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    };
  };

  //this is where our methods go
  componentDidMount () {
    //start our ticker here.
    setInterval(() => 
    this.setState({
      count: this.state.count + 1,
    })
  ,1000)
  }

  shouldComponentUpdate (nextProps, nextState){
    //only return true if the count is a multiple of 3
    if (nextState.count % 3 == 0) return true
    else return false;
  }


  

  render(){
    return(
      <div>
        The ticker is: {this.state.count}
        <div><button>Clear Count</button></div>
        <div><button>Pause Count</button></div>
      </div>
    );
  };
};

export default Ticker;