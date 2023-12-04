import '../App.css';
import '../p.css';
import Header from '../Header';
import Slider from '../Slider';
import Items from '../Items';
import Brands from '../Brands';
import Card  from '../Card';
import SpecialCard from '../SpecialCard';
import Footer from '../Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
 
  return (
    <div>
     <Header />  
     <Slider />
     <Brands c={"b"} />
     <Items/>
     <Brands  />
     <div className='mt-5'>
        <Items/>
     </div>
     <Card />
     <SpecialCard />
     <Brands />
     <Footer />

    </div>
  );
}

export default HomePage;
