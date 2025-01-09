import React, { useState } from "react";
import { db } from "./../../Firebase/FirebaseConfig.jsx";
import { addDoc, collection } from "firebase/firestore";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

// For date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Cloudinary upload
import axios from "axios";

const HealthCare = () => {
  const [image, setImage] = useState(""); // For storing image URL from Cloudinary
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [postedAgo, setPostedAgo] = useState(new Date()); // Default to current date
  const [imageFile, setImageFile] = useState(null); // For storing the selected image file
  const [heathcaretype, setheathcaretype] = useState(""); // For storing selected property type
  const handlePropertyTypeChange = (e) => {
    const selectedType = e.target.value;
    setheathcaretype(selectedType);
    console.log("Selected Property Type:", selectedType); // Log the selected property type
  };
  // Handle image upload to Cloudinary
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "duvddbfbf");
    formData.append("cloud_name", "duvddbfbf");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/duvddbfbf/image/upload",
        formData
      );
      setImage(response.data.secure_url); // Save the image URL from Cloudinary
      console.log("Image uploaded successfully:", response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file); // Upload the selected file
    }
  };

  // Function to add a new listing to Firestore
  const handleAddListing = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      // Get a reference to the 'listings' collection
      const listingsCollection = collection(db, "HealthCare");

      // Add a new document to the 'listings' collection
      const docRef = await addDoc(listingsCollection, {
        img: image,
        title: title,
        details: details,
        location: location,
        price: price,
        Type: heathcaretype,
        link: link,
        timeAgo: postedAgo.toISOString(), // Convert to ISO string to store the date
      });

      alert("Listing added successfully!");
      setTitle("");
      setImage("");
      setLocation("");
      setPrice("");
      setLink("");
      setDetails("");
      setPostedAgo(new Date()); // Reset time to current date
    } catch (error) {
      console.error("Error adding listing: ", error);
      alert("Error adding listing.");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Header className="text-center">
              <h3>Add a New HealthCare</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleAddListing}>
                {/* Title */}
                <Form.Group controlId="formTitle" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter listing title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Image Upload */}
                <Form.Group controlId="formImage" className="mb-3">
                  <Form.Label>Image Upload</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPropertyType" className="mb-3">
                  <Form.Label>Health Care Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={heathcaretype}
                    onChange={handlePropertyTypeChange}
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="Sugae Apparatus">Sugae Apparatus</option>
                    <option value="Bp Apparatus">Bp Apparatus</option>
                    <option value="Medicine">Medicine</option>
                  </Form.Control>
                </Form.Group>
                {/* Location */}
                <Form.Group controlId="formLocation" className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Price */}
                <Form.Group controlId="formPrice" className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Link */}
                <Form.Group controlId="formLink" className="mb-3">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Details */}
                <Form.Group controlId="formDetails" className="mb-3">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Posted Ago */}
                <Form.Group controlId="formPostedAgo" className="mb-3">
                  <Form.Label>Posted Ago (Date Posted)</Form.Label>
                  <DatePicker
                    selected={postedAgo}
                    onChange={(date) => setPostedAgo(date)} // Update the date state
                    dateFormat="MMMM d, yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    className="form-control"
                    required
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" block>
                  Add Listing
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HealthCare;
