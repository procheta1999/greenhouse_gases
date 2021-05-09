import React , {useState} from 'react';
import {useEffect} from 'react';
import data from '../output.json';
import { Row, Col, Card, Select } from 'antd';
const { Option } = Select;

const Graph=()=>{
    const [countryList,setcountryList]=useState([]);
    const [categoryList,setcategoryList]=useState([]);
    const country =()=>{
        var a=[];
        var b=[];
        for ( var i=0;i<data.data.length;i++)
        {
            a.push(data.data[i].country_or_area);
            b.push(data.data[i].category);
        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos; //filters the duplicate values
        })
        b = b.filter(function(item, pos) {
            return b.indexOf(item) == pos; //filters the duplicate values
        })
        setcountryList(a);
        setcategoryList(b);
        console.log('countrylist',categoryList);
    }
    useEffect(() => {
        console.log('data',data.data);
        country();
        console.log('mount it!');
    }, []); 
    return(
        <div id="search">
        <br></br>
         <br></br>
      <Row justify="space-around">
 
   <Col span={8}>
   <center><Card title="Input Country and Parameter" style={{ width: 300 }}>
   <Select style={{ width: 200 }} placeholder='Select Country' showSearch>
       {countryList.map(country=> <Option key={country} value={country}>{country}</Option>)}
    </Select>
    <br></br>
    <br></br>
    <Select style={{ width: 200 }} placeholder='Select Parameter(Category)' showSearch>
       {categoryList.map(category=> <Option key={category} value={category}>{category}</Option>)}
    </Select></Card></center>
     </Col>
      
   <Col span={16}> </Col>
 </Row>
        
     
       <br></br>
       
       
     </div>
    );
}
export default Graph ;