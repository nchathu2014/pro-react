import  React,{Component} from 'react';

class GroceryListItem extends Component {

  constructor(props) {
    super(props);
    console.log("GroceryListItem initialized...");
  }

  render() {
    let itemName = this.props.children;
    let quantity = this.props.quantity;
    return (
      <div>{itemName}({quantity})</div>
    );
  }
}

export default GroceryListItem;
