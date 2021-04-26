import React from 'react';
import data from '../output.json';
import setParams from '../setparams';
import { Button, Card, Input } from 'antd';
import { VectorMap } from "react-jvectormap";
const { getCode } = require("country-list");

class InputPage extends React.PureComponent {
    state = { 
        time_period : '',
        filtered:[],
        data_geo:{},

    };
    updateInputValue = e => {
        var a=[];
        var b={};
        const url = setParams({ query: e.target.value });
      this.props.history.push(`?${url}`);
        this.setState({ time_period: e.target.value,});
        for ( var i=0;i<data.data.length;i++)
        {
if(data.data[i].year== e.target.value)
{
    console.log('area',data.data[i].country_or_area);
    a.push(data.data[i].country_or_area);
    b[getCode(data.data[i].country_or_area)]=parseFloat(data.data[i].value);
    
}


        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos;
        })
        
        this.setState({
            filtered: a,
            data_geo: b,
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
        <center>
            <Card title="Input Year" style={{ width: 300 }}>
          {/* <input
            type="text"
            className="input"
            placeholder="What am I looking for ?"
            value={this.state.time_period}
            onChange={this.updateInputValue}
          /> */}
          <Input size="small" placeholder="Input year and get list of countries" value={this.state.time_period}
            onChange={this.updateInputValue}/>
            <br></br>
            {/* <br></br> */}
          {/* <Button type="primary"
            onClick={this.updateURL}
          >Search</Button> */}
          </Card>
          </center>
          <br></br>
          <center>
          <Card title="Countries" style={{ width: 300 }}>
<ul>
    {this.state.filtered.map(name=><li>{name}</li>)}
</ul>
              </Card>
          </center>
          <br></br>
          <VectorMap
          map={"world_mill"}
          backgroundColor="transparent"
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "1000px"
          }} // gets the country code
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
                scale: ["#146804", "#48aeef"], // your color game's here
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
        </div>
      );
    }
  }
  export default InputPage