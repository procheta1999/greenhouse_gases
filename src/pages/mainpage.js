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
    const { query, history } = props;
    return (
      <Suspense fallback={<div style={{marginTop:'300px', marginLeft:'700px'}}><LoadingOutlined style={{color:'blue',fontSize:'100px'}}/></div>}>
        
        <InputPage history={history} />
        <br></br>
        <Chart/>
        <br></br>
        <Show/>
       
     </Suspense>
    );
  };
  export default MainPage