import React,{Component} from 'react'
import { Row } from "Reactstrap"

class ItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
            itemdetails = this.props.itemdetails
        }

    }

    render(){
        return(
            <Row>
                
            </Row>
        )
    }
 
}

export default ItemList