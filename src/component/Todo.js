/**
 * Created by jay on 22/1/19.
 */
import React,{Component} from  'react';
import './Todo.css';
export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name,
            description:this.props.description
        }
    }

    render(){
        return(
          <div>
              <li className="row"><input type ="checkbox" className="checkbox"/> {this.state.name} <input type="button" className="button" value="Delete"/></li>
          </div>
        );
    }
}
