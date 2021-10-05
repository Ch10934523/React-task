import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';
import {Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



const items = [
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];
/*
 
    */

//const [collapsed, setCollapsed] = useState(true);
/*
export default function Test() {
    const [count, setCount] = useState(0);
    const [data, updateDate] = useState([{}]);
    const [isPassed, updatedIsPassed] = useState(false)
    return (
        <div>
            test
        </div>
    )
}*/


  
class BakerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            collapsed: true,
            modal: false,
            
            }
        };
        
      

        toggle = () => {
            this.setState({
                modal: !this.state.modal
            })
        }


       
  

   
    
    render() {
        
        return (
        <div> 

            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                
                </div>


            

          <div className="backimage">
              <h1 className="heading1"> Welcome to baker </h1>
              <h4 className="heading1 mt-3"> We are team of talented designers making websites with Bootstrap </h4>
              <Button color="primary" className="mt-4 button1" onClick={this.toggle}> start </Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
          </div> 
            
            <div className="imagebackground">
        <Container >
            <Row>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
                <Col xs="6" md="4" lg="2" className="mt-3"> <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" className="image1" alt="logo"/> </Col>
            </Row>
        </Container>
        </div>

        <div className="section3">
            <Container>
                <Row>
                    <Col xs="12" md="6" className="mr-3 mt-3 imagecontainer">
                        <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/about.jpg" className="section3image" alt="imagestext"/>
                    </Col>
                    
                    <Col xs="12" md="6" className="mt-3 subpartsection3">
                        <h3>Voluptatem dignissimos provident quasi</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit </p>
                        <Row>
                        <Col md="6" className="subpartsection3 mt-4">
                            <h5>Corporis voluptates sit</h5>
                            <p> Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip </p>
                        </Col>

                        <Col md="6" className="subpartsection3 mt-4">
                        <h5>Corporis voluptates sit</h5>
                            <p> Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip </p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>

<div className="part4">

    <Container>
        <Row>
           
            
            <Col xs="6" lg="3" className="box-part4 mt-3 mb-3 mr-2">
                <h1> 232 </h1>
                <p> Clients </p>
            </Col>
            <Col xs="6" lg="3" className="box-part4 mt-3 mb-3 mr-2">
                <h1> 232 </h1>
                <p> Clients </p>
            </Col>
            <Col xs="6" lg="3" className="box-part4 mt-3 mb-3 mr-2">
                <h1> 232 </h1>
                <p> Clients </p>
            </Col>
            <Col xs="6" lg="3" className="box-part4 mt-3 mb-3">
                <h1> 232 </h1>
                <p> Clients </p>
            </Col>
            
            
        </Row>
    </Container>
</div>     


<div className="part-5">
<h1> Service </h1>
<p> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. </p>

    <Container>
        <Row>
            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
                <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Lorem Ipsum </h4>
                <p> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
            </Col>

            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
            <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Sed Perspiciatis </h4>
                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
            </Col>

            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
            <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Lorem Ipsum </h4>
                <p> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
            </Col>

            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
            <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Sed Perspiciatis </h4>
                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
            </Col>

            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
            <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Lorem Ipsum </h4>
                <p> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
            </Col>

            <Col md="6" lg="4" className="part5-card mt-3 ml-2">
            <img src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" className="part5-image" />
                <h4> Sed Perspiciatis </h4>
                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </p>
            </Col>
            
            
        </Row>
    </Container>
</div>     
            
<div className="Action mt-3">
    <h1>
    Call To Action
    </h1>
    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    <Button> Call to  Action </Button>
</div>

<div className="part-6">
    <h1> Testinomials </h1>
    <p> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas. </p>
<UncontrolledCarousel items={items} className="couarsel"/>;
</div>

<div className="portfolio">
<h1> Portfolio </h1>
<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

<div className="butttoncontainer">
<Button color="primary"> All </Button>
<Button color="primary"> App </Button>
<Button color="primary"> card </Button>
<Button color="primary"> Web </Button>
</div>

<Container className="portfolo-image-container">
    <Row className="mt-4">
        <Col md="6" lg="4">
            <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/portfolio/portfolio-1.jpg" className="portfoloi-images mb-3"/>
        </Col>

        <Col md="6" lg="4">
            <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/portfolio/portfolio-1.jpg" className="portfoloi-images mb-3"/>
        </Col>

        <Col md="6" lg="4">
            <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/portfolio/portfolio-1.jpg" className="portfoloi-images mb-3"/>
        </Col>

        
    </Row>
</Container>

</div>




        </div> 
        )
    }
}

export default BakerComponent;

/*
<div className="container">
            <div className="row">

            <div className="col-6 col-md-4 col-lg-2">
            <img src="https://bootstrapmade.com/demo/templates/Baker/assets/img/clients/client-1.png" alt="logo"/>
            </div>

            
            </div>
            </div>*/
