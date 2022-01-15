import React  from "react";
import {Route, Routes, useLocation} from "react-router-dom"
import { Flex } from "@chakra-ui/react";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import { AnimatePresence } from "framer-motion";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen"
import ContactScreen from "./screens/ContactScreen";
import Header from "./components/Header";
const App = () =>{
    const location = useLocation()
    return(
        <>
        <Header />
         <Flex
         as="main"
         minH="100vh"
         bg="primaryBlack.100"
         direction="column"
         overflowX="hidden"
         maxW="100vw"
        >
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/' exact element={<HomeScreen/>} />
            <Route path="/about" element ={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} /> 
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/blogs" element={<BlogScreen />} />
          </Routes>
        </AnimatePresence>
        </Flex>
        </>
    )
}

export default App              