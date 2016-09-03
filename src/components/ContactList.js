import  React,{Component} from 'react';

class ContactList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let inputText = this.props.inputText;

    let filteredList =  this.props.contacts.filter(
      (contact)=> contact.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
    );

    let userList =  filteredList.map((contact,index)=>{
      return(
        <div>
          <li key={index}>{contact.name}- {contact.email}</li>
        </div>
      );
    });




    return (
      <div>
        <ul>
          {userList}
        </ul>
      </div>
    );
  }
}

export default ContactList;
