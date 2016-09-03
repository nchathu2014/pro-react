import  React,{Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  _handleOnChange(event){
    this.props.onChangeCallback(event.target.value);
  }

  render(){
    return(
      <div>
        <input type="text"  onChange={this._handleOnChange}/>
      </div>
    );
  }
}

export default SearchBar;
