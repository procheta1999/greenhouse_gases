import React ,{useState} from 'react';
import "antd/dist/antd.css";
import InputPage from './components/input';
import ResultsPage from './components/output';
import Show from './components/table';
import { Card, Tooltip } from 'antd';



const MainPage = props => {
    const [content, setContent] = useState("");
    const { query, history } = props;
    return (
      <div>
        <InputPage history={history} />
        <br></br>

        <br></br>
        <ResultsPage query={query} />
        <br></br>
        <Show/>
        
      </div>
    );
  };
  export default MainPage