import React, { useState } from "react";
import { db } from "./../../Firebase/FirebaseConfig.jsx";
import { addDoc, collection } from "firebase/firestore";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

// For date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Cloudinary upload
import axios from "axios";

const GamesSport = () => {
  const [img, setImg] = useState(""); // For storing image URL from Cloudinary
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [timeAgo, setTimeAgo] = useState(new Date()); // Default to current date
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
      setImg(response.data.secure_url); // Save the image URL from Cloudinary
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

    if (!img) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      // Get a reference to the 'GamesSport' collection
      const gamesSportCollection = collection(db, "GamesSport");

      // Add a new document to the 'GamesSport' collection
      const docRef = await addDoc(gamesSportCollection, {
        img: img,
        title: title,
        description: description,
        location: location,
        price: price,

        Type: heathcaretype,
        link: link,
        timeAgo: timeAgo.toISOString(), // Convert to ISO string to store the date
      });

      alert("Listing added successfully!");
      setTitle("");
      setImg("");
      setLocation("");
      setPrice("");
      setLink("");
      setDescription("");
      setTimeAgo(new Date()); // Reset time to current date
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
              <h3>Add a New Game or Sport</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleAddListing}>
                {/* Title */}
                <Form.Group controlId="formTitle" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Image Upload */}
                <Form.Group controlId="formImg" className="mb-3">
                  <Form.Label>Image Upload</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formPropertyType" className="mb-3">
                  <Form.Label>Sport & Games Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={heathcaretype}
                    onChange={handlePropertyTypeChange}
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Gloves">Gloves</option>
                    <option value="Stumps">Stumps</option>
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
                    type="text"
                    placeholder="Enter link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Description */}
                <Form.Group controlId="formDescription" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Time Ago */}
                <Form.Group controlId="formTimeAgo" className="mb-3">
                  <Form.Label>Time Ago (Date Added)</Form.Label>
                  <DatePicker
                    selected={timeAgo}
                    onChange={(date) => setTimeAgo(date)} // Update the date state
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

export default GamesSport;
