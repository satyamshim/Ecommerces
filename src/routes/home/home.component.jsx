import {Outlet} from 'react-router-dom'

import Directory from '../../components/directory/directory.component';


const Home = () => {



const categories = [
  
  {
    "id": 2,
    "title": "Dailywear",
    "image": <img alt = 'suitphoto' src = './Photos/2.png' className="db w-100 br5 br--top"/>
  },
  {
    "id": 3,
    "title": "sneakers",
    "image": <img alt = 'suitphoto' src = './Photos/3.png' className="db w-100 br5 br--top"/>
  },
  {
    "id": 4,
    "title": "womens",
    "image": <img alt = 'suitphoto' src = './Photos/4.png' className="db w-100 br5 br--top"/>
  },
  {
    "id":5,
    "title": "womens",
    "image": <img alt = 'suitphoto' src = './Photos/1.png' className="db w-100 br5 br--top"/>
  }
]



  return (
	<div>
      
      <Directory categories={categories}/>
	  <Outlet /> 
	</div>  
    
  );
}

export default Home;
