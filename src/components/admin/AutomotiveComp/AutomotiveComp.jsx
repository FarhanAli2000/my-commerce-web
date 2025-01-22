import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../../home/header"; // Ensure Header is correctly implemented and imported
import Footer from "../../home/footer/Footer";
import automative from "../../home/automative.png";
import electronic from "../../home/electronic.png";
import fashion from "../../home/fashion.png";
import healthcare from "../../home/healthcare.png";
import job from "../../home/job.png";
import education from "../../home/education.png";
import realestate from "../../home/realestate (2).png";
import travel from "../../home/travel.png";
import sport from "../../home/sportandgames.png";
import magazine from "../../home/magazine.png";
import pet from "../../home/pet .png";
import iron from "../../home/iron.png";
import image1 from "../../../assets/img/banner/bannerimage1.png";
import image3 from "../../../assets/img/banner/bannerimage3.png";
import image4 from "../../../assets/img/banner/bannerimage4.png";
import LatestBlog from "../../blog/BlogList/LatestBlog/LatestBlog.jsx";
import image2 from "../../../assets/img/banner/bannerimage2.png";
import xIcon from "../../home/x.png";
import insta from "../../home/insta.png";
import fb from "../../home/fb.png";
import tiktok from "../../home/tiktoc.png";
import whatapp from "../../home/whatapp (3).png";
import Carousel from "../../home/slider/Carousel";
import AutomativeCarosuel from "../..//home/slider/AutomativeCarousel.jsx";
import RealEstateCarousel from "../..//home/slider/RealEstateCarousel.jsx";
import ElectronicCarousel from "../..//home/slider/ElectronicCarousel.jsx";
import HealthCareCarousel from "../..//home/slider/HealthCareCarousel.jsx";
import SportandgameCarouseCarousel from "../..//home/slider/SportandgameCarouseCarousel.jsx";
import ComercialsAds from "../../home/ComercialsAds/ComercialsAds.jsx";
import popup from "../../home/popup_image.png";
import { Accordion } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { addDoc, collection, getDocs, doc } from "firebase/firestore";
import { db } from "./../../Firebase/FirebaseConfig.jsx";
import { FaHeart, FaPhone, FaSearch, FaWhatsapp } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const AutomotiveComp = () => {
  const parms = useLocation().pathname;
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Handle city selection
  const [carsData, setCars] = useState([]); // All cars data
  const [filteredCars, setFilteredCars] = useState([]); // Filtered cars based on search & city
  const [searchQuery, setSearchQuery] = useState(""); // Search query for title and city
  const [selectedCities, setSelectedCities] = useState([]); // Selected cities for filtering
  const [selectedEmirates, setSelectedEmirates] = useState([]); // Selected Emirates for filtering
  const [selectedCarsMake, setSelectedCarsMake] = useState([]);
  console.log(selectedCarsMake, "selectedCarsMake______");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedToyotaLocations, setSelectedToyotaLocations] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const [selectedMercedesBenzLocations, setSelectedMercedesBenzLocations] =
    useState([]);

  // Handle checkbox change for Toyota locations
  const [selectedCars1, setSelectedCars1] = useState([]);
  const [selectedOptionTransmission, setSelectedOptionTransmission] =
    useState("");
  const [logSelectedColor, setlogSelectedColor] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);
  const [fromCC, setFromCC] = useState("");
  const [toCC, setToCC] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState([]);
  const [selectedCarsBodyType, setSelectedCarsBodyType] = useState([]);
  const [selectedNumbersNumberofDoors, setSelectedNumbersNumberofDoors] =
    useState([]);
  const [selectedValuesSeatCapacity, setSelectedValuesSeatCapacity] = useState(
    []
  );
  const [selectedClassesModelCategory, setSelectedClassesModelCategory] =
    useState([]);
  const [selectedCheckboxSellerType, setSelectedCheckboxSellerType] =
    useState("");
  const [pictureAvailability, setPictureAvailability] = useState("");
  const [selectedOptionVideoAvailability, setSelectedOptionVideoAvailability] =
    useState("");
  const [selectedOptionisFeatured, setSelectedOptionisFeatured] = useState("");

  const handleCheckboxChangeisFeatured = (event) => {
    const isChecked = event.target.checked;
    const value = isChecked ? "Featured Ad" : "Not Featured Ad";
    setSelectedOptionisFeatured(value);
    console.log(`Selected Option:____ ${value}`);
  };

  const handleCheckboxChangeVideoAvailability = (event) => {
    const isChecked = event.target.checked;
    const value = isChecked ? "With Video" : "Without Video";
    setSelectedOptionVideoAvailability(value);
    console.log(`Selected Option: ${value}`);
  };
  const handleCheckboxChangePictureAvailability = (event) => {
    const checked = event.target.checked;
    const value = checked ? "With Pictures" : "Without Pictures";
    setPictureAvailability(value);
    console.log(`PictureAvailability: ${value}`);
  };

  const handleCheckboxChangeSellerType = (event, label) => {
    const isChecked = event.target.checked;
    const selectedLabel = isChecked ? label : "";
    setSelectedCheckboxSellerType(selectedLabel);
    console.log(`Selected: ${selectedLabel}`);
  };
  const handleCheckboxChangeModelCategory = (label) => {
    setSelectedClassesModelCategory((prevSelected) => {
      const isChecked = prevSelected.includes(label);
      const updatedSelection = isChecked
        ? prevSelected.filter((item) => item !== label) // Remove if unchecked
        : [...prevSelected, label]; // Add if checked

      console.log("Selected Classes:", updatedSelection);
      return updatedSelection;
    });
  };

  const handleCheckboxChangeSeatCapacity = (label) => {
    setSelectedValuesSeatCapacity((prevSelected) => {
      const isChecked = prevSelected.includes(label);
      const updatedSelection = isChecked
        ? prevSelected.filter((item) => item !== label) // Remove if unchecked
        : [...prevSelected, label]; // Add if checked

      console.log("Selected Values:", updatedSelection);
      return updatedSelection;
    });
  };
  const handleCheckboxChangeNumberofDoors = (label) => {
    setSelectedNumbersNumberofDoors((prevSelected) => {
      const isChecked = prevSelected.includes(label);
      const updatedSelection = isChecked
        ? prevSelected.filter((item) => item !== label) // Remove if unchecked
        : [...prevSelected, label]; // Add if checked

      console.log("Selected Numbers:", updatedSelection);
      return updatedSelection;
    });
  };
  const handleCheckboxChangeBodyType = (label) => {
    setSelectedCarsBodyType((prevSelected) => {
      const isChecked = prevSelected.includes(label);
      const updatedSelection = isChecked
        ? prevSelected.filter((item) => item !== label) // Remove if unchecked
        : [...prevSelected, label]; // Add if checked

      console.log("Selected Car Types:", updatedSelection);
      return updatedSelection;
    });
  };
  const handleCheckboxChangeAssembly = (label) => {
    setSelectedAssembly((prevSelected) => {
      const isChecked = prevSelected.includes(label);
      const updatedSelection = isChecked
        ? prevSelected.filter((item) => item !== label) // Remove if unchecked
        : [...prevSelected, label]; // Add if checked

      console.log("Selected Items:", updatedSelection);
      return updatedSelection;
    });
  };
  // Handle changes for "From" input
  const handleFromChangeCC = (e) => {
    setFromCC(e.target.value);
    console.log("From Date:__", e.target.value);
  };

  // Handle changes for "To" input
  const handleToChangeCC = (e) => {
    setToCC(e.target.value);
    console.log("From Date:___To Date:", e.target.value);
  };

  const handleCheckboxChangeEngineType = (label) => {
    setSelectedEngines((prevSelected) => {
      if (prevSelected.includes(label)) {
        // Remove the label if already selected
        return prevSelected.filter((item) => item !== label);
      } else {
        // Add the label to the selected array
        return [...prevSelected, label];
      }
    });
  };

  console.log("Selected Engines:", selectedEngines);

  const handleCheckboxChangeColor = (label) => {
    setlogSelectedColor((prevSelected) => {
      if (prevSelected.includes(label)) {
        // Remove the label if already selected
        return prevSelected.filter((item) => item !== label);
      } else {
        // Add the label to the selected array
        return [...prevSelected, label];
      }
    });
  };

  console.log("Selected Items:", logSelectedColor);
  const handleCheckboxChangeTransmission = (label) => {
    setSelectedOptionTransmission(label);
    console.log("Selected option:", label);
  };

  // Handle checkbox change
  const handleCarChange = (e, car) => {
    if (e.target.checked) {
      // Add the car to the selected list
      setSelectedCars1((prev) => [...prev, car]);
    } else {
      // Remove the car from the selected list
      setSelectedCars1((prev) => prev.filter((item) => item !== car));
    }
  };

  // Log selected cars to the console whenever the state changes
  console.log("Selected Cars:1", selectedCars1);
  const handleToyotaChange = (e, location) => {
    const isChecked = e.target.checked;
    setSelectedMercedesBenzLocations((prevState) => {
      const newToyotaLocations = isChecked
        ? [...prevState, location]
        : prevState.filter((loc) => loc !== location);
      return newToyotaLocations;
    });
  };

  // Handle checkbox change for Mercedes-Benz locations
  const handleMercedesBenzChange = (e, location) => {
    const isChecked = e.target.checked;
    setSelectedMercedesBenzLocations((prevState) => {
      const newMercedesBenzLocations = isChecked
        ? [...prevState, location]
        : prevState.filter((loc) => loc !== location);
      return newMercedesBenzLocations;
    });
  };

  // Log selected locations whenever state changes
  console.log("Selected______ Toyota Locations:", selectedToyotaLocations);
  console.log(
    "Selected______ Mercedes-Benz Locations:",
    selectedMercedesBenzLocations
  );
  // Handle changes to the "From" and "To" input fields
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  // Log the selected dates
  console.log("fromDate__Select", fromDate);
  console.log("fromDate__Select1111:", toDate);

  // Handle change for 'from' input
  const handleFromChange = (e) => {
    setFromValue(e.target.value);
  };

  // Handle change for 'to' input
  const handleToChange = (e) => {
    setToValue(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    const carLabel = event.target.name; // Use the name attribute to identify the checkbox
    if (event.target.checked) {
      // Add the label to the state if checked
      setSelectedCarsMake((prev) => [...prev, carLabel]);
    } else {
      // Remove the label from the state if unchecked
      setSelectedCarsMake((prev) => prev.filter((car) => car !== carLabel));
    }
  };
  const handleEmiratesChange = (e, emirate) => {
    if (e.target.checked) {
      setSelectedEmirates((prevEmirates) => {
        const updatedEmirates = [...prevEmirates, emirate];
        filterCars(searchQuery, updatedEmirates); // Apply the filter
        return updatedEmirates;
      });
    } else {
      setSelectedEmirates((prevEmirates) => {
        const updatedEmirates = prevEmirates.filter((item) => item !== emirate);
        filterCars(searchQuery, updatedEmirates); // Apply the filter
        return updatedEmirates;
      });
    }
  };
  useEffect(() => {
    filterCars(searchQuery, selectedEmirates);
  }, [selectedEmirates, searchQuery]);
  useEffect(() => {
    console.log("Selected Emirates: ", selectedEmirates);
  }, [selectedEmirates]);
  // Fetch cars data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true); // Show spinner
        const carsCollectionRef = collection(db, "Cars");
        const querySnapshot = await getDocs(carsCollectionRef);
        const carsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(carsData);
        setLoading(false);

        console.log(carsData, "carsData_________");

        setFilteredCars(carsData); // Initially, show all cars
      } catch (error) {
        console.error("Error getting cars:", error);
      }
    };

    fetchCars();
  }, []);
  const handleCityChange = (e, city) => {
    if (e.target.checked) {
      setSelectedCities((prevCities) => {
        const updatedCities = [...prevCities, city];
        filterCars(searchQuery, updatedCities); // Apply the filter
        return updatedCities;
      });
    } else {
      setSelectedCities((prevCities) => {
        const updatedCities = prevCities.filter((item) => item !== city);
        filterCars(searchQuery, updatedCities); // Apply the filter
        return updatedCities;
      });
    }
  };
  useEffect(() => {
    console.log("Selected Cities: ", selectedCities);
  }, [selectedCities]);

  useEffect(() => {
    setLoading(true);

    filterCars(
      searchQuery,
      selectedCities,
      selectedEmirates,
      selectedCarsMake,
      fromValue,
      toValue,
      fromDate,
      toDate,
      selectedMercedesBenzLocations,
      selectedCars1,
      selectedOptionTransmission,
      logSelectedColor,
      selectedEngines,
      fromCC,
      toCC,
      selectedAssembly,
      selectedCarsBodyType,
      selectedNumbersNumberofDoors,
      selectedValuesSeatCapacity,
      selectedClassesModelCategory,
      selectedCheckboxSellerType,
      pictureAvailability,
      selectedOptionVideoAvailability,
      selectedOptionisFeatured
    );
  }, [
    selectedCities,
    searchQuery,
    selectedEmirates,
    selectedCarsMake,
    fromValue,
    toValue,
    toDate,
    fromDate,
    selectedMercedesBenzLocations,
    selectedCars1,
    selectedOptionTransmission,
    logSelectedColor,
    selectedEngines,
    fromCC,
    toCC,
    selectedAssembly,
    selectedCarsBodyType,
    selectedNumbersNumberofDoors,
    selectedValuesSeatCapacity,
    selectedClassesModelCategory,
    selectedCheckboxSellerType,
    pictureAvailability,
    selectedOptionVideoAvailability,
    selectedOptionisFeatured,
  ]);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter cars based on the search query and selected cities
    filterCars(
      query,
      selectedCities,
      selectedEmirates,
      selectedCarsMake,
      fromValue,
      toValue,
      toDate,
      fromDate,
      selectedMercedesBenzLocations,
      selectedCars1,
      selectedOptionTransmission,
      logSelectedColor,
      selectedEngines,
      fromCC,
      toCC,
      selectedAssembly,
      selectedCarsBodyType,
      selectedNumbersNumberofDoors,
      selectedValuesSeatCapacity,
      selectedClassesModelCategory,
      selectedCheckboxSellerType,
      pictureAvailability,
      selectedOptionVideoAvailability,
      selectedOptionisFeatured
    );
  };
  const filterCars = (
    query,
    cities,
    emirates,
    selectedCarsMake,
    fromValue,
    toValue,
    fromDate,
    toDate,
    selectedMercedesBenzLocations,
    selectedCars1,
    selectedOptionTransmission,
    logSelectedColor,
    selectedEngines,
    fromCC,
    toCC,
    selectedAssembly,
    selectedCarsBodyType,
    selectedNumbersNumberofDoors,
    selectedValuesSeatCapacity,
    selectedClassesModelCategory,
    selectedCheckboxSellerType,
    pictureAvailability,
    selectedOptionVideoAvailability,
    selectedOptionisFeatured
  ) => {
    let filtered = carsData;

    // Filter by search query
    if (query.trim() !== "") {
      const lowercasedQuery = query.toLowerCase();
      filtered = filtered.filter(
        (car) =>
          car.title.toLowerCase().includes(lowercasedQuery) ||
          car.City.toLowerCase().includes(lowercasedQuery) ||
          car.Emirates.toLowerCase().includes(lowercasedQuery) ||
          car.Make.toLowerCase().includes(lowercasedQuery) ||
          car.Registeredin.toLowerCase().includes(lowercasedQuery) ||
          car.Color.toLowerCase().includes(lowercasedQuery) ||
          car.Transmission.toLowerCase().includes(lowercasedQuery) ||
          car.EngineType.toLowerCase().includes(lowercasedQuery) ||
          car.Assembly.toLowerCase().includes(lowercasedQuery) ||
          car.BodyType.toLowerCase().includes(lowercasedQuery) ||
          car.NumberOfDoors.toLowerCase().includes(lowercasedQuery) ||
          car.SeatingCapacity.toLowerCase().includes(lowercasedQuery) ||
          car.ModalCategory.toLowerCase().includes(lowercasedQuery) ||
          car.SellerType.toLowerCase().includes(lowercasedQuery) ||
          car.PictureAvailability.toLowerCase().includes(lowercasedQuery) ||
          car.VideoAvailability.toLowerCase().includes(lowercasedQuery) ||
          car.AdType.toLowerCase().includes(lowercasedQuery) ||
          car.TrustedCars.toLowerCase().includes(lowercasedQuery)
      );
    }
    setLoading(false);

    // Filter by selected cities
    if (selectedOptionVideoAvailability?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedOptionVideoAvailability.includes(car.VideoAvailability)
      );
    }
    // Filter by selected cities
    if (selectedOptionisFeatured?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedOptionisFeatured.includes(car.AdType)
      );
    }
    // Filter by selected cities
    if (pictureAvailability?.length > 0) {
      filtered = filtered.filter((car) =>
        pictureAvailability.includes(car.PictureAvailability)
      );
    }
    if (selectedCheckboxSellerType?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCheckboxSellerType.includes(car.SellerType)
      );
    }
    if (selectedClassesModelCategory?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedClassesModelCategory.includes(car.ModalCategory)
      );
    }
    if (selectedValuesSeatCapacity?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedValuesSeatCapacity.includes(car.SeatingCapacity)
      );
    }
    // Filter by selected cities
    if (cities?.length > 0) {
      filtered = filtered.filter((car) => cities.includes(car.City));
    }
    if (selectedCarsBodyType?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCarsBodyType.includes(car.BodyType)
      );
    }
    if (selectedEngines?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedEngines.includes(car.EngineType)
      );
    }
    if (selectedAssembly?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedAssembly.includes(car.Assembly)
      );
    }
    // Filter by selected cities
    if (logSelectedColor?.length > 0) {
      filtered = filtered.filter((car) => logSelectedColor.includes(car.Color));
    }
    if (selectedOptionTransmission?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedOptionTransmission.includes(car.Transmission)
      );
    }
    // Filter by selected cities
    if (selectedCars1?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedCars1.includes(car.TrustedCars)
      );
    }
    if (selectedMercedesBenzLocations?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedMercedesBenzLocations.includes(car.Registeredin)
      );
    }
    // Filter by selected Emirates
    if (emirates?.length > 0) {
      filtered = filtered.filter((car) => emirates.includes(car.Emirates));
    }

    // Filter by selected car makes
    if (selectedCarsMake?.length > 0) {
      filtered = filtered.filter((car) => selectedCarsMake.includes(car.Make));
    }

    // Filter by price range
    if (fromValue || toValue) {
      filtered = filtered.filter((car) => {
        const carPrice = parseFloat(car.price); // Assuming price is a number or string
        const minPrice = fromValue ? parseFloat(fromValue) : 0; // Default to 0 if no fromValue
        const maxPrice = toValue ? parseFloat(toValue) : Infinity; // Default to Infinity if no toValue

        // Ensure that car's price is between minPrice and maxPrice
        return carPrice >= minPrice && carPrice <= maxPrice;
      });
    }
    if (fromCC || toCC) {
      filtered = filtered.filter((car) => {
        const EngineCapacity = parseFloat(car.EngineCapacity); // Assuming price is a number or string
        const minPrice = fromCC ? parseFloat(fromCC) : 0; // Default to 0 if no fromValue
        const maxPrice = toCC ? parseFloat(toCC) : Infinity; // Default to Infinity if no toValue

        // Ensure that car's price is between minPrice and maxPrice
        return EngineCapacity >= minPrice && EngineCapacity <= maxPrice;
      });
    }
    if (fromValue || toValue) {
      filtered = filtered.filter((car) => {
        const carPrice = parseFloat(car.price); // Assuming price is a number or string
        const minPrice = fromValue ? parseFloat(fromValue) : 0; // Default to 0 if no fromValue
        const maxPrice = toValue ? parseFloat(toValue) : Infinity; // Default to Infinity if no toValue

        // Ensure that car's price is between minPrice and maxPrice
        return carPrice >= minPrice && carPrice <= maxPrice;
      });
    }

    // Filter by ManufactureYear range (fromDate to toDate)
    if (fromDate || toDate) {
      filtered = filtered.filter((car) => {
        const manufactureYear = new Date(car.ManufactureYear); // Assuming ManufactureYear is in a valid date format (yyyy-mm-dd)
        const minDate = fromDate ? new Date(fromDate) : new Date("1900-01-01"); // Default to a very old date if no fromDate
        const maxDate = toDate ? new Date(toDate) : new Date(); // Default to today's date if no toDate

        // Ensure that car's manufacture year is between minDate and maxDate
        return manufactureYear >= minDate && manufactureYear <= maxDate;
      });
    }

    setFilteredCars(filtered);
  };

  const carListings = [
    {
      id: 1,
      title: "Mercedes Benz",
      location: "Dubai",
      year: "2022",
      mileage: "6,000km",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$350",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-18%20at%2012.17.13%20AM-9swmdy24UAjXDGPDqNLHRFu1i77caw.jpeg",
      featured: true,
    },
    // More listings can be added here
  ];

  const [selectedCars, setSelectedCars] = useState(["Mercedes-Benz"]);

  const handleCarSelection = (brand) => {
    setSelectedCars((prev) =>
      prev.includes(brand)
        ? prev.filter((car) => car !== brand)
        : [...prev, brand]
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleDropdownClick = () => {
    setShowSuggestions(!showSuggestions);
  };
  const headingStyle = {
    backgroundColor: "#2D4495",
    color: "white",
    fontSize: "30px",
    padding: "2px",
    borderRadius: "1%",
  };

  return (
    <>
      <div className="main-wrapper">
        <Header parms={parms} />
        <div className="main-wrapper">
          <Header />
          {/* Banner Section */}
          <section className="banner-section">
            <div className="container">
              <div className="home-banner">
                <div className="home-banner-about">
                  <div
                    className="section-search aos r homebannerwrapper_2"
                    data-aos="fade-up"
                  >
                    <p className="explore-text banner-text">
                      <span>Explore top-rated attractions</span>
                    </p>
                    <h1>
                      Let us help you
                      <span>Find, Buy</span>
                      <span>Find, Buy</span> & Own Dreams
                    </h1>
                    <p className="banner-para">
                      Countrys most loved and trusted classified ad listing
                      website. Randomised words which don't look even slightly
                      Browse thousands of items near you.
                    </p>
                  </div>
                  <div className="bannerimages_wrapper">
                    <div className="wrapper_container">
                      <img src={image1} className="banner_img" alt="" />
                      <img src={image2} className="banner_img" />
                    </div>
                    <div className="wrapper_container">
                      <img src={image3} className="banner_img" alt="" />
                      <img src={image4} className="banner_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Section */}

          {/* Trending Products */}
          <div className="trendingprodct_wrapper container">
            <h3 className="trendingproduct_heading"> Our Trending Product</h3>
            <div className="trendingproducts_container">
              <button className="trendingProductsallname">Iphone 16</button>
              <button
                className="trendingProductsallname"
                onClick={() => {
                  navigate("/Bikes");
                }}
              >
                Bikes
              </button>

              <button className="trendingProductsallname">Cricket Kit</button>
              <button className="trendingProductsallname">Bags</button>
              <button className="trendingProductsallname">Apparel</button>
              <button className="trendingProductsallname">Mens Hoodies</button>
              <button className="trendingProductsallname">Apparel</button>
              <button className="trendingProductsallname">Magazines</button>
              <button className="trendingProductsallname">Mens Hoodies</button>
            </div>
          </div>
          {/* Trending Products */}

          {/* Category Section */}
          <section className="category-section">
            <div className="container">
              <div className="allMedia_Icons">
                <div>
                  <img src={xIcon} alt="Xicon" />
                </div>
                <div>
                  <img src={insta} alt="instagram" />
                </div>
                <div>
                  <img src={fb} alt="facebook" />
                </div>
                <div>
                  <img src={tiktok} alt="tiktok" />
                </div>
                <div>
                  <img src={whatapp} alt="whatsapp" />
                </div>
              </div>
            </div>
          </section>
          {/* Category Section */}

          {/* Featured Ads Section */}
          {/* Featured Ads Section */}

          {/* All carousel */}

          {/* All carousel */}

          {/* Blog Section */}

          {/* Footer */}
          {/* Footer */}
        </div>

        <Container fluid>
          <Row>
            {/* Sidebar */}
            <Col md={3} className="bg-light p-3">
              <h5 style={headingStyle}>Show Results by:</h5>

              <Form>
                <Row className="my-3">
                  <Col>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Search by Keywords
                    </Form.Label>
                    <div className="position-relative">
                      <input
                        type="search"
                        placeholder="E.g. Mercedez in Dubai"
                        className="form-control rounded-pill pe-5"
                        id="example-search-input"
                        value={searchQuery} // Bind value to searchQuery state
                        onChange={handleSearchChange} // Call the handler on input change
                      />
                      <FaSearch
                        className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                        style={{ pointerEvents: "none" }}
                      />
                    </div>
                  </Col>
                </Row>
                {/*  -------------                          */}
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Select City</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {[
                            "New York",
                            "Bogotá",
                            "Dubai",
                            "Tokyo",
                            "Paris",
                          ].map((city) => (
                            <div
                              key={city}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label={city}
                                checked={selectedCities.includes(city)}
                                onChange={(e) => handleCityChange(e, city)}
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                          ))}
                        </div>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />
                {/*      ----------               */}
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Select </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {[
                            { label: "Downtown Dubai", city: "Downtown Dubai" },
                            { label: "Dubai Marina", city: "Dubai Marina" },
                            { label: "Jumeirah", city: "Jumeirah" },
                            { label: "Deira", city: "Deira" },
                            { label: "Business Bay", city: "Business Bay" },
                          ].map(({ label, city }, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label={label}
                                checked={selectedEmirates.includes(city)}
                                onChange={(e) => handleEmiratesChange(e, city)}
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                          ))}
                        </div>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />
                {/*--------------------------------------*/}

                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Select Car Make</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        {/* Checkbox Selection */}
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {[
                            "Toyota",
                            "Mercedes-Benz",
                            "Nissan",
                            "BMW",
                            "Lamborghini",
                          ].map((car, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label={car}
                                name={car} // Use the name attribute for identification
                                onChange={handleCheckboxChange}
                                // defaultChecked={car === "Nissan"} // Pre-check Nissan
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                          ))}
                        </div>
                      </Form.Group>

                      {/* Display Selected Cars */}
                      {/* <div style={{ marginTop: "20px" }}>
                        <h5>Selected Cars:</h5>
                        <ul>
                          {selectedCars.map((car, index) => (
                            <li key={index}>{car}</li>
                          ))}
                        </ul>
                      </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />

                {/*                  */}

                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Price Range</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col>
                            <Form.Control
                              type="number"
                              placeholder="From"
                              value={fromValue}
                              onChange={handleFromChange}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              type="number"
                              placeholder="To"
                              value={toValue}
                              onChange={handleToChange}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div>
                  {/* Accordion for Year Range */}
                  <Accordion className="mt-3">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Year</Accordion.Header>
                      <Accordion.Body>
                        <Form.Group className="mb-3">
                          <Row>
                            <Col>
                              <Form.Control
                                type="date"
                                placeholder="From"
                                value={fromDate}
                                onChange={handleFromDateChange}
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                type="date"
                                placeholder="To"
                                value={toDate}
                                onChange={handleToDateChange}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />
                {/*   ------------------------------------------                            */}
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Registered in</Accordion.Header>
                    <Accordion.Body>
                      {/* Show all locations for now */}
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          {/* Toyota Locations */}
                          <div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label="Downtown Dubai"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Downtown Dubai")
                                }
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label="Dubai Marina"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Dubai Marina")
                                }
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label="Jumeirah"
                                defaultChecked
                                onChange={(e) =>
                                  handleToyotaChange(e, "Jumeirah")
                                }
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label="Deira"
                                onChange={(e) => handleToyotaChange(e, "Deira")}
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label="Business Bay"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Business Bay")
                                }
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                          </div>
                        </Form.Group>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />
                {/*-------------------------------------*/}
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Trusted Car</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          {/* Hardcoded Car Data */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Toyota"
                              onChange={(e) => handleCarChange(e, "Toyota")}
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Mercedes-Benz"
                              onChange={(e) =>
                                handleCarChange(e, "Mercedes-Benz")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Nissan"
                              // defaultChecked
                              onChange={(e) => handleCarChange(e, "Nissan")}
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="BMW"
                              onChange={(e) => handleCarChange(e, "BMW")}
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Lamborghini"
                              onChange={(e) =>
                                handleCarChange(e, "Lamborghini")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                        </Form.Group>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />

                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Transmission</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Manual"
                              checked={selectedOptionTransmission === "Manual"}
                              onChange={() =>
                                handleCheckboxChangeTransmission("Manual")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Automatic"
                              checked={
                                selectedOptionTransmission === "Automatic"
                              }
                              onChange={() =>
                                handleCheckboxChangeTransmission("Automatic")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                        </Form.Group>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />

                <div>
                  {/* Accordion with Checkbox Selection for Color */}
                  <Accordion className="mt-3">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Color</Accordion.Header>
                      <Accordion.Body>
                        <div style={{ maxWidth: "300px", margin: "20px" }}>
                          <Form.Group>
                            {["White", "Black", "Grey", "Red", "Yellow"].map(
                              (color) => (
                                <div
                                  key={color}
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "8px 0",
                                  }}
                                >
                                  <Form.Check
                                    type="checkbox"
                                    label={color}
                                    // defaultChecked={color === "Grey"}
                                    onChange={() =>
                                      handleCheckboxChangeColor(color)
                                    }
                                  />
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      color: "#333",
                                    }}
                                  >
                                    12345
                                  </span>
                                </div>
                              )
                            )}
                            <button
                              type="button"
                              onClick={logSelectedColor}
                              style={{
                                marginTop: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                              }}
                            >
                              Log Selected
                            </button>
                          </Form.Group>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <p style={{ color: "#2D4495" }}>More choices</p>
                </div>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />

                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Engine Type</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          {[
                            "Inline-4 (I4) Engine",
                            "V6 Engine",
                            "V8 Engine",
                            "Inline-6 (I6) Engine",
                            "V12 Engine",
                          ].map((engine, index) => (
                            <div
                              key={engine}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label={engine}
                                defaultChecked={engine === "V8 Engine"}
                                onChange={() =>
                                  handleCheckboxChangeEngineType(engine)
                                }
                              />
                              <span
                                style={{ fontWeight: "bold", color: "#333" }}
                              >
                                12345
                              </span>
                            </div>
                          ))}
                        </Form.Group>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <p style={{ color: "#2D4495" }}>More choices</p>

                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />
                <div>
                  {/* Accordion for Year Range */}
                  <Accordion className="mt-3">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Engine Capacity</Accordion.Header>
                      <Accordion.Body>
                        <Form.Group className="mb-3">
                          <Row>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="From"
                                value={fromCC}
                                onChange={handleFromChangeCC}
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="To"
                                value={toCC}
                                onChange={handleToChangeCC}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <hr
                  style={{
                    width: "100%",
                    height: "0px",
                    top: "1310.01px",
                    left: "239.88px",
                    gap: "0px",
                    borderTop: "1px solid #000000",
                    opacity: "0.5", // Adjust opacity for visibility
                    transform: "rotate(0deg)",
                    margin: "20px 0",
                    borderColor: "#000000", // Set border color to black
                  }}
                />

                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Assembly</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          {/* Local Checkbox */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Local"
                              onChange={() =>
                                handleCheckboxChangeAssembly("Local")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>

                          {/* Imported Checkbox */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 0",
                            }}
                          >
                            <Form.Check
                              type="checkbox"
                              label="Imported"
                              onChange={() =>
                                handleCheckboxChangeAssembly("Imported")
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                        </Form.Group>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Form>
              <hr
                style={{
                  width: "100%",
                  height: "0px",
                  top: "1310.01px",
                  left: "239.88px",
                  gap: "0px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  transform: "rotate(0deg)",
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              {/*                    */}
              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Body Type</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Coupe */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Coupe"
                            onChange={() =>
                              handleCheckboxChangeBodyType("Coupe")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Sedan (Saloon) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Sedan (Saloon)"
                            onChange={() =>
                              handleCheckboxChangeBodyType("Sedan (Saloon)")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* SUV */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="SUV"
                            onChange={() => handleCheckboxChangeBodyType("SUV")}
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Hatchback */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Hatchback"
                            onChange={() =>
                              handleCheckboxChangeBodyType("Hatchback")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Convertible */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Convertible"
                            onChange={() =>
                              handleCheckboxChangeBodyType("Convertible")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <p style={{ color: "#2D4495" }}>More choices</p>
              <hr
                style={{
                  width: "100%",
                  height: "0px",
                  top: "1310.01px",
                  left: "239.88px",
                  gap: "0px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  transform: "rotate(0deg)",
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Number of Doors</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Checkbox for 4 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="4"
                            onChange={() =>
                              handleCheckboxChangeNumberofDoors("4")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 5 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="5"
                            onChange={() =>
                              handleCheckboxChangeNumberofDoors("5")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 2 (defaultChecked) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="2"
                            onChange={() =>
                              handleCheckboxChangeNumberofDoors("2")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 3 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="3"
                            onChange={() =>
                              handleCheckboxChangeNumberofDoors("3")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 0 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="0"
                            onChange={() =>
                              handleCheckboxChangeNumberofDoors("0")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr
                style={{
                  width: "100%",
                  height: "0px",
                  top: "1310.01px",
                  left: "239.88px",
                  gap: "0px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  transform: "rotate(0deg)",
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Seat Capacity</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Checkbox for 4 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="4"
                            onChange={() =>
                              handleCheckboxChangeSeatCapacity("4")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 5 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="5"
                            onChange={() =>
                              handleCheckboxChangeSeatCapacity("5")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 2 (defaultChecked) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="2"
                            onChange={() =>
                              handleCheckboxChangeSeatCapacity("2")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 3 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="3"
                            onChange={() =>
                              handleCheckboxChangeSeatCapacity("3")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Checkbox for 0 */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="0"
                            onChange={() =>
                              handleCheckboxChangeSeatCapacity("0")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr
                style={{
                  width: "100%",
                  height: "0px",
                  top: "1310.01px",
                  left: "239.88px",
                  gap: "0px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  transform: "rotate(0deg)",
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Model Category</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* A-Class (Compact) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="A-Class (Compact)"
                            onChange={() =>
                              handleCheckboxChangeModelCategory(
                                "A-Class (Compact)"
                              )
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* C-Class (Compact Exe) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="C-Class (Compact Exe)"
                            onChange={() =>
                              handleCheckboxChangeModelCategory(
                                "C-Class (Compact Exe)"
                              )
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* E-Class (Executive) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="E-Class (Executive)"
                            defaultChecked
                            onChange={() =>
                              handleCheckboxChangeModelCategory(
                                "E-Class (Executive)"
                              )
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* S-Class */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="S-Class"
                            onChange={() =>
                              handleCheckboxChangeModelCategory("S-Class")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* CLA (Compact Coupe) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="CLA (Compact Coupe)"
                            onChange={() =>
                              handleCheckboxChangeModelCategory(
                                "CLA (Compact Coupe)"
                              )
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                        {/* CLA (Compact Coupe) */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="B-Class"
                            onChange={() =>
                              handleCheckboxChangeModelCategory("B-Class")
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <p style={{ color: "#2D4495" }}>More choices</p>
              <hr
                style={{
                  width: "100%",
                  height: "0px",
                  top: "1310.01px",
                  left: "239.88px",
                  gap: "0px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  transform: "rotate(0deg)",
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Seller Type</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Local Checkbox */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Dealers"
                            onChange={(e) =>
                              handleCheckboxChangeSellerType(e, "Dealers")
                            }
                            checked={selectedCheckboxSellerType === "Dealers"}
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>

                        {/* Imported Checkbox */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Individuals"
                            onChange={(e) =>
                              handleCheckboxChangeSellerType(e, "Individuals")
                            }
                            checked={
                              selectedCheckboxSellerType === "Individuals"
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Picture Availability</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Local Checkbox */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="With Pictures"
                            onChange={handleCheckboxChangePictureAvailability}
                            checked={pictureAvailability === "With Pictures"}
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Video Availability</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Local Checkbox */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="With Video"
                            onChange={handleCheckboxChangeVideoAvailability}
                            checked={
                              selectedOptionVideoAvailability === "With Video"
                            }
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />

              <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ad Type</Accordion.Header>
                  <Accordion.Body>
                    <div style={{ maxWidth: "300px", margin: "20px" }}>
                      <Form.Group>
                        {/* Local Checkbox */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 0",
                          }}
                        >
                          <Form.Check
                            type="checkbox"
                            label="Featured Ad"
                            onChange={handleCheckboxChangeisFeatured}
                            checked={selectedOptionisFeatured === "Featured Ad"}
                          />
                          <span style={{ fontWeight: "bold", color: "#333" }}>
                            12345
                          </span>
                        </div>
                      </Form.Group>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <hr
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #000000",
                  opacity: "0.5", // Adjust opacity for visibility
                  margin: "20px 0",
                  borderColor: "#000000", // Set border color to black
                }}
              />
            </Col>

            <Col md={9} className="p-3">
              <Row className="mb-3">
                <Col>
                  <Form.Check type="checkbox" label="With Photos" />
                </Col>
                <Col>
                  <Form.Check type="checkbox" label="With Price" />
                </Col>
                <Col className="text-end">
                  <Form.Select>
                    <option>Sort by: Most Relevant</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </Form.Select>
                </Col>
              </Row>
              <div>
                {loading ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                  >
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : filteredCars.length > 0 ? (
                  filteredCars.map((car, index) => (
                    <Card key={index} className="mt-3">
                      <Row className="g-0">
                        <Col md={4}>
                          <Card.Img
                            src={car.img || "https://via.placeholder.com/150"}
                            alt={car.title || "Car"}
                            style={{
                              width: "284.3px",
                              height: "250px",
                            }}
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title>{car.title || "Car"}</Card.Title>
                            <Card.Text>
                              <small className="text-muted">
                                {car.City || "Location"}
                              </small>
                              <br />
                              <small className="text-muted">
                                {car.ManufactureYear || "Year"} |{" "}
                                {car.DrivenKm || "0"} Km |{" "}
                                {car.EngineType || "Engine Type"} |{" "}
                                {car.Transmission || "Transmission"}
                              </small>
                              <br />
                              {car.description || "Description not available."}
                            </Card.Text>
                            <Row>
                              <Col>
                                <Button variant="primary" className="w-100">
                                  Call
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  variant="outline-primary"
                                  className="w-100"
                                >
                                  Message
                                </Button>
                              </Col>
                              <Col>
                                <Button variant="success" className="w-100">
                                  WhatsApp
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))
                ) : (
                  <p>No cars found for the selected criteria.</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AutomotiveComp;
