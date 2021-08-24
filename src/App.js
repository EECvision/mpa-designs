import './App.css';
import MpaBuilder from './components/map-builder/builder';
import MpaLoader from './components/mpa-loader/loader';

import { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [build, setBuild] = useState(true);

  let timeout = null;

  useEffect(()=> {
    if(show){
       timeout = setTimeout(() => {
        setBuild(false)
      }, 10000);
    }else {
      clearTimeout(timeout)
      setBuild(true)
    }
  },[show]);

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setShow(!show)}>{show ? 'Show Loader' : 'Show Buider'}</button>
      </div>

      {
        show
          ?
          <div>
            {
              build
                ?
                <MpaBuilder />
                :
                <div className="homepage">This is the Home Page</div>
            }
          </div>
          : <MpaLoader />
      }
    </div>
  );
}

export default App;
