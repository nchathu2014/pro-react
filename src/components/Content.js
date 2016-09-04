import  React,{Component} from 'react';

class Content extends Component{

  constructor(props){
    console.log("constructor fires");
    super(props);
    this.state={
      greet:"init"
    }
  }

  componentWillMount(){
    console.log("componentWillMount fires");
  }

  componentDidMount(){
    console.log("componentDidMount fires");
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps : '+newProps.myNumber);
    this.setState({
      greet:"Hiiiiiiiiiiiiiii"
    });
  }

  shouldComponentUpdate(newProps,newState){
    let returnValue=true;
    if(newProps.myNumber == 6){
      returnValue = false;
    }else{
      returnValue = true;
    }
    console.log(newState)
    return returnValue;
  }

  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate "+nextProps.myNumber+'--'+nextState.greet);
  }

  componentDidUpdate(prevProps,prevStatus){
    console.log("componentDidUpdate "+prevProps.myNumber+'--'+prevStatus.greet);
  }

  render(){
   return(
     <div>
       {this.state.greet}<br/>
       {this.props.myNumber}
     </div>
   );
  }
}

export default Content;
