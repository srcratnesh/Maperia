import express from 'express';
import mongoose from 'mongoose'; // Import mongoose

const router = express.Router();

const locationSchema = new mongoose.Schema({
  lc_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    addressline1: {
      type: String,
      required: true
    },
    addressline2: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    }
  },
  annual_revenue: {
    type: Number,
    required: true
  },
  ph_no: {
    type: String,
    required: true
  }
});

// Create the Location model
const LocationModel = mongoose.model('Location', locationSchema); // Rename to LocationModel

export default router; // Export the Location model
