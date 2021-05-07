import React from 'react';
import data from '../output.json';
import setParams from '../setparams';
import { Button, Card, Input, Row, Col } from 'antd';
import { VectorMap } from "react-jvectormap";
const { getCode } = require("country-list");

class InputPage extends React.PureComponent {
    state = { 
        time_period : '',
        filtered:[],
        data_geo:{},

    };
    update = e => this.setState({ time_period: e.target.value }); //updates state
    updateInputValue = () => {
      var a=[];
        var b={};
      
        
        const url = setParams({ query: this.state.time_period }); //sets the 'query' parameter value by the 'time_period' value of state
      this.props.history.push(`?${url}`); // pushes the parameter value to url

        for ( var i=0;i<data.data.length;i++)
        {
if(data.data[i].year== this.state.time_period)
{
    console.log('area',data.data[i].country_or_area);
    a.push(data.data[i].country_or_area); // selects countries from the specific time period (this.state.time_period)
    b[getCode(data.data[i].country_or_area)]=parseFloat(data.data[i].value); // prepare object for map visualization containing country code and emission value in that particular time period
    
}


        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos; //filters the duplicate values
        })
        
        this.setState({
            filtered: a, //updates state
            data_geo: b, //updates state
        })
        console.log('area123',b);
        console.log('area123',a)
        console.log('area123',a.length)
        
        
    }
   

    render() {
        
      return (
        <div id="search">
           <br></br>
            <br></br>
         <Row justify="space-around">
       
      <Col span={8}><center><Card title="Input Year" style={{ width: 300 }}>
         
         <Input size="small" placeholder="Input year and get list of countries" value={this.state.time_period}
           onChange={this.update}
           />
           <br></br>
           <br></br>
           <Button type="primary" onClick={this.updateInputValue}>Search</Button>
         </Card></center></Col>
         
      <Col span={16}> <VectorMap
          map={"world_mill"}
          zoomButtons={false}
          backgroundColor="transparent"
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "500px"
          }} 
          containerClassName="map"
          onRegionClick={(area)=>
            {
              console.log('value',area)
              console.log('value',this.state.data_geo[area])
            }
          }
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" // color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: this.state.data_geo, // this is the map data
                scale: ["#146804", "#48aeef"], 
                normalizeFunction: "polynomial"
              }
            ]
          }}
        /></Col>
    </Row>
           
        
          <br></br>
          <center>
          <Card title="Countries" style={{ width: 300 }}>
<ul>
    {this.state.filtered.map(name=><li>{name}</li>)}
</ul>
              </Card>
          </center>
          
        </div>
      );
    }
  }
  export default InputPage