//  import ContactList from './ass1/ContactList';
// import './App.css';
// import { ThemeProvider, ColorModeProvider, ChakraProvider } from "@chakra-ui/react"
//  import Github from './Day3/Github';
//  import {Route,Routes} from 'react-router-dom'
//  import {Home} from './Components/Home';
//  import RestaurantDetails from './Components/RestaurantDetails'
// import First from './chakra/First';

// function App() {
  
//   return (
//     <div className="App">
//       <ContactList/>
//       <Github/>
//       <routes>
//         <route path='/' element={<Home></Home>}></route>
//       </routes> 
//        <RestaurantDetails/>
//       <ChakraProvider>

//       <First/>
//       </ChakraProvider>
//     </div>
//   );
// }


// export default App;
import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
