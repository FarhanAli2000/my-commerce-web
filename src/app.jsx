import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootstrap.min.css.map";
import "./assets/css/feather.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/quaries.css";
import Home2 from "./components/home2";
import Home3 from "./components/home3";
import Home4 from "./components/home4";
import Home5 from "./components/home5";
import Home6 from "./components/home6";
import Home7 from "./components/home7";
import Home8 from "./components/home8";
import Home9 from "./components/home9";
import Listing_Grid from "./components/Listings/ListingGrid";
import ServiceDetails from "./components/Listings/serviceDetails/serviceDetails";
import ListingMap from "./components/Listings/listingMap";
import GridSidebar from "./components/Listings/LisitingGridSidebar";
import ListSidebar from "./components/Listings/LisitingListSidebar";
import GridMap from "./components/Listings/GridMap";
import About from "./components/pages/about";
import Pricing from "./components/pages/about/pricing";
import Faq from "./components/pages/faq";
import Gallary from "./components/pages/gallary";
import Category from "./components/pages/category";
import HowItWork from "./components/pages/howitWork";
import TermsCondition from "./components/pages/termsCondition";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import Error404 from "./components/pages/404error";
import Error504 from "./components/pages/504error";
import Dashboard from "./components/userPages/Dashboard";
import Profile from "./components/userPages/profile";
import Bookmarks from "./components/userPages/bookmark";
import MyListe from "./components/userPages/mylisting";
import Message from "./components/userPages/mesage";
import Review from "./components/userPages/review";
import AddLisiting from "./components/userPages/AddLisiting";
import BlogList from "./components/blog/BlogList";
import BlogDetailsh from "./components/blog/BlogList/blogDatalish";
import BlogGrid from "./components/blog/BlogList/BlogGrid";
import BlogListSideBar from "./components/blog/BlogList/blogListSidebar";
import BlogGridSidebar from "./components/blog/BlogList/blogGridSidebar";
import Contract from "./components/contract";
import SignUp from "./components/signUp";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import config from "config";
import Dynamic_Routes from "./components/dyanmic_routes/index";
import HealthCare from "./components/admin/HealthCare/HealthCare";
import RealEstate from "./components/admin/RealEstate/RealEstate";
import Electronic from "./components/admin/Electronic/Electronic";
import GamesSport from "./components/admin/GamesSport/GamesSport";
import ComercialsAds from "./components/admin/ComercialsAds/ComercialsAds";
import AddBooks from "./components/admin/AddBooks/AddBooks";
import AddCars from "./components/admin/AddCars/AddCars";
import AutomotiveComp from "./components/admin/AutomotiveComp/AutomotiveComp";
import ElectronicComp from "./components/admin/ElectronicComp/ElectronicComp";
import FashionStyle from "./components/admin/FashionStyle/FashionStyle";
import HealthCareComp from "./components/admin/HealthCareComp/HealthCareComp";
import JobBoard from "./components/admin/JobBoard/JobBoard";
import Education from "./components/admin/Education/Education";
import RealEstateComp from "./components/admin/RealEstateComp/RealEstateComp";
import TravelComp from "./components/admin/TravelComp/TravelComp";
import SportGamesComp from "./components/admin/SportGamesComp/SportGamesComp";
import PetAnimalsComp from "./components/admin/PetAnimalsComp/PetAnimalsComp";
import Cars from "./components/admin/Cars/Cars";
import Bikes from "./components/home/Bikes/Bikes";
import MAGAZINESCOMP from "./components/admin/MAGAZINESCOMP/MAGAZINESCOMP";
export const App = () => {
  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/index-4" element={<Home4 />} />
        <Route path="/index-5" element={<Home5 />} />
        <Route path="/index-6" element={<Home6 />} />
        <Route path="/index-7" element={<Home7 />} />
        <Route path="/index-8" element={<Home8 />} />
        <Route path="/index-9" element={<Home9 />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/RealEstate" element={<RealEstate />} />
        <Route path="/Electronic" element={<Electronic />} />
        <Route path="/GamesSport" element={<GamesSport />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Bikes" element={<Bikes />} />


        <Route path="/ComercialsAds" element={<ComercialsAds />} />
        <Route path="/AddBooks" element={<AddBooks />} />
        <Route path="/AddCars" element={<AddCars />} />
        <Route path="/AutomotiveComp" element={<AutomotiveComp />} />
        <Route path="/ElectronicComp" element={<ElectronicComp />} />
        <Route path="/FashionStyle" element={<FashionStyle />} />
        <Route path="/HealthCareComp" element={<HealthCareComp />} />
        <Route path="/JobBoard" element={<JobBoard />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/RealEstateComp" element={<RealEstateComp />} />
        <Route path="/TravelComp" element={<TravelComp />} />
        <Route path="/SportGamesComp" element={<SportGamesComp />} />
        <Route path="/PetAnimalsComp" element={<PetAnimalsComp />} />
        <Route path="/MAGAZINESCOMP" element={<MAGAZINESCOMP />} />


        <Route path="/listing-grid" element={<Listing_Grid />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/listingmap-list" element={<ListingMap />} />
        <Route path="/listing-grid-sidebar" element={<GridSidebar />} />
        <Route path="/listing-list-sidebar" element={<ListSidebar />} />
        <Route path="/listingmap-grid" element={<GridMap />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/howitworks" element={<HowItWork />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="/error-500" element={<Error504 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/my-listing" element={<MyListe />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/add-listing" element={<AddLisiting />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-details" element={<BlogDetailsh />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-list-sidebar" element={<BlogListSideBar />} />
        <Route path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route path="/contact" element={<Contract />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* features  dynamic   routes */}
        <Route path="/routes/:id" element={<Dynamic_Routes />} />
        <Route path="/car-details" element={<Dynamic_Routes />} />
        {/* <Route path="/car-details" element={<Dynamic_Routes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
