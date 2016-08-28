import  React,{Component} from 'react';
import  CheckList from './CheckList';
import marked from 'marked'

class CardComponent extends Component {

  constructor(props) {
    super(props);
    this._initMethods();
    this._initState();

  }

  /**
   *
   * @private
   */
  _initState() {
    this.state = {
      isHidden: true,
      tasks: this.props.tasks
    }
  }

  /**
   *
   * @private
   */
  _initMethods() {
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
    this.removeTaskItem = this.removeTaskItem.bind(this);
  }

  /**
   *
   * @param taskId
     */
  removeTaskItem(taskId){
console.info(taskId);
    if (taskId > -1) {
      this.state.tasks.splice(taskId-1, 1);
      this.setState({
        tasks:this.state.tasks
      });
    }
    console.info(this.state.tasks);
  }

  /**
   *
   * @private
   */
  _onClick() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  /**
   *
   * @private
   */
  _onKeyPress(event) {

    if (event.charCode == 13 && this.refs.taskRef.value !=='') {
      this.state.tasks.push({

        id: (this.state.tasks.length + 1),
        name: this.refs.taskRef.value,
        done: false

      });
      this.refs.taskRef.value="";
      this.setState({
        tasks:this.state.tasks
      });
      console.log(this.state.tasks);
    }
  }

  /**
   *
   * @returns {XML}
   */
  render() {
    let borderStyle = "";
    if (this.props.status === "todo") {
      borderStyle = "kanbanColumn_1__borderLeft";
    } else if (this.props.status === "in-progress") {
      borderStyle = "kanbanColumn_2__borderLeft";
    } else {
      borderStyle = "kanbanColumn_3__borderLeft";
    }

    let expandIcon = "";
    if (this.state.isHidden === true) {
      expandIcon = "glyphicon glyphicon-triangle-right";
    } else {
      expandIcon = "glyphicon glyphicon-triangle-bottom";
    }

    if (this.state.tasks !== undefined) {
      var chkList = this.state.tasks.map((item, index)=> {
        return (
          <CheckList id={item.id}
                     name={item.name}
                     done={item.done}
                     key={index}
                     removeTaskItem={this.removeTaskItem}
          />
        );
      });
    }

    return (
      <div className={borderStyle}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div onClick={this._onClick}>
              <span className={expandIcon}></span>&nbsp;
              <b className="fontSize_15">{this.props.title}</b>
            </div>
            <div hidden={this.state.isHidden}>

              <div className="dottedSeperator">
                <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
              </div>
              <div>{chkList}</div>
              <div className="form-group addTaskDiv">
                <input type="text"
                       className="form-control borderDashed inputAsh"
                       id="taskId"
                       ref="taskRef"
                       placeholder="Type and Hit Enter"
                       onKeyPress={this._onKeyPress}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;



