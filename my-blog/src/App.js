import Blog from "./components/Blog"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Business from "./Pages/Business";

import Footer from "./components/Footer";


function App() {
  return (
<>
<Router>


      <Routes>
   <Route path='/' exact element={<Blog />} />
   <Route path='/Business' exact element={<Business />} />

      </Routes>
      
      </Router>
      <Footer>

      </Footer>
</>

  );
}

export default App;
