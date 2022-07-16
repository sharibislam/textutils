import { useState } from 'react';
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{

        setAlert({
          msg: message,
          type:type
        })

        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }

  const removeBackgroundColor = () =>{
    document.body.classList.remove('bg-lisht');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  } 
  const toggleMode = (cls)=>{
    removeBackgroundColor();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='4e4ec3';
      showAlert("Dark mode enabled successfully", "success")
      document.title='Textutils-Darkmode'
      // setInterval(() => {
      // document.title='Amazing app'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Please install text utill app'
      //   }, 3000);
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled successfully", "success")
      document.title='Textutils-Lightmode'
    }
  }
  
  return (
   <>
   {/* <Navbar title ="Textutils" aboutText="About Textutils"/> */}
   <Router>
   <Navbar title ="Textutils" mode={mode} toggleMode ={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading ="Enter the text to utilize below"/>   
          </Route>
        </Switch> 
     </div>
   </Router>
   </> 
  );
}

export default App;
