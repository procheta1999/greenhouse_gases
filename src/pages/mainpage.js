import React ,{useState} from 'react';
import "antd/dist/antd.css";
import InputPage from './components/input';
import Show from './components/table';
import { Card, Tooltip } from 'antd';



const MainPage = props => {
    const { query, history } = props;
    return (
      <div>
        <InputPage history={history} />
        <br></br>
        <Show/>
        
      </div>
    );
  };
  export default MainPage