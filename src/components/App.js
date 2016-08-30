import  React,{Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchState: "React",
      textAreaState: "Hello React",
      selectOptionState:"default"
    }
  }

  handleOnChange(event) {
    this.setState({
      searchState: event.target.value.substr(0, 10)
    });
  }

  textAreaOnChange(event) {
    this.setState({
      textAreaState: event.target.value
    });
  }

  selectOnChange(event){
    this.setState({
      selectOptionState:event.target.value
    });
  }

  handleSubmit(event){
    console.log(`NAME : ${event.target.name.value} EMAIL : ${event.target.email.value}`);
  }

  handleOnFocus(){
    this.refs.inputRef.focus();
  }

  render() {

    let divStyle = {
      width: 500,
      height: 300,
      backgroundColor: '#d31145',
      padding: 10,
      fontSize: 50
    };

    let studentArray = ['Nuwan','Janaka','Isura','Lahiru','Chamira','Dhanushka'];
    let students = studentArray.map((student,index)=>{
      return(

          <li key={index}>{student}</li>

      );
    });

    return (
      <div style={divStyle}>
        <h1>Hello From React</h1>

        <span>Controlled Components</span>
        Search Term: <input type="search" value={this.state.searchState} onChange={this.handleOnChange.bind(this)}/>

        <textarea value={this.state.textAreaState} onChange={this.textAreaOnChange.bind(this)}></textarea>

        <select value={this.state.selectOptionState} onChange={this.selectOnChange.bind(this)}>
          <option value="default">---Select a Type---</option>
          <option value="Mobile">Mobile</option>
          <option value="Work">Work</option>
          <option value="Home">Home</option>
        </select>

        <hr/>

        <p>Uncontrolled Components</p>

        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
            Name: <input name="name" type="text" defaultValue="This is a sample value"/>
          </div>
          <div className="formGroup">
            E-mail: <input name="email" type="mail" defaultValue="nuwan@gmail.com"/>
          </div>
          <button type="submit">Submit</button>
        </form>


        <hr/>

        Ref and Key

        <div>
          {students}
          <input type="text" ref="inputRef"/>
          <button onClick={this.handleOnFocus.bind(this)}>Focus to TextBox</button>
        </div>


      </div>



    );
  }
}

export default App;
