import  React,{Component} from 'react';
import ListComponent from './ListComponent';

class KanbanBoard extends Component {

  constructor(props) {
    super(props);
    console.log("KanbanBoard initialized...");
  }

  render() {
    return (
      <div>
        <ListComponent></ListComponent>
      </div>
    );
  }
}

export default KanbanBoard;



