import './App.css';
import BrandName from './components/SectionOne/Brand';
import Header from './components/SectionOne/Header';
import FooterNavbar from './components/SectionThree/FooterNavbar';
import CardSection from './components/SectionTwo/CardSection';
import SeeCartButton from './components/SectionThree/SeeCartButton';


function App() {

  return (
    <>
      <Header />
      <BrandName />
      <CardSection />
      <SeeCartButton/>
      <FooterNavbar />
    </>
  );
}

export default App;
