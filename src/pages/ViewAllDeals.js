import '../App.css';
import '../p.css';
import Header from '../Header';
import Slider from '../Slider';
import Items from '../Items';
import Brands from '../Brands';
import Card  from '../Card';
import SpecialCard from '../SpecialCard';
import Footer from '../Footer';
import ViewAll from '../ViewAll';
function ViewAllDeals() {
  return (
    <div>
     <Header /> 
     <ViewAll/>
     <SpecialCard />
     <Footer />

    </div>
  );
}

export default ViewAllDeals;
