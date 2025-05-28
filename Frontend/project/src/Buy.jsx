import React, { useState } from 'react';
import './Buy.css';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Purchase completed successfully!');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">✅ Purchase Summary</h2>

      <div className="summary-box">
        <h3>Full Stack Web Developer Course</h3>
        <ul>
          <li>📚 87.6 Total Hours</li>
          <li>⭐ 4.7 (442K Ratings)</li>
          <li>💼 Avg Salary: $127,005/year</li>
          <li>🚀 16,500+ Roles Available</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>💳 Billing Details</h3>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          maxLength={19}
          required
        />
        <div className="flex-row">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            maxLength={4}
            required
          />
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          Save payment info for future courses
        </label>

        <div className="course-benefits">
          <h4>📘 What You'll Get</h4>
          <ul>
            <li>80+ hours of expert-led content</li>
            <li>Hands-on projects & assignments</li>
            <li>Community access & job prep resources</li>
            <li>Certificate of Completion</li>
          </ul>
        </div>

        <p className="support-text">
          💬 Need help? Contact <a href="mailto:support@techcourses.com">support@techcourses.com</a>
        </p>

        <button type="submit" className="purchase-button">
          Complete Purchase →
        </button>

        <p className="guarantee-text">* 100% Money-back guarantee within 14 days</p>
      </form>
    </div>
  );
}
