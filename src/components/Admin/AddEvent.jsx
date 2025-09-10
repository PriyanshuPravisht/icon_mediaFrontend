import React, { useState } from "react";


const AddEvent = () => {
  const [formData, setFormData] = useState({
    id: "",
    image: [],
    location: "",
    startdate: "",
    enddate: "",
    doortime: "",
    Status: "",
    Location: "",
    MoneyBill: "",
    category: "",
    description: "",
  });

  const [previewImages, setPreviewImages] = useState([]);


  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // handle file change
const handleFileChange = (e) => {
  const files = Array.from(e.target.files).slice(0, 3); // max 3 files
  const newImages = [...formData.image, ...files].slice(0, 3); // existing + new files, max 3
  setFormData({ ...formData, image: newImages });

    // generate preview URLs
    const previews = newImages.map((file) => URL.createObjectURL(file));
  setPreviewImages(previews);
};

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();


     const data = new FormData();
    data.append("id", formData.id);
    data.append("location", formData.location);
    data.append("startdate", formData.startdate);
    data.append("enddate", formData.enddate);
    data.append("doortime", formData.doortime);
    data.append("Status", formData.Status);
    data.append("Location", formData.Location);
    data.append("MoneyBill", formData.MoneyBill);
    data.append("category", formData.category);
    data.append("description", formData.description);

    formData.images.forEach((file) => {
      data.append("images", file); // send multiple files
    });

    try {
      const res = await axios.post("http://localhost:5000/events", finalData); // 👈 API endpoint
      alert("Event Added Successfully!");
      console.log(res.data);
      setFormData({
        id: "",
        image: [],
        location: "",
        startdate: "",
        enddate: "",
        doortime: "",
        Status: "",
        Location: "",
        MoneyBill: "",
        category: "",
        description: "",
      });
      setPreviewImages([]);
    } catch (err) {
      console.error(err);
      alert("Failed to add event!");
    }
  };

  return (
    <div className="addevent-container" >
      <h1>Add New Event</h1>
      <form className="addevent-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Images (max 3)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="preview-images" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {previewImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`preview-${idx}`}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
              />
            ))}
          </div>
        </div>
        

        <div className="form-group">
          <label>Location Name</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startdate"
              value={formData.startdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="enddate"
              value={formData.enddate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Door Time</label>
            <input
              type="time"
              name="doortime"
              value={formData.doortime}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>City/Location</label>
            <input
              type="text"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              placeholder="Enterr Event Location"
              required
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="MoneyBill"
              value={formData.MoneyBill}
              onChange={handleChange}
              placeholder="Enter Price Of Event"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Nightlife / Wedding / Business"
            required
          >
             <option value="">-- Select --</option>
              <option value="Upcoming">Nightlife</option>
              <option value="Ongoing">Wedding</option>
              <option value="Completed">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
