import {Component} from 'react'

class MyComponent extends Component {

    constructor() {
        super();
        console.log("constructor function called ");
    }

    componentDidMount() {
        
        console.log("componentDidMount is called");
    }


    render() {
        const {name} = this.props
        console.log("Render is called");
        return(
        <h1> Hello {name}</h1>
        
        )
    }

    componentDidUpdate() {
        console.log("Component did update is called");
    }



    

    componentWillUnmount() {
        console.log("component will unmount is called ");
    }
}
   /* render() {

        const {name} = this.props
        return <h1> Hello {name}</h1>
        src\Components\Classcomponent.js
        src\App.css

    }*/


export default  MyComponent