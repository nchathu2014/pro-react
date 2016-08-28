import  React,{Component} from 'react';
import ListComponent from './ListComponent';

class KanbanBoard extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * React life cycle event
   */
  componentDidMount() {
    require("../../bower_components/jquery/dist/jquery.min");
    require("../../bower_components/bootstrap/dist/js/bootstrap.min");
    require("../../bower_components/bootstrap/dist/css/bootstrap.min.css");
    require("../css/main.css");
  }

  /**
   * React life cycle event
   * @returns {XML}
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 kanbanColumn_1">
            <ListComponent
              title="To Do"
              cards={
          this.props.cards.filter((card) => card.status === "todo")
        }>

            </ListComponent>
          </div>
          <div className="col-sm-4 kanbanColumn_1">
            <ListComponent
              title="In-Progress"
              cards={
          this.props.cards.filter((card) => card.status === "in-progress")
        }
            >

            </ListComponent>
          </div>
          <div className="col-sm-4 kanbanColumn_1">
            <ListComponent title="Complete"
                           cards={
          this.props.cards.filter((card) => card.status === "complete")
        }>

            </ListComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default KanbanBoard;



