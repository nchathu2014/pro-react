import  React,{Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        console.log("App initialized...");
    }

    render(){
        return(
            <div>
              <h1>Hello From React</h1>
            </div>
        );
    }
}

export default App;
