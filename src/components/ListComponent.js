import  React,{Component} from 'react';
import CardComponent from './CardComponent';

class ListComponent extends Component {

  constructor(props) {
    super(props);
    console.log("ListComponent initialized...");
  }

  render() {
    return (
      <div>
        <CardComponent></CardComponent>
      </div>
    );
  }
}

export default ListComponent;



