import React from 'react';
import {Card,CardDeck,Badge} from 'react-bootstrap';

function CardDaily(props){
    
    const {active,cases,deaths,recovered,updated} =props.latestUpdate;
    const date=new Date(parseInt(updated));
    const updatedDate =date.toString();

    return(
        <div className="conatiner-fluid">
          <div className="Container">
          <CardDeck >
            <Card className="card" bg="danger" text ="light">
                <Card.Body>
                  <Card.Title><Badge variant="danger">Active</Badge>{' '}</Card.Title>
                  <Card.Text>
                  <Badge variant="danger">{active}</Badge>{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small ><Badge variant="danger">Last updated {updatedDate} </Badge>{' '} </small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="warning" text ="light">
                <Card.Body>
                  <Card.Title><Badge variant="warning">Cases</Badge></Card.Title>
                  <Card.Text>
                  <Badge variant="warning">{cases}</Badge>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small ><Badge variant="warning">Last updated {updatedDate} </Badge></small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="danger" text ="light">
                <Card.Body>
                  <Card.Title><Badge variant="danger">Deaths</Badge>{' '}</Card.Title>
                  <Card.Text>
                  <Badge variant="danger">{deaths}</Badge>{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer >
                  <small ><Badge variant="danger">Last updated {updatedDate}</Badge>{' '} </small>
                </Card.Footer>
              </Card>
              <Card className="card" bg="success" text ="light">
                <Card.Body>
                  <Card.Title><Badge variant="success">Recovered</Badge>{' '}</Card.Title>
                  <Card.Text>
                  <Badge variant="success">{recovered}</Badge>{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small ><Badge variant="success">Last updated {updatedDate}</Badge>{' '} </small>
                </Card.Footer>
              </Card>
          </CardDeck>
          </div>
            
        </div>
    );

}

export default CardDaily;