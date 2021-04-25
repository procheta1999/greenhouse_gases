import React from 'react';
import data from '../output.json';
import setParams from '../setparams';
import { Button, Card, Input } from 'antd';
class InputPage extends React.PureComponent {
    state = { 
        time_period : '',
        filtered:[],

    };
    updateInputValue = e => {
        var a=[];
        const url = setParams({ query: e.target.value });
      this.props.history.push(`?${url}`);
        this.setState({ time_period: e.target.value,});
        for ( var i=0;i<data.data.length;i++)
        {
if(data.data[i].year== e.target.value)
{
    console.log('area',data.data[i].country_or_area);
    a.push(data.data[i].country_or_area);
    
}


        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos;
        })
        
        this.setState({
            filtered: a,
        })
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
        </div>
      );
    }
  }
  export default InputPage