import React from 'react';
import data from '../output.json';
import setParams from '../setparams';
import { Button, Card, Input, Row, Col, Table, Tag } from 'antd';
import { VectorMap } from "react-jvectormap";
const { getCode } = require("country-list");
const columns = [
  {
    title: 'Country',
    dataIndex: 'name',
    key: 'name',
    responsive: ['sm'],
    width:'50%',
    filters: [
      { text: 'Australia', value: 'Australia' },
      { text: 'Austria', value: 'Austria' },
      { text: 'Belarus', value: 'Belarus' },
      { text: 'Belgium', value: 'Belgium' },
      { text: 'Bulgaria', value: 'Bulgaria' },
      { text: 'Canada', value: 'Canada' },
      { text: 'Croatia', value: 'Croatia' },
      { text: 'Cyprus', value: 'Cyprus' },
      { text: 'Czech Republic', value: 'Czech Republic' },
      { text: 'Denmark', value: 'Denmark' },
      { text: 'Estonia', value: 'Estonia' },
      { text: 'European Union', value: 'European Union' },
      { text: 'Finland', value: 'Finland' },
      { text: 'France', value: 'France' },
      { text: 'Germany', value: 'Germany' },
      { text: 'Greece', value: 'Greece' },
      { text: 'Hungary', value: 'Hungary' },
      { text: 'Iceland', value: 'Iceland' },
      { text: 'Ireland', value: 'Ireland' },
      { text: 'Italy', value: 'Italy' },
      { text: 'Japan', value: 'Japan' },
      { text: 'Latvia', value: 'Latvia' },
      { text: 'Liechtenstein', value: 'Liechtenstein' },
      {text: 'Lithuania' , value: 'Lithuania'},
      {text : 'Luxembourg' , value:'Luxembourg'},
      {text:'Malta', value:'Malta'},
      {text:'Monaco',value:'Monaco'},
      {text:'Netherlands',value:'Netherlands'},
      {text:'New Zealand',value:'New Zealand'},
      {text:'Norway',value:'Norway'},
      {text:'Poland',value:'Poland'},
      {text:'Portugal',value:'Portugal'},
      {text:'Romania',value:'Romania'},
      {text:'Russian Federation',value:'Russian Federation'},
      {text:'Slovakia',value:'Slovakia'},
      {text:'Slovenia',value:'Slovenia'},
      {text:'Spain',value:'Spain'},
      {text:'Sweden',value:'Sweden'},
      {text:'Switzerland',value:'Switzerland'},
      {text:'Turkey',value:'Turkey'},
      {text:'Ukraine',value:'Ukraine'},
      {text:'United Kingdom',value:'United Kingdom'},
      {text:'United States of America',value:'United States of America'},
    ],
    onFilter: (value, record) => {
      return record.name.includes(value);
    },
  },
 
  {
      title: 'Value(in kilotones CO2 equivalent)',
      dataIndex: 'value',
      key: 'value',
      sorter: (a, b) => a.value - b.value,
      responsive: ['sm'],
      width:'50%',
     
    },
    {
      title: 'Category of Emission',
      dataIndex: 'category',
      key: 'category',
      responsive: ['sm'],
      width:'50%',
      render: category =>{
          let color, cat;
          if (category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
              color = 'red';
              cat = 'CO2';
            }
            else if (category === 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                color = 'blue';
                cat = 'Greenhouse Gases';
              }
              else if (category === 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                  color = 'lime' ;
                  cat = 'CH4';
              }
              else if (category === 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                  color = 'volcano' ;
                  cat = 'N2O';
              }
              else if(category === 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent'){
                  color = 'purple';
                  cat = 'SF6'
              }
              else if(category === 'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent')
              {
                  color = 'pink';
                  cat = 'HFCs';
              }
              else if(category === 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'){
                color = 'magenta';
                cat = 'HFCs & PFCs unspecified mix';
              }
              else if(category === 'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent')
              {
                color = 'gold';
                cat = 'NF3';
              }
              else if (category === 'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent')
              {
                color = '#108ee9';
                cat = 'PFCs';
              }
              else if (category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent')
              {
                color = 'geekblue';
                cat = 'Greenhouse Gases(including indirect CO2)'
              }
              return(
                  <Tag color={color} key={category}>
                  {cat}
                </Tag>
              )
      },
      filters: [
          { text: 'CO2', value: 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
          { text: 'Greenhouse Gases', value: 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
          { text: 'CH4', value: 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
          { text: 'N2O', value: 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
          { text: 'SF6', value: 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent' },
          { text: 'HFCs & PFCs unspecified mix', value: 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent' },
        {text:'PFCs', value:'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'},
        {text :'NF3',value:'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent'},
        {text:'HFCs',value:'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent'},
        {text:'Greenhouse Gases(including indirect CO2)',value:'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent'},

        ],
        onFilter: (value, record) => {
          return record.category.includes(value);
        },
      
    },
  
];
class InputPage extends React.PureComponent {
    state = { 
        time_period : '',
        filtered:[],
        data_geo:{},
        table_data:[],
        category:[],

    };
    update = e => this.setState({ time_period: e.target.value }); //updates state
    updateInputValue = () => {
      var a=[];
        var b={};
        var d=[];
      
        
        const url = setParams({ query: this.state.time_period }); //sets the 'query' parameter value by the 'time_period' value of state
      this.props.history.push(`?${url}`); // pushes the parameter value to url

        for ( var i=0;i<data.data.length;i++)
        {
if(data.data[i].year== this.state.time_period)
{
  var c={};
    // console.log('area',data.data[i].country_or_area,i);
    var country = data.data[i].country_or_area;
    var arr=[];
    var category=[];
    for (var j=0;j<data.data.length;j++)
    {
      if(data.data[j].country_or_area===country && data.data[j].year===this.state.time_period)
      {
        // console.log('area',data.data[j].country_or_area,data.data[j].value,data.data[j].category);
        arr.push(data.data[j].value);
        if (data.data[j].category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
         category.push('CO2');
        }
        else if (data.data[j].category === 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
          category.push('Greenhouse Gases');
          }
          else if (data.data[j].category === 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
            category.push('CH4');
          }
          else if (data.data[j].category === 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
            category.push('N2O');
          }
          else if(data.data[j].category === 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent'){
            category.push('SF6');
          }
          else if(data.data[j].category === 'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent')
          {
            category.push('HFCs');
          }
          else if(data.data[j].category === 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'){
            category.push('HFCs & PFCs unspecified mix');
          }
          else if(data.data[j].category === 'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent')
          {
            category.push('NF3');
          }
          else if (data.data[j].category === 'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent')
          {
            category.push('PFCs');
          }
          else if (data.data[j].category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent')
          {
            category.push('Greenhouse Gases(including indirect CO2)');
          }
      }
    }
    // console.log('area',arr);
    // a.push(data.data[i].value); // selects countries from the specific time period (this.state.time_period)
    b[getCode(data.data[i].country_or_area)]=arr; // prepare object for map visualization containing country code and emission value in that particular time period
    c['name']=data.data[i].country_or_area;
    c['value']=data.data[i].value;
    c['category']=data.data[i].category;
    d.push(c);
}



        }
        console.log('final',b);
        // console.log('data_filtered',d);
        // a = a.filter(function(item, pos) {
        //     return a.indexOf(item) == pos; //filters the duplicate values
        // })
        
        this.setState({
          category:category,
          table_data:d,
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
         </Card></center>
         <br></br>
         <br></br>
         <center>
          <Card title="Values of Emisssion of Countries" style={{ width: 500 }}>
          <Table bordered columns={columns} dataSource={this.state.table_data} scroll={{ y: 240}} />
              </Card>
          </center></Col>
         
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
          onRegionTipShow={(e, el, code)=>{
            var x;
            var country = this.state.data_geo[code];
if(country === undefined) {
   el.html(el.html());
}else{
  console.log(this.state.data_geo[code]);
  for(var k=0;k<this.state.data_geo[code].length;k++)
  {
          x=el.html()+'<br/> value of ' + this.state.category[k] + ' emission : '+' '+this.state.data_geo[code][k]+'<br/>';
          el.html(x);
  }
}

            // el.html(el.html()+' (values - '+'<br/>'+this.state.data_geo[code]+')');
           
            // for (i=0;i<Object.keys(this.state.data_geo);i++)
            // {
            //   var x= 
            // }
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
          
          
        </div>
      );
    }
  }
  export default InputPage