import  React,{Component} from 'react';
import  KanbanBoard from './KanbanBoard';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App initialized...");
  }

  render() {
    return (
      <div>
        <KanbanBoard></KanbanBoard>
      </div>
    );
  }
}

export default App;



