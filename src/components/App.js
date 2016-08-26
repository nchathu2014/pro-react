import  React,{Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        console.log("App initialized...");
    }

    render(){
      let message = "By Nuwan";
        return(
            <div>
              <h1>Hello From React {message}</h1>
            </div>
        );
    }
}

export default App;
