import React, {Component} from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button} from 'reactstrap'




class AxiosGet extends Component {

    constructor() {
        super()
        this.state = {
            array1: [],
            modal: false,
            postData: null

        }   
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            this.setState({
                array1: response.data
            })
        })

        

    }

    toggle = (id) => {
        console.log(id)
         if (id){
         axios.get("https://jsonplaceholder.typicode.com/posts/" + id)        
         .then((response) => {
             console.log(response.data)
             this.setState({
                postData: response.data,
                modal: true
            })
         })
        }
        else{
            console.log("close")
            this.setState({
                postData: null,
                modal: false
            })
        }

        


     }


    render() {
        const {array1} = this.state
        return (
            
                <ListGroup className="list-background-color">
                    {array1.map( eacharray => 
                        <li key={eacharray.id} className="list-container" onClick={ () => this.toggle(eacharray.id)}>
                             <div>
                                 <h2> {eacharray.id} </h2>
                                 <h3> {eacharray.title} </h3>

                            
                                </div>

                                 {/* <h5> {eacharray.body} </h5> */}
                             
                             </li>
                    
                    )}

                    <Modal isOpen={this.state.modal} toggle={() => this.toggle()} >
                            <ModalHeader toggle={ () => this.toggle()}>Modal title</ModalHeader>
                                <ModalBody>
                                     {this.state.postData && this.state.postData.body}
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={ () => this.toggle()}>Cancel</Button>
                                    </ModalFooter>
                                     </Modal>
                    </ListGroup>

        )
    }

}

export default AxiosGet;