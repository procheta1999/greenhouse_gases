import React , {useState} from 'react';
import {useEffect} from 'react';
import data from '../output.json';
import { Chart } from 'react-charts'
import { Row, Col, Card, Select , Button, Typography, Tooltip} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import setPath from '../setpath';
import getKeyByValue from './key';
import sortFunction from './sort';
const { Option } = Select;

const Graph= props =>{
    const [countryList,setcountryList]=useState([]);
    const [categoryList,setcategoryList]=useState([]);
    const [countrySelect,setcountrySelect]=useState('');
    const [categorySelect,setcategorySelect]=useState('');
    const [dataChartList,setdataChartList]=useState([]);
    const [progress,setProgress]=useState(false);
const updateCountry = value => setcountrySelect(value);
const updateCategory = value => setcategorySelect(value);
const categoryListFilt={
    carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent:'CO2',
    greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent:'Greenhouse Gases',
    methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent:'CH4' ,
    nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent:'N2O',
    sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent:'SF6',
    hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent:'HFCs',
    unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent:'HFCs & PFCs unspecified mix',
    nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent:'NF3',
    perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent:'PFCs',
    greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent:'Greenhouse Gases(including indirect CO2)',
}
const updationValue=()=>
{
    var b=[];
    const url= setPath({ country: countrySelect,category: categorySelect  });
    props.history.push(`?${url}`);
    for(var k=0;k<data.data.length;k++)
    {
        var a=[];
        if(data.data[k].country_or_area===countrySelect && data.data[k].category=== getKeyByValue(categoryListFilt,categorySelect))
        {
           a.push(parseInt(data.data[k].year));
           a.push(parseFloat(data.data[k].value)); 
           b.push(a);
        }
       
    }
    console.log('map',b.sort(sortFunction));
    setdataChartList(b.sort(sortFunction));
    console.log('datachartlist',dataChartList);
    // if(dataChartList.length===0)
    // {
         setProgress(true);
    // }
    // else{
    // setProgress(true);
    // }
}

 const dataChart = React.useMemo(
    () => [
      {
        label: 'Value of emission',
        data: dataChartList,
      },
    //   {
    //     label: 'Series 2',
    //     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //   }
    ],
    [dataChartList,setProgress]
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom',show:[1990,1991] },
      { type: 'linear', position: 'left' }
    ],
    [dataChartList,setProgress]
  )
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
    console.log('datachartList',dataChartList)
    // useEffect(() => {
    //    dataChart();
    // }, [dataChartList]); 
    return(
        <div id="search">
        <br></br>
         <br></br>
      <Row justify="space-around">
 
   <Col span={8}>
   <center><Card title="Input Country and Parameter" style={{ width: 300 }} extra={<Tooltip title="Plot showing year along X-axis and values of emission of the parameter along Y-axis">
              <InfoCircleOutlined style={{ color: 'blue' }} />
            </Tooltip>}>
   
            
   <Select style={{ width: 200 }} placeholder='Select Country' showSearch onChange={updateCountry}>
       {countryList.map(country=> <Option key={country} value={country}>{country}</Option>)}
    </Select>
    <br></br>
    <br></br>
    <Select style={{ width: 200 }} placeholder='Select Parameter(Category)' showSearch onChange={updateCategory}>
       {categoryList.map(category=> <Option key={category} value={category}>{category}</Option>)}
    </Select>
    <br></br>
    <br></br>
    <Button type="primary" onClick={updationValue}>Search</Button></Card></center>
     </Col>
      
   <Col span={13}>
   {progress===false ? (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'300px'}}>
      <h3 style={{textAlign:'center'}}>Select country and parameter(category of emission) and see how the values of emission have changed over years! Simply select the values and see the line chart appearing in this space.</h3>
    </div>):(<div>{dataChartList.length===0 ? (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'300px'}}>
      <h3 style={{textAlign:'center'}}>Sorry! No data to show.</h3>
    </div>):(<div
      style={{
        width: '700px',
        height: '300px'
      }}
      className="chart"
    >
      <Chart data={dataChart} axes={axes} tooltip/>
    </div>)}</div>)}
    <br></br>
    <br></br></Col>
 </Row>
        
     
       <br></br>
       
       
     </div>
    );
}
export default Graph ;