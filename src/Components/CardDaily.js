import React from 'react';
import {Card,CardDeck} from 'react-bootstrap';

function CardDaily(props){
    
    const {active,cases,deaths,recovered,updated} =props.latestUpdate;
    const date=new Date(parseInt(updated));
    const updatedDate =date.toString();

    return(
        <div className="conatiner-fluid">
          
            <CardDeck >
            <Card className="card" bg="secondary" text ="light">
                <Card.Body>
                  <Card.Title>Active</Card.Title>
                  <Card.Text>
                      {active}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small >Last updated {updatedDate} </small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="secondary" text ="light">
                <Card.Body>
                  <Card.Title>Cases</Card.Title>
                  <Card.Text>
                      {cases}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small >Last updated {updatedDate} </small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="secondary" text ="light">
                <Card.Body>
                  <Card.Title>Deaths</Card.Title>
                  <Card.Text>
                      {deaths}
                  </Card.Text>
                </Card.Body>
                <Card.Footer >
                  <small >Last updated {updatedDate} </small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="secondary" text ="light">
                <Card.Body>
                  <Card.Title>Recovered</Card.Title>
                  <Card.Text>
                      {recovered}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small >Last updated {updatedDate} </small>
                </Card.Footer>
              </Card>
          </CardDeck>
        </div>
    );

}

export default CardDaily;