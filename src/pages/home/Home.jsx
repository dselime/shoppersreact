import React from 'react';
import Header from '../../components/header/Header';
import Firstsection from '../../components/firstsection/Firstsection';
import Secondsection from '../../components/secondsection/Secondsection';
import Thirdsection from '../../components/thirdsection/Thirdsection';
import Fourthsection from '../../components/fourthsection/Fourthsection';
import Fifthsection from '../../components/fifthsection/Fifthsection';
import './Home.module.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
     
    </div>
  );
};

export default Home;
