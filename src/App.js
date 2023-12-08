import { useState } from "react";
import Background1 from "./componets/Back1/Background1";
import ListCars from "./componets/ShowCar/ListCars";
import Navbar from "./componets/Navbar/Navbar";
import DescriptionCars from "./componets/ShowCar/DescriptionCars";
import OutstandingCar from "./componets/ShowCar/OutstandingCar";
import FindOutMore from "./componets/ShowCar/FindOutMore";
import Footer from "./componets/ShowCar/Footer";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import AllModel from "./componets/ShowCar/All-Model";
import InforEtronGT from "./componets/ShowCar/InforEtronGT";
import EventCar from "./componets/ShowCar/New&Event";
import SearchModel from "./componets/ShowCar/SearchModel";


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Background1 />
              <ListCars />
              <DescriptionCars />
              <OutstandingCar />
              <FindOutMore />
              <Footer />
            </>
          }
          />
          <Route path="/All-Models" element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
          >
            <Route index element={
              <>
                <AllModel />
              </>
            }
            />
            <Route path="InforEtronGT" element={
              <>
                <InforEtronGT />
              </>
            }
            />
          </Route>
          <Route path="New&Event" element={
            <>
              <Navbar />
              <EventCar />
              <Footer />
            </>
          } />
        </Routes>
        <Routes>
          <Route
            path="Search"
            element={
              <>
                <Navbar onSearch={handleSearch} />
                <SearchModel searchQuery={searchQuery} />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
