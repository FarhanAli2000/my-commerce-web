import React, { useState } from "react";
import Flag from "react-world-flags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const UpperHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className="upperHeaderWrapper">
      <div className="upperHeaderContainer">
        <div className="appInfo">
          <span className="appInfoText">Download App Via SMS</span>
        </div>

        {/* Contact and Language Section */}
        <div className="contactAndLanguage">
          <div className="phoneInfo">
            <span className="phoneText">+956 123099994</span>
          </div>

          {/* Language Selection */}
          <div className="languageDropdown">
            <button
              className="languageButton"
              onClick={toggleDropdown} // Toggle dropdown visibility
            >
              <Flag
                code={selectedLanguage === "en" ? "GB" : "SA"}
                className="flagIcon"
              />
              {selectedLanguage === "en" ? "Eng" : "Arb"}
              <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {isDropdownVisible && ( // Show dropdown only if visible
              <div className="dropdownContent">
                <div
                  className="dropdownItem"
                  onClick={() => handleLanguageChange("en")}
                >
                  <Flag code="GB" className="flagIcon" />
                  English
                </div>
                <div
                  className="dropdownItem"
                  onClick={() => handleLanguageChange("ar")}
                >
                  <Flag code="SA" className="flagIcon" />
                  Arabic
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
