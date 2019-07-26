import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Meetings from './components/meetings/meetings';
import Setmeetings from './components/setmeetings/setmeetings';

class App extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="App-header">
        <Container>
          <Row>
            <Col className='user' xs={4}>
              <div>
                <img src='https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4' ></img>
                <p>
                  King Somto
                </p>
              </div>
              <section>
                <p>Upcomming meetings</p>
                <Meetings></Meetings>
              </section>
            </Col>
            <Col className='schedule' xs ={8}>
              <Setmeetings></Setmeetings>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }

}

export default App;
