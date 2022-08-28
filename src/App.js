import './App.css';
import Card from './Components/Card';
import Sdata from './Components/Sdata';

const ncard= (currE)=>{
  return(
    <Card 
    imgSrc={currE.imagescr} 
    title={currE.title}  
    sname={currE.sname} 
    link={currE.links}/>
  );
}



function App() {
  return(
    <>
    <h1 className='heading'>List of Top 10 Netflix Series in 2022</h1>

    {Sdata.map(ncard)}
       
    </>
  );
}

export default App;
