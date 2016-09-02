import  React,{Component,PropTypes} from 'react';

let titlePropType  = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value != 'string' || value.length > 20) {
      return new Error(
        `${propName} in ${componentName}  is longer than 20 characters`
      );
    }
  }
}

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.greet}</h1>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

App.propTypes = {
  greet:PropTypes.string.isRequired,
  title:titlePropType
};

App.defaultProps ={
  greet:"Hello World...!"
};

export default App;
