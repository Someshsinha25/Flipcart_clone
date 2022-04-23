
import './App.css';
import {dummyData} from'./data.js';
import Card from './card'

function App() {
let firstCard;
for (let i=0; i<dummyData.length; i++){
  firstCard = dummyData[i];
}
  return (

    <div className="App">
      <div className='nav' >
        Navbar
      </div>
      <div className='main'>
        <div className='side'>
          side bar
        </div>

        <div className='card'>
          card container 
          {
            dummyData.map((tits)=> 
             <Card cardDetails={tits} />
            )
          }


          <div className='info'> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
