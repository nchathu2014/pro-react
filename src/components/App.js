import  React,{Component} from 'react';
import  KanbanBoard from './KanbanBoard';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cardsList = [
      {
        id: 1,
        title: "Read the Book",
        description: "I should **read the whole book**",
        status: "in-progress",
        tasks: []
      },
      {
        id: 2,
        title: "Write some code",
        description: "Code **along with the samples** in the book",
        status: "todo",
        tasks: [
          {
            id: 1,
            name: "ContactList Example",
            done: true
          },
          {
            id: 2,
            name: "Kanban Example",
            done: false
          },
          {
            id: 3,
            name: "My own experiments",
            done: false
          }
        ]
      },
      {
        id: 3,
        title: "Create Draft Statements",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
          {
            id: 1,
            name: "ContactList Example",
            done: true
          }
        ]
      },
      {
        id: 4,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "complete",
        tasks: []
      },
    ];
    return (
      <div>
        <KanbanBoard cards={cardsList}></KanbanBoard>
      </div>
    );
  }
}

export default App;



