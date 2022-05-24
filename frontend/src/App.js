import React from "react";
import Header from "./components/GeneralisedComponents/Header";
import Footer from "./components/GeneralisedComponents/Footer";
import About from "./components/GeneralisedComponents/About";
import Home from "./components/GeneralisedComponents/Home";
import HouseHoldModel from "./components/Models/houseHoldModel";
import BatteriesInverters from "./components/Models/BatteriesInverters";
import SolarPower from "./components/Models/SolarPower";
import PrivacyPolicy from "./components/GeneralisedComponents/PrivacyPolicy";
import Result from "./components/Models/houseHoldModelvalue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/backendmodel/post-list";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000/api/posts/";

const App = () => {

  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res)
        console.log(res.data);
        setposts(res.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey1" element={<HouseHoldModel/>}/>
          <Route path="/journey3" element={<BatteriesInverters/>}/>
          <Route path="/journey2" element={<SolarPower/>}/>
          <Route path="/pp" element={<PrivacyPolicy />} />
          <Route path="/result" element={<Result />} />
          <Route path="/blogs" element={<PostList data={posts} />} />
        </Routes>
        <div>
        
        </div>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
