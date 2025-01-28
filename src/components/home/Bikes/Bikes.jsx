import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../../home/header"; // Ensure Header is correctly implemented and imported
import Footer from "../../home/footer/Footer";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
// import LatestBlog from "../../blog/BlogList/LatestBlog/LatestBlog.jsx";
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
import LatestBlog from "../../blog/BlogList/LatestBlog/LatestBlog.jsx";
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
  ButtonGroup,
  Badge,
} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Bikes = () => {
  const parms = useLocation().pathname;
  const [isVisible, setIsVisible] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Handle city selection
  const [carsData, setCars] = useState([]); // All cars data
  const [filteredCars, setFilteredCars] = useState([]); // Filtered cars based on search & city
  const [searchQuery, setSearchQuery] = useState(""); // Search query for title and city
  const [currentPageCars, setCurrentPageCars] = useState([]); // Cars to display on the current page
  console.log(filteredCars, "filteredCars_________");
  const itemsPerPage = 3; // Number of items per page

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

  const [selectedStates1, setSelectedStates1] = useState([]); // Selected states for filtering
  const [fromValueMileage, setFromCCMileage] = useState("");
  const [toValueMileage, setToCCMileage] = useState("");
  const [SortBy, setSortBy] = useState(""); // Search query for title and city
  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const difference = Math.abs(now - date); // Difference in milliseconds
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  }
  const handleFromChangeMileage = (e) => {
    setFromCCMileage(e.target.value);
    console.log("From Date:__", e.target.value);
  };

  // Handle changes for "To" input
  const handleToChangMileagee = (e) => {
    setToCCMileage(e.target.value);
    console.log("From Date:___To Date:", e.target.value);
  };

  const handleStateChange1 = (e, state) => {
    if (e.target.checked) {
      setSelectedStates1((prevStates) => {
        const updatedStates = [...prevStates, state];
        filterCars(searchQuery, updatedStates); // Apply the filter
        return updatedStates;
      });
    } else {
      setSelectedStates1((prevStates) => {
        const updatedStates = prevStates.filter((item) => item !== state);
        filterCars(searchQuery, updatedStates); // Apply the filter
        return updatedStates;
      });
    }
  };
  const [activePage, setActivePage] = useState(1);
  console.log(activePage, "activePage_________");
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const carsPerPage = 3;

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= activePage - 1 && i <= activePage + 1)
      ) {
        pages.push(
          <Button
            key={i}
            variant={i === activePage ? "primary" : "outline-primary"}
            className="mx-1"
            onClick={() => handlePageClick(i)}
          >
            {i}
          </Button>
        );
      } else if (i === activePage - 2 || i === activePage + 2) {
        pages.push(
          <span key={`ellipsis-${i}`} className="mx-1">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  const getPaginatedCars = () => {
    const startIndex = (activePage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return filteredCars.slice(startIndex, endIndex);
  };

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
        const carsCollectionRef = collection(db, "Bikes");
        const querySnapshot = await getDocs(carsCollectionRef);
        const carsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(carsData);
        setFilteredCars(carsData); // Initially, show all cars
      } catch (error) {
        console.error("Error getting cars:", error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    // Filter cars for the current page
    const startIndex = (activePage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    setCurrentPageCars(filteredCars.slice(startIndex, endIndex));
  }, [activePage, filteredCars]);

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
      selectedOptionisFeatured,
      selectedStates1,
      fromValueMileage,
      toValueMileage,
      SortBy
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
    selectedStates1,
    fromValueMileage,
    toValueMileage,
    SortBy,
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
      selectedOptionisFeatured,
      selectedStates1,
      fromValueMileage,
      toValueMileage,
      SortBy
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
    selectedOptionisFeatured,
    selectedStates1,
    fromValueMileage,
    toValueMileage,
    SortBy
  ) => {
    let filtered = carsData;

    // Filter by search query
    if (query.trim() !== "") {
      const lowercasedQuery = query?.toLowerCase();
      filtered = filtered.filter(
        (car) =>
          car.title?.toLowerCase().includes(lowercasedQuery) ||
          car.City?.toLowerCase().includes(lowercasedQuery) ||
          car.Emirates?.toLowerCase().includes(lowercasedQuery) ||
          car.make?.toLowerCase().includes(lowercasedQuery) ||
          car.Registeredin?.toLowerCase().includes(lowercasedQuery) ||
          car.Color?.toLowerCase().includes(lowercasedQuery) ||
          car.Transmission?.toLowerCase().includes(lowercasedQuery) ||
          car.EngineType?.toLowerCase().includes(lowercasedQuery) ||
          car.Assembly?.toLowerCase().includes(lowercasedQuery) ||
          car.BodyType?.toLowerCase().includes(lowercasedQuery) ||
          car.NumberOfDoors?.toLowerCase().includes(lowercasedQuery) ||
          car.SeatingCapacity?.toLowerCase().includes(lowercasedQuery) ||
          car.ModalCategory?.toLowerCase().includes(lowercasedQuery) ||
          car.SellerType?.toLowerCase().includes(lowercasedQuery) ||
          car.PictureAvailability?.toLowerCase().includes(lowercasedQuery) ||
          car.VideoAvailability?.toLowerCase().includes(lowercasedQuery) ||
          car.AdType?.toLowerCase().includes(lowercasedQuery) ||
          car.States?.toLowerCase().includes(lowercasedQuery) ||
          car.TrustedCars?.toLowerCase().includes(lowercasedQuery)
      );
    }
    setLoading(false);

    // Filter by selected cities
    if (selectedOptionVideoAvailability?.length > 0) {
      filtered = filtered.filter((car) =>
        selectedOptionVideoAvailability.includes(car.VideoAvailability)
      );
    }
    if (selectedStates1?.length > 0) {
      filtered = filtered.filter((car) => selectedStates1.includes(car.States));
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
      filtered = filtered.filter((car) => selectedCarsMake.includes(car.make));
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
    if (SortBy === "Price: Low to High") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceB - priceA; // Ascending order (low to high)
      });
    }
    if (SortBy === "Price: High to Low") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceA - priceB; // Ascending order (low to high)
      });
    }
    if (SortBy === "Sort by: Most Relevant") {
      filtered.sort((a, b) => {
        const dateA = new Date(a.timeAgo);
        const dateB = new Date(b.timeAgo);
        return dateB.getTime() - dateA.getTime(); // Descending order (latest first)
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
    if (fromValueMileage || toValueMileage) {
      filtered = filtered.filter((car) => {
        const EngineCapacity = parseFloat(car.mileage); // Assuming price is a number or string
        const minPrice = fromValueMileage ? parseFloat(fromValueMileage) : 0; // Default to 0 if no fromValue
        const maxPrice = toValueMileage ? parseFloat(toValueMileage) : Infinity; // Default to Infinity if no toValue

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
    console.log(filtered, "filtered________");
    setFilteredCars(filtered);
    setActivePage(1);
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
          {/* <div className="trendingprodct_wrapper container">
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
          </div> */}
          {/* Trending Products */}

          {/* Category Section */}
          <section className="category-section" style={{ padding: "0px" }}>
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
<Container className="parent-main" 
 style={{
  paddingLeft: "2px", // Padding on the left side
  paddingRight: "2px", // Padding on the right side
  color: 'black', // Text color
  maxWidth: '1530px', // Optional: Add max-width to ensure padding is visible
  margin: '0 auto', // Optional: Center the container if desired
 
 
}}>
        <div
          className="adsCategory_head"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginLeft: "4%",
            marginTop: "40px",
            alignItems: "center",
          }}
        >
          <button
            className="btn"
            style={{
              background: "#E9EEFF",
              fontWeight: "500",
             pointerEvents: "none",
              padding: "10px 15px",
            }}
          >
            Home
          </button>
          <span>
          <MdKeyboardArrowRight />
          </span>

          <button
            className="btn"
            style={{
              background: "#E9EEFF",
              fontWeight: "500",
             pointerEvents: "none",
              padding: "10px 15px",
            }}
          >
            Automotive
          </button>
          <span>
          <MdKeyboardArrowRight />
          </span>

          <button
            className="btn"
            style={{
              background: "#E9EEFF",
              fontWeight: "500",
            pointerEvents: "none",
              padding: "10px 15px",
            }}
          >
            All Cities
          </button>
          <span>
          <MdKeyboardArrowRight />
          </span>

          <button
            className="btn"
            style={{
              background: "#E9EEFF",
              fontWeight: "500",
            pointerEvents: "none",
              padding: "10px 15px",
            }}
          >
            Used Bike for Sale
          </button>
          <span>
          <MdKeyboardArrowRight />
          </span>

          <button
            className="btn"
            style={{
              background: "#E9EEFF",
              fontWeight: "500",
             pointerEvents: "none",
              padding: "10px 15px",
            }}
          >
            HarleyDavidson
          </button>
        
          
        </div>

        <div>
          <h1 style={{ marginLeft: "4%", marginTop: "20px", fontSize: "24px" }}>
            Used Bikes for Sale
          </h1>
        </div>

        <div
          className="CategoryInfodiv_btn2container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginLeft: "4%",
            marginBottom: "40px",
            marginTop: "20px",
          }}
        >
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Cars
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Jobs
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Real Estate for Rent
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Home & Garden
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Electronics
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Electronics
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Electronics
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Electronics
          </button>
          <button
            className="head2btn"
            style={{
              backgroundColor: "white",
              border: "1px solid #2D4495",
              padding: "10px 15px",
              textAlign: "center",
            }}
          >
            Electronics
          </button>
        </div>
       
        </Container>
        <Container fluid style={{
    paddingLeft: "1px", // Padding on the left side
    paddingRight: "1px", // Padding on the right side
    color: 'black', // Text color
    maxWidth: '1420px', // Optional: Add max-width to ensure padding is visible
    margin: '0 auto', // Optional: Center the container if desired
  }}>
          <Row>
            {/* Sidebar */}
            <Col md={3} className="bg-light p-3 style={{ height: '200px' }}">
              <h5 style={{
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  backgroundColor: "#2D4495",
                  color: "white",
                  width: "auto",
                  height: "49.66px",
                  paddingLeft: "6px",
                  paddingTop: "6px",
                }}>Show Results by:</h5>

              <Form>
                <Row className="my-3">
                  <Col>
                    <Form.Label style={{ fontWeight: "bold",color:'black',paddingLeft:"8px"}}>
                      Search by Keywords
                    </Form.Label>
                    <div className="position-relative">
                      <input
                        type="search"
                        placeholder="E.g. Citi Bike in America"
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
                <style>{`
    .form-check-input:checked {
      background-color: #2D4495 !important; 
      border-color: black !important; 
    }
  `}</style>   
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Select City</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {["America", "Bogotá", "Dubai", "Tokyo", "Paris"].map(
                            (city) => (
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
                            )
                          )}
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
                    <Accordion.Header>States </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {[
                            "California",
                            "Texas",
                            "Florida",
                            "New York",
                            "Illinois",
                          ].map((state) => (
                            <div
                              key={state}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "8px 0",
                              }}
                            >
                              <Form.Check
                                type="checkbox"
                                label={state}
                                checked={selectedStates1.includes(state)}
                                onChange={(e) => handleStateChange1(e, state)}
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
                    <Accordion.Header>Make</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        {/* Checkbox Selection */}
                        <div style={{ maxWidth: "300px", marginTop: "20px" }}>
                          {[
                            "Trek Bicycle Corporation",
                            "Specialized Bicycle",
                            "Cannondale",
                            "Santa Cruz",
                            "Huffy Corporation",
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
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Mileage</Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3">
                        <Row>
                          <Col>
                            <Form.Control
                              type="number"
                              placeholder="From"
                              value={fromValueMileage}
                              onChange={handleFromChangeMileage}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              type="number"
                              placeholder="To"
                              value={toValueMileage}
                              onChange={handleToChangMileagee}
                            />
                          </Col>
                        </Row>
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
                                label="California"
                                onChange={(e) =>
                                  handleToyotaChange(e, "California")
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
                                label="Texas"
                                onChange={(e) => handleToyotaChange(e, "Texas")}
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
                                label="Newyork"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Newyork")
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
                                label="Florida"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Florida")
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
                                label="Illinios"
                                onChange={(e) =>
                                  handleToyotaChange(e, "Illinios")
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

                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Engine Type</Accordion.Header>
                    <Accordion.Body>
                      <div style={{ maxWidth: "300px", margin: "20px" }}>
                        <Form.Group>
                          {[
                            "Single-Cylinder Engine",
                            "Parallel-Twin Engine",
                            "V-Twin Engine",
                            "Inline-Four Engine",
                            "Boxer Engine",
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
                        <p style={{ color: "#2D4495" }}>More choices</p>
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
                {/*                    */}

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
                              label="Cruiser"
                              onChange={() =>
                                handleCheckboxChangeBodyType("Cruiser")
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
                              label="Sport Bike"
                              onChange={() =>
                                handleCheckboxChangeBodyType("Sport Bike")
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
                              label="Touring Bike"
                              onChange={() =>
                                handleCheckboxChangeBodyType("Touring Bike")
                              }
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
                              label="Dirt Bike"
                              onChange={() =>
                                handleCheckboxChangeBodyType("Dirt Bike")
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
                              label="Standard (Naked Bike)"
                              onChange={() =>
                                handleCheckboxChangeBodyType(
                                  "Standard (Naked Bike)"
                                )
                              }
                            />
                            <span style={{ fontWeight: "bold", color: "#333" }}>
                              12345
                            </span>
                          </div>
                        </Form.Group>
                        <p style={{ color: "#2D4495" }}>More choices</p>
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
              </Form>

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
                <Col xs={12} sm={6} md={4} className="text-end">
                  <Form.Select
                    aria-label="Sort options"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSortBy(e.target.value);
                    }}
                  >
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
                  getPaginatedCars().map((car, index) => (
                    <Card key={index} className="mt-3">
                      <Row className="g-0">
                        <Col md={4} style={{ position: "relative" }}>
                          {/* Featured Label */}
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              left: "10px",
                              backgroundColor: "#36A680",
                              color: "white",
                              padding: "5px 10px",
                              fontWeight: "bold",
                              borderRadius: "5px",
                              zIndex: 2, // Ensure it's above the image
                            }}
                          >
                            Featured
                          </div>

                          {/* Heart Icon */}
                          <div
                            style={{
                              position: "absolute",
                              top: "11%",
                              left: "90%", // Centering horizontally
                              transform: "translate(-50%, -50%)", // Adjust to keep it centered
                              borderRadius: "50%",
                              padding: "10px",
                              zIndex: 3, // Higher z-index to stay above everything
                            }}
                          >
                            <i
                              className="fas fa-heart"
                              style={{ color: "white", fontSize: "30px" }}
                            ></i>
                          </div>

                          {/* Image */}
                          <Card.Img
                            src={car.img || "https://via.placeholder.com/150"}
                            alt={car.title || "Car"}
                            style={{
                              width: "100%", // Make the image responsive
                              height: "250px",
                              borderTopLeftRadius: "20px",
                              borderBottomLeftRadius: "20px",
                            }}
                          />
                        </Col>

                        <Col md={8}>
                          <Card.Body>
                            <Card.Title style={{ color: "#2D4495" }}>
                              {car.title || "Car"}
                            </Card.Title>
                            <Card.Text>
                            <small
                                className="text-muted"
                                style={{ color: "black" }}
                              >
                                <i
                                  className="fas fa-map-marker-alt"
                                  style={{
                                    marginRight: "5px",
                                    color: "#6c757d",
                                  }}
                                ></i>
                               <span style={{ color: "black" }}>{car.City || "Location"}</span>
                              </small>
                              <br />
                              <small style={{ color: "black" }}>
                                {car.ManufactureYear || "Year"} |{" "}
                                {car.DrivenKm || "0"} Km|{" "}
                                {car.FuelType || "FuelType"} {" "}
                               </small>
                              <br />
                              {car.description || "Description not available."}
                            </Card.Text>

                            <Col
                              className="align-items-center"
                              style={{ position: "relative" }}
                            >
                              {/* Price displayed above the image */}
                              <p
                                style={{
                                  position: "absolute",
                                  top: "-140px", // Adjust the top margin to place the price higher
                                  left: "550px",
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                  zIndex: 2, // Ensure the price text stays above the image
                                  color: "#2D4495",
                                }}
                              >
                                {car.price
                                  ? `$${car.price}`
                                  : "Price not available"}
                              </p>

                              {/* Small Image on the Right with Top Margin */}
                              <Card.Img
                                src={
                                  car.img || "https://via.placeholder.com/150"
                                }
                                alt={car.title || "Car"}
                                className="d-none d-sm-block" // Hide on small screens and show on sm and above
                                style={{
                                  position: "absolute", // Position image absolutely within the container
                                  top: "-84px", // Adjust to ensure the image is placed after the price
                                  right: "10px", // Adjust right margin
                                  width: "160px", // Adjust size as needed
                                  height: "80px",
                                  objectFit: "cover",
                                  borderRadius: "6px",
                                }}
                              />

                              {/* Updated text at the bottom-right corner */}
                              <p
                                style={{
                                  position: "absolute",
                                  right: "5px",
                                  // fontSize: '12px',
                                  color: "black",
                                  marginTop: "54px",
                                }}
                              >
Updated about {timeAgo(car.timeAgo)}

</p>

                              {/* Responsive layout for small screens */}
                              <div
                                className="d-block d-sm-none"
                                style={{
                                  position: "relative",
                                  marginTop: "10px",
                                }}
                              >
                                {/* Price for small screens */}
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  {car.price
                                    ? `$${car.price}`
                                    : "Price not available"}
                                </p>

                                {/* Small Image for small screens */}
                                <Card.Img
                                  src={
                                    car.img || "https://via.placeholder.com/150"
                                  }
                                  alt={car.title || "Car"}
                                  style={{
                                    width: "120px", // Adjust size for small screens
                                    height: "60px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                  }}
                                />
                              </div>
                            </Col>

                            {/* Responsive Grid for Small Screens */}
                            <div>
  <Row className="gx-2 gy-2 mt-4 mt-sm-5 text-center" style={{ margin: 0 }}>
    {/* Call Button */}
    <Col
      xs={6}
      sm={3}
      lg={2}
      className="p-0 d-flex align-items-center justify-content-center"
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#2d4fad",
          color: "white",
          fontSize: "13px",
          cursor: "pointer",
          width: "100%",
          maxWidth: "150px",
          margin: "5px",
        }}
      >
        <i className="fas fa-phone"></i> Call
      </button>
    </Col>

    {/* Message Button */}
    <Col
      xs={6}
      sm={3}
      lg={2}
      className="p-0 d-flex align-items-center justify-content-center"
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "12px 12px",
          border: "1px solid #2d4fad",
          borderRadius: "20px",
          backgroundColor: "white",
          color: "#2d4fad",
          fontSize: "13px",
          cursor: "pointer",
          width: "100%",
          maxWidth: "150px",
          margin: "5px",
        }}
      >
        <i className="fas fa-comment"></i> Message
      </button>
    </Col>

    {/* WhatsApp Button */}
    <Col
      xs={6}
      sm={3}
      lg={2}
      className="p-0 d-flex align-items-center justify-content-center"
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "12px 10px",
          border: "1px solid #2d4fad",
          borderRadius: "20px",
          backgroundColor: "white",
          color: "#2d4fad",
          fontSize: "13px",
          cursor: "pointer",
          width: "100%",
          maxWidth: "150px",
          margin: "5px",
        }}
      >
        <i
          className="fab fa-whatsapp"
          style={{ color: "#2D4495" }}
        ></i>{" "}
        WhatsApp
      </button>
    </Col>

    {/* Favorite Button */}
    <Col
      xs={6}
      sm={3}
      lg={2}
      className="p-0 d-flex align-items-center justify-content-center position-relative"
    >
      <button
        style={{
          border: "1px solid #2D4495",
          backgroundColor: "white",
          borderRadius: "5px",
          cursor: "pointer",
          color: "#2D4495",
          width: "fit-content",
          height: "fit-content",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px",
          marginRight: "60px",
        }}
      >
        <i
          className="far fa-heart"
          style={{
            color: "#2D4495",
            fontSize: "20px",
          }}
        ></i>
      </button>
    </Col>
  </Row>
</div>

{/* Media Queries for Responsiveness */}
<style jsx>{`
  @media (max-width: 1024px) {
    .text-center {
      text-align: center;
    }

    .row {
      margin-left: 0;
      margin-right: 0;
    }

    .gx-2 {
      gap: 15px;
    }

    .gy-2 {
      gap: 10px;
    }

    .p-0 {
      padding: 0;
    }

    .btn {
      width: 100%;
      max-width: 130px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    .btn {
      font-size: 11px;
      padding: 10px;
    }

    .col {
      padding: 10px 0;
    }
  }

  @media (max-width: 480px) {
    .col {
      padding: 5px;
    }

    .btn {
      font-size: 10px;
      padding: 8px;
      max-width: 120px;
    }
  }
`}</style>

                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))
                ) : (
                  <p>No cars found for the selected criteria.</p>
                )}
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <Button
                  variant="outline-primary"
                  className="d-flex align-items-center mx-2"
                  disabled={activePage === 1}
                  onClick={() => handlePageClick(activePage - 1)}
                >
                  <FaArrowLeft className="me-1" /> Previous
                </Button>

                <ButtonGroup>{renderPageNumbers()}</ButtonGroup>

                <Button
                  variant="outline-primary"
                  className="d-flex align-items-center mx-2"
                  disabled={activePage === totalPages}
                  onClick={() => handlePageClick(activePage + 1)}
                >
                  Next <FaArrowRight className="ms-1" />
                </Button>
                <Container/>
              </div>
            </Col>
          </Row>
        </Container>
        <Container class="container-parent"   style={{
    color: 'black',
    maxWidth: '100%',  // Ensure content fits screen width
    margin: '0 auto',
    backgroundColor: '#E9EEFF',
    height: 'auto',  // Allow height to adjust dynamically
    paddingLeft: '13%',  // Adjusted padding for responsiveness
    paddingRight: '13%',
    paddingTop: '20px',
    paddingBottom: '30px',
  }}>
        <div
                className="cars data"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <h2>Bikes for Sale in Newyork</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus lacus est
                  praesent gravida quam urna arcu integer. Semper vitae velit
                  sed quisque felis sed in. Quis vulputate euismod consequat
                  feugiat vulputate fames. Vitae arcu eu et non tristique diam
                  viverra purus vel. Tortor amet tristique proin turpis massa
                  potenti. Quisque nullam velit sem semper ultrices odio.
                  Egestas feugiat nec id aenean.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus lacus est
                  praesent gravida quam urna arcu integer. Semper vitae velit
                  sed quisque felis sed in. Quis vulputate euismod consequat
                  feugiat vulputate fames. Vitae arcu eu et non tristique diam
                  viverra purus vel. Tortor amet tristique proin turpis massa
                  potenti. Quisque nullam velit sem semper ultrices odio.
                  Egestas feugiat nec id aenean.
                </p>
                <h2>Used bikes for Sale in Newyork</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus lacus est
                  praesent gravida quam urna arcu integer. Semper vitae velit
                  sed quisque felis sed in. Quis vulputate euismod consequat
                  feugiat vulputate fames. Vitae arcu eu et non tristique diam
                  viverra purus vel. Tortor amet tristique proin turpis massa
                  potenti. Quisque nullam velit sem semper ultrices odio.
                  Egestas feugiat nec id aenean.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Lacus lacus est
                  praesent gravida quam urna arcu integer. Semper vitae velit
                  sed quisque felis sed in. Quis vulputate euismod consequat
                  feugiat vulputate fames. Vitae arcu eu et non tristique diam
                  viverra purus vel. Tortor amet tristique proin turpis massa
                  potenti. Quisque nullam velit sem semper ultrices odio.
                  Egestas feugiat nec id aenean.
                </p>
                <h2>Browse More Used Bikes</h2>
                <p style={{ color: "#2d4fad" }}>View Bikes by Cities</p>
                <Row className="responsive-row" style={{ color: "#2d4fad", margin: '0 auto' }}>
                  <Col sm={3}>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                  </Col>
                  <Col sm={3}>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                  </Col>
                  <Col sm={3}>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                  </Col>
                  <Col sm={3}>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                    <div>Newyork(123456)</div>
                  </Col>
                </Row>
              </div>
              </Container>
              {/* Media Queries for Responsiveness */}
<style jsx>{`
  @media (max-width: 768px) {
    .container-parent {
      padding-left: 5%;  // Reduce padding on smaller screens
      padding-right: 5%;
    }
    .responsive-row {
      margin: 0 10px;
    }
  }
  @media (max-width: 480px) {
    .container-parent {
      padding-left: 0%;  // No left padding on very small screens
      padding-right: 0%; // No right padding on very small screens
    }
    .responsive-row {
      margin: 0;
    }
    h2 {
      font-size: 1.2rem; // Smaller font size for headings on mobile
    }
  }
`}</style>
        <ComercialsAds />
        <LatestBlog />
      </div>

      <Footer />
    </>
  );
};

export default Bikes;
