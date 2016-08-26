import  React,{Component} from 'react';
import  GroceryListItem from './GroceryListItem';

class GroceryList extends Component{

    constructor(props){
        super(props);
        console.log("GroceryList initialized...");
    }

    render(){
      return(
        <div>
           <GroceryListItem quantity="1">Apple</GroceryListItem>
           <GroceryListItem quantity="12">Mango</GroceryListItem>
           <GroceryListItem quantity="100">Star Fruit</GroceryListItem>
        </div>
      );
    }
}
export default GroceryList;

