import  React,{Component} from 'react';
import  CheckList from './CheckList';

class CardComponent extends Component {

  constructor(props) {
    super(props);
    console.log("CardComponent initialized...");
  }

  render() {
    return (
      <div>
        <CheckList></CheckList>
      </div>
    );
  }
}

export default CardComponent;



