import  React,{Component} from 'react';
import CardComponent from './CardComponent';

class ListComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    if(this.props.cards !== undefined){
      var card = this.props.cards.map((card,index)=>{
        return(
          <CardComponent id={card.id}
                         key={index}
                         title={card.title}
                         description={card.description}
                         status = {card.status}
                         tasks={card.tasks}></CardComponent>
        );
      });
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div>
              <b  className="fontSize_18">
                {this.props.title}
              </b>
            </div>
          </div>
          <div className="col-sm-6 text-right">
            {card.length}
          </div>
        </div>
        <div>{card}</div>
      </div>
    );
  }
}

export default ListComponent;



