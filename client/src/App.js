import { useEffect } from 'react';
import './App.css';
import Approve from './components/approve/Approve';
import End from './components/end/End';
import Question from './components/questions/Question';
import Signup from './components/signup/Signup';
import WelcomePage from './components/welcome/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadQuestions } from './hooks/FetchQuestion';

function App() {
  
  return (
    <Router>
       <div className="App">
          
          <Routes>
          <Route path='/' exact element={<WelcomePage/>}/>
          <Route path='/auth' element={<Signup/>}/>
          <Route path='/auth/questions' element={< Approve/>} />
          <Route path='/auth/questions/:id' element={< Question/>} />
          <Route path='/auth/thankyou' element={< End/>} />
       </Routes>
       </div>
    </Router>
   
  );
}

export default App;
