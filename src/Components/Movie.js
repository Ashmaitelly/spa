import React,{Component} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import './Movie.css';
{/*Movie1*/}
export class Movie1 extends Component{
    render(){
        return(
            <div>
                <br></br>
            <center><h3>The Social Network</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie1.jpg"} alt="The Social network" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>In 2003, Harvard undergrad and computer genius Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend. Based on the book "The Accidental Billionaires."</p>
                <NavLink to={{
                          pathname:"/wm",
                          aboutProps:'https://www.youtube.com/embed/lB95KLmpLR4' 
                          }}>
                <Button className="mr-2" variant="info">
                 Watch Trailer
                </Button>
                </NavLink>
                </Col>
                </Row>
            </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            <center><h4>Cast</h4></center>
            <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/je.jpg"} alt="Jesse Eisenberg" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast1">
                <h4>Jesse Eisenberg</h4>
                </NavLink>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/ag.jpg"} alt="Andrew Garfield" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast2">
                <h4>Andrew Garfield</h4>
                </NavLink>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
        )
    }
}
{/*Movie2*/}
export class Movie2 extends Component{
    render(){
        return(
            <div>
                <br></br>
            <center><h3>Army of Darkness</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie2.jpg"} alt="Army of Darkness" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>A sardonic hardware store clerk is accidentally transported to 1300 A.D., where he must retrieve the Necronomicon and battle an army of the dead so he can return home.</p>
                <NavLink to={{
                          pathname:"/wm",
                          aboutProps:'https://www.youtube.com/embed/4vvJCg2JsIc' 
                          }}>
                <Button className="mr-2" variant="info">
                 Watch Trailer
                </Button>
                </NavLink>
                </Col>
                </Row>
            </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            <center><h4>Cast</h4></center>
            <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/bc.jpg"} alt="Bruce Campbell" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast3">
                <h4>Bruce Campbell</h4>
                </NavLink>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/ed.jpg"} alt="Embeth Davidtz" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast4">
                <h4>Embeth Davidtz</h4>
                </NavLink>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
        )
    }
}
{/*Movie3*/}
export class Movie3 extends Component{
    render(){
        return(
            <div>
                <br></br>
            <center><h3>Die Hard</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie3.jpg"} alt="Die Hard" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.</p>
                <NavLink to={{
                          pathname:"/wm",
                          aboutProps:'https://www.youtube.com/embed/gYWvwkXreaI' 
                          }}>
                <Button className="mr-2" variant="info">
                 Watch Trailer
                </Button>
                </NavLink>
                </Col>
                </Row>
            </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            <center><h4>Cast</h4></center>
            <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/bw.jpg"} alt="Bruce Willis" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast5">
                <h4>Bruce Willis</h4>
                </NavLink>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/ar.jpg"} alt="Alan Rickman" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast6">
                <h4>Alan Rickman</h4>
                </NavLink>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
        )
    }
}
{/*Movie4*/}
export class Movie4 extends Component{
    render(){
        return(
            <div>
                <br></br>
            <center><h3>Spider-Man 2</h3></center>
            {/* Movie Part */}
            <div id='main'>
            <Container>
                <Row>
                <Col sm={3}>
                <img src={process.env.PUBLIC_URL + "/images/movie4.jpg"} alt="Spider-Man 2" class="img-thumbnail"/>
                </Col>
                <Col sm={3}>
                <h3>Plot:</h3>
                <p>Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.</p>
                <NavLink to={{
                          pathname:"/wm",
                          aboutProps:'https://www.youtube.com/embed/1s9Yln0YwCw' 
                          }}>
                <Button className="mr-2" variant="info">
                 Watch Trailer
                </Button>
                </NavLink>
                </Col>
                </Row>
            </Container> 
            
            </div>
            {/* Cast Part */}
            <div id='cast'>
            <center><h4>Cast</h4></center>
            <Container>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/tm.jpg"} alt="Tobey Maguire" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast7">
                <h4>Tobey Maguire</h4>
                </NavLink>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col sm={2}>
                <img src={process.env.PUBLIC_URL + "/images/am.jpg"} alt="Alfred Molina" class="img-thumbnail mcicon" />
                </Col>
                <Col sm={2}>
                <NavLink to="/cast8">
                <h4>Alfred Molina</h4>
                </NavLink>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
        )
    }
}