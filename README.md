# Visualization of International Greenhouse Gas Emissions Dataset

A React Application to visualize [International Greenhouse Gases Dataset](https://www.kaggle.com/unitednations/international-greenhouse-gas-emissions) .
<br>
Deployed on [https://frosty-mcnulty-66df76.netlify.app/](https://frosty-mcnulty-66df76.netlify.app/) .

## Libraries Used:
1. Ant Design : for better visualization of dataset (Antd Tables, Input fields and also Card component used)
2. country-list : for getting the country codes of the countries selected (used in map visualization)
3. react-jvectormap : for visualization of world map and to customize world map according to dynamic data
4. react-router-dom : for routing purposes 
In the project directory, you can run:

### `yarn install`

Installs all the necessary node modules.
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `Basic Documentation of code`

1. The app is divided into several components.
2. Both functional and class components have been used.
3. In the components folder in pages folder in src, you will find two files:
  <br>
  --> `input.js` : `where the input taken from the input box(i.e. the year) is stored as state and when 'search' button pressed, is passed in the URL as value of parameter 'query'. This input value is used to find out the name of multiple countries in the same time period and also pointing those countries only in the map.`
  <img src="public\pi1 (1).png"/>
  <img src="public\pi1 (2).png"/>
  <br>
  --> `table.js` : `where the whole json file is shown in proper table format along with filter and sorter in a few columns`
4. mainpage.js collects all the component and place them orderly.
5. output.json contains the dataset .
6. For getting the value for the parameter 'query' in URL and setting it in the URL, the two files paramlocation.js and setparams.js are used.

