import  React,{Component} from 'react';

class CheckList extends Component {

  constructor(props) {
    super(props);
    this._initMethods();
  }

  /**
   *
   * @private
     */
  _initMethods(){
    this._onClick = this._onClick.bind(this,this.props.id);
  }

  /**
   *
   * @private
     */
  _onClick(taskId){
      this.props.removeTaskItem(taskId);
  }

  /**
   *
   * @returns {XML}
     */
  render() {
    return (
      <div className="fontSize_12">
        <input type="checkbox" checked={this.props.done}/>
        &nbsp;{this.props.name}&nbsp;<span className="glyphicon glyphicon-remove" onClick={this._onClick}></span>

      </div>
    );
  }
}

export default CheckList;



