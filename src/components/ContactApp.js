import  React,{Component} from 'react';
import  ContactList from './ContactList';
import  SearchBar from './SearchBar';

class ContactApp extends Component {

  constructor(props) {
    super(props);
    this._initComponentState();
    this.onChangeCallback = this.onChangeCallback.bind(this);
  }

  /**
   *
   * @private
   */
  _initComponentState() {
    this.state = {
      inputText: ""
    };
  }

  onChangeCallback(value){
    this.setState({
      inputText:value
    });
  }

  render() {
    return (
      <div>
        <SearchBar onChangeCallback={this.onChangeCallback}/>
        <ContactList
          contacts={ContactApp.contacts}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

ContactApp.contacts = [
  {id: 1, name: "Cassio Zen", email: "cassiozen@gmail.com"},
  {id: 2, name: "Dan Abramov", email: "gaearon@somewhere.com"},
  {id: 3, name: "Pete Hunt", email: "floydophone@somewhere.com"},
  {id: 4, name: "Paul O’Shannessy", email: "zpao@somewhere.com"},
  {id: 5, name: "Ryan Florence", email: "rpflorence@somewhere.com"},
  {id: 6, name: "Nuwan Chathuranga", email: "nuwan@here.com"}
];

export default ContactApp;
