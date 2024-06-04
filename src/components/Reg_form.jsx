import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Reg_form = () => {
    const [formData, setFormData] = useState({
        bookingStatus: 'Queue',
        mobileNumber: '',
        customerName: '',
        numberOfGuests: '',
        bookingDate: '',
        bookingTime: '',
        offers: '',
        assignTable: '',
        additionalNote: '',
        customerType: 'VIP',
        foodPreference: 'Veg',
      });
      const navigate =useNavigate()
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Customer data:', formData);
        // You can perform further actions with the form data here,
        // such as sending it to a server or storing it in state.
        navigate('/submit')
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h2>Customer Details</h2>
          {/* Booking Status */}
          <label htmlFor="bookingStatus">Booking Status: </label>
          <select id="bookingStatus" name="bookingStatus" value={formData.bookingStatus} onChange={handleChange}>
            <option value="Booked">Booked</option>
            <option value="Queue">Queue</option>
            <option value="Served">Served</option>
          </select>
          <br />
    
          {/* Mobile Number */}
          <label htmlFor="mobileNumber">Mobile Number: </label>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
          <br />
    
          {/* Customer Name */}
          <label htmlFor="customerName">Customer Name: </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter customer name"
            required
          />
          <br />
    
          {/* Number of Guests */}
          <label htmlFor="numberOfGuests">Number of Guests (PAX): </label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            placeholder="Enter number of guests"
            required
          />
          <br />
    
          <h2>Additional Details</h2>
    
          {/* Booking Date */}
          <label htmlFor="bookingDate">Booking Date: </label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
          />
          <br />
    
          {/* Booking Time */}
          <label htmlFor="bookingTime">Booking Time: </label>
          <input
            type="text"
            id="bookingTime"
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            placeholder="Enter booking time (e.g., 12:30 PM)"
          />
          <br />
    
          {/* Offers */}
          <label htmlFor="offers">Offers: </label>
          <input
            type="text"
            id="offers"
            name="offers"
            value={formData.offers}
            onChange={handleChange}
            placeholder="Enter any available offers"
          />
          <br />
    
          {/* Assign Table */}
          <label htmlFor="assignTable">Assign Table: </label>
          <input
            type="text"
            id="assignTable"
            name="assignTable"
            value={formData.assignTable}
            onChange={handleChange}
            placeholder="Enter table number or location"
          />
          <br />
    
          {/* Additional Note */}
          <label htmlFor="additionalNote">Additional Note: </label>
          <textarea
            id="additionalNote"
            name="additionalNote"
            value={formData.additionalNote}
            onChange={handleChange}
            placeholder="Enter any additional notes"
          />
          <br />
    
          {/* Customer Type */}
          <label htmlFor="customerType">Customer Type: </label>
          <select id="customerType" name="customerType" value={formData.customerType} onChange={handleChange}>
            <option value="VIP">VIP</option>
            <option value="Vegan">Vegan</option>
            <option value="Celebrity">Celebrity</option></select>
            <br />
          <label htmlFor="foodPreference">Food Preference: </label>
            
          <select id="customerType" name="customerType" value={formData.foodPreference} onChange={handleChange}>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
            </select>
            <br />
            <button type="submit" className="border border-black">Add Customer</button>
            </form>)
}

export default Reg_form