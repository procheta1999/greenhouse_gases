import React , {useState} from 'react';
import data from '../output.json';
import { Row, Col, Card, Select } from 'antd';
const { Option } = Select;

const Graph=()=>{
    const [countryList,setcountryList]=useState([]);
    var a=[];
    const country =()=>{
        for ( var i=0;i<data.data.length;i++)
        {
            a.push(data.data[i].country_or_area);
        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos; //filters the duplicate values
        })
    }
    return(
        <div id="search">
        <br></br>
         <br></br>
      <Row justify="space-around">
 
   <Col span={8}>
   <center><Card title="Input Country and Parameter" style={{ width: 300 }}>
   <Select style={{ width: 200 }} placeholder='Select Country' showSearch>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select></Card></center>
     </Col>
      
   <Col span={16}> </Col>
 </Row>
        
     
       <br></br>
       
       
     </div>
    );
}
export default Graph ;