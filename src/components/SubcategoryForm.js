import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Subcategory.module.css";
import { useNavigate } from "react-router-dom";

function SubcategoryForm() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const backendUrl = `${process.env.REACT_APP_API_URL}/categories`;
        const response = await axios.get(backendUrl);
        setCategories(response.data);
      } catch (error) {
        console.log("error in fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubcategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const backendUrl = `${process.env.REACT_APP_API_URL}/subcategories`;
      const response = await axios.post(backendUrl, {
        subcategory: subcategoryName,
        name: subcategoryName,
        categoryId: selectedCategory,
      });
      console.log("Subcategory created:", response.data);
      setSubcategoryName("");
      navigate("/admin");
    } catch (error) {
      console.log("error creating subcategory", error);
    }
  };

  return (
    <div className={styles.subcategoryFormContainer}>
      <div className={styles.formContainer}>
        <h2>Create Subcategory</h2>
        <form onSubmit={handleSubcategorySubmit}>
          <div>
            <label className={styles.label}>Select Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.inputField}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={styles.label}>Subcategory Name:</label>
            <input
              type="text"
              value={subcategoryName}
              onChange={(e) => setSubcategoryName(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Create Subcategory
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubcategoryForm;
