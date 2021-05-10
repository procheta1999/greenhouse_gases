import React ,{useState} from 'react';
import { Suspense } from 'react';
import "antd/dist/antd.css";
import {LoadingOutlined} from '@ant-design/icons';
// import InputPage from './components/input';
// import Show from './components/table';
import { Card, Tooltip } from 'antd';

const InputPage = React.lazy(() => import('./components/input'));
const Show = React.lazy(() => import('./components/table'));
const Chart = React.lazy(()=>import ('./components/chart'))
const MainPage = props => {
    const { query, history, country, category } = props;
    return (
      <Suspense fallback={<div style={{marginTop:'300px', marginLeft:'700px'}}><LoadingOutlined style={{color:'blue',fontSize:'100px'}}/></div>}>
        <h1 style={{textAlign:'center'}}>International Greenhouse Gas Emissions Data Visualization</h1>
        <br></br>
        <center><Card title="International Greenhouse Gas Emissions Dataset Visualization" style={{ width: 1000 }}>
        GHG (Greenhouse Gas) emission inventories are developed by Parties to the Convention using scientific and methodological guidance from the Intergovernmental Panel on Climate Change (IPCC), such as 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Revised Guidelines for National Greenhouse Gas Inventories (1996), IPCC Good Practice Guidance and Uncertainty Management in National Greenhouse Gas Inventories (2000) and IPCC Good Practice Guidance on Land Use, Land-use Change and Forestry (2003).<a href="https://www.kaggle.com/unitednations/international-greenhouse-gas-emissions">(As per Kaggle)</a>
        <br></br>
        So you may not find information regarding a few countries, here.
              </Card></center>
        <InputPage history={history} />
        <br></br>
        <Chart history={history}/>
        <br></br>
        <Show/>
       
     </Suspense>
    );
  };
  export default MainPage