import React , {useState} from 'react';
import {useEffect} from 'react';
import data from '../output.json';
import { Row, Col, Card, Select } from 'antd';
const { Option } = Select;

const Graph=()=>{
    const [countryList,setcountryList]=useState([]);
    const [categoryList,setcategoryList]=useState([]);
    const [countrySelect,setcountrySelect]=useState('');
    const [categorySelect,setcategorySelect]=useState('');
const updateCountry = value => setcountrySelect(value);
const updateCategory = value => setcategorySelect(value);
    const country =()=>{
        var a=[];
        var b=[];
        for ( var i=0;i<data.data.length;i++)
        {
            a.push(data.data[i].country_or_area);
            if (data.data[i].category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                b.push('CO2');
               }
               else if (data.data[i].category === 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                 b.push('Greenhouse Gases');
                 }
                 else if (data.data[i].category === 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    b.push('CH4');
                 }
                 else if (data.data[i].category === 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    b.push('N2O');
                 }
                 else if(data.data[i].category === 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent'){
                    b.push('SF6');
                 }
                 else if(data.data[i].category === 'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent')
                 {
                    b.push('HFCs');
                 }
                 else if(data.data[i].category === 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'){
                    b.push('HFCs & PFCs unspecified mix');
                 }
                 else if(data.data[i].category === 'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent')
                 {
                    b.push('NF3');
                 }
                 else if (data.data[i].category === 'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent')
                 {
                    b.push('PFCs');
                 }
                 else if (data.data[i].category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent')
                 {
                    b.push('Greenhouse Gases(including indirect CO2)');
                 }
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
   <Select style={{ width: 200 }} placeholder='Select Country' showSearch onChange={updateCountry}>
       {countryList.map(country=> <Option key={country} value={country}>{country}</Option>)}
    </Select>
    <br></br>
    <br></br>
    <Select style={{ width: 200 }} placeholder='Select Parameter(Category)' showSearch onChange={updateCategory}>
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