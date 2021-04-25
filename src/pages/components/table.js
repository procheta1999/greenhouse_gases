import React from 'react';
import data from '../output.json'
import { Table, Tag, Space } from 'antd';
import { Card } from 'antd';
const columns = [
    {
      title: 'Country',
      dataIndex: 'country_or_area',
      key: 'country_or_area',
      responsive: ['md'],
      width:'50%',
    },
    {
      title: 'Time Period',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
      responsive: ['md'],
      width:'50%',
      
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        sorter: (a, b) => a.value - b.value,
        responsive: ['md'],
        width:'50%',
      },
      {
        title: 'Category of Emission',
        dataIndex: 'category',
        key: 'category',
        responsive: ['md'],
        width:'50%',
        render: category =>{
            let color, cat;
            if (category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                color = 'red';
                cat = 'CO2';
              }
              else if (category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent') {
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
                else
                {
                    color = 'pink';
                    cat = 'HFCs';
                }
                return(
                    <Tag color={color} key={category}>
                    {cat}
                  </Tag>
                )
        },
        filters: [
            { text: 'CO2', value: 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'Greenhouse Gases', value: 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'CH4', value: 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'N2O', value: 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'SF6', value: 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent' },
            { text: 'HFCs', value: 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent' },
          ],
          onFilter: (value, record) => {
            return record.category.includes(value);
          },
        
      },
    
  ];
const Show=()=>{
    console.log('data',data.data)
    return(
<div>
    <center>
<Card title="GreenHouse Gases Database" style={{ width: 1500 }}>
<Table bordered columns={columns} dataSource={data.data} scroll={{ y: 240 , x: 1300}} /></Card></center>
</div>

    )
}
export default Show