import React, { useState } from "react";
import axios from "axios";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    locationName: "",
    cityLocation: "",
    status: "",
    startDate: "",
    endDate: "",
    doorTime: "",
    price: "",
    userId: "",
    images: [], // files
  });

  const [previewImages, setPreviewImages] = useState([]);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle file change (max 3 images)
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setFormData({ ...formData, images: files });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Convert image files into base64 / upload handling 
      // For now, I'll just send dummy `imageUrls` with placeholder strings
      const imageUrls = formData.images.map((file) => file.name); 

      const payload = {
        id: formData.id,
        title: formData.title,
        category: formData.category,
        description: formData.description,
        locationName: formData.locationName,
        cityLocation: formData.cityLocation,
        status: formData.status,
        startDate: formData.startDate,
        endDate: formData.endDate,
        doorTime: formData.doorTime,
        price: formData.price,
        userId: formData.userId,
        imageUrls: imageUrls, // API expects array of strings
      };

      const res = await axios.post(
        "http://35.179.173.165:9302/api/events",
        payload,
  {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2OGM5YjIzZDlmNDAyY2U5YTg1NmQyYWIiLCJlbWFpbCI6InByaXlhMTIzQGdtYWlsLmNvbSIsImlhdCI6MTc1ODA4NTA2NSwiZXhwIjoxNzU4MDg4NjY1fQ.znzVRIiT-NS4AWD7Z6Z-hlHSzGYC1BiHwcN-JBAVnHU`,
    },
  }
        
      );

      alert("Event Added Successfully!");
      console.log(res.data);

      setFormData({
        id: "",
        title: "",
        category: "",
        description: "",
        locationName: "",
        cityLocation: "",
        status: "",
        startDate: "",
        endDate: "",
        doorTime: "",
        price: "",
        userId: "",
        images: [],
      });
      setPreviewImages([]);
    } catch (err) {
      console.error(err);
      alert("Failed to add event!");
    }
  };

  return (
    <div className="addevent-container">
      <h1>Add New Event</h1>
      <form className="addevent-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>ID</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange}  />
        </div>

        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Upload Images (max 3)</label>
          <input type="file" multiple accept="image/*" onChange={handleFileChange} />
          <div className="preview-images" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {previewImages.map((img, idx) => (
              <img key={idx} src={img} alt={`preview-${idx}`} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }} />
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Location Name</label>
          <input type="text" name="locationName" value={formData.locationName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>City Location</label>
          <input type="text" name="cityLocation" value={formData.cityLocation} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Door Time</label>
            <input type="time" name="doorTime" value={formData.doorTime} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Price</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Nightlife">Nightlife</option>
            <option value="Wedding">Wedding</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>User ID</label>
          <input type="text" name="userId" value={formData.userId} onChange={handleChange}  />
        </div>

        <button type="submit" className="submit-btn">Save Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
