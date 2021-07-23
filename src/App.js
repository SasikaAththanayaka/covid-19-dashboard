import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card,CardColumns,Form,CardDeck} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import CardDaily from './Components/CardDaily.js';
import Header from './Components/Header.js';

function App (){
  const [latest , setLatest] = useState([]);
  const [result , setResult] = useState([]);
  const [searchCountry,setSearchCountry] =useState("");

  useEffect(() =>{
    axios.all([axios.get(`https://corona.lmao.ninja/v2/all`),
              axios.get(`https://corona.lmao.ninja/v2/countries`)]).then(res =>{
                  setLatest(res[0].data);
                  setResult(res[1].data);
                  console.log(res[0].data)
              }).catch(err =>{
                console.log(err);
              });
  },[]);
  

  const filterCountry =result.filter(item =>{
    return searchCountry !== "" ? item.country.includes(searchCountry) : item;
  })

  const countries =filterCountry.map((data,i) => {
    return(
      <CardDeck  >
      <Card  key={i} bg="dark" text ="light" className ="text-center" style={{ margin : "20px" }}>
        <Card.Body>
        <Card.Img variant="top" src={data.countryInfo.flag} rounded   />
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Today Cases {data.todayCases}</Card.Text>
          <Card.Text>Today Deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Today Recovered {data.todayRecovered}</Card.Text>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          
        </Card.Body>
       
      </Card>
      <Pie
        data={{
          labels :['Infected' ,"Recoverd" , "Deaths"],
          datasets : [{
            label : "People",
            backgroundColor :[
              'rgb(106, 90, 205)',
              'rgb(60, 179, 113)',
              'rgba(255,0,0,0.5)',
            ],
            data : [data.todayCases,data.todayRecovered,data.todayDeaths]
          }]
        }}
        option={{
          legend:{display :false},
          title :{display :true , text : `Current State in ${data.country}`}
        }}
      />
      </CardDeck>
    );
  });

  

    return (
      <div className="App">
        <div className="conatiner-fluid">
          <Header country={setSearchCountry}/>
        </div>

        <div className="conatiner-fluid">
          <CardDaily latestUpdate={latest}/>
        </div>

      <div className="conatiner-fluid">
        <CardColumns>
          {countries}
        </CardColumns>
        </div>
    
      </div>
    
      
    )

}

export default App;
