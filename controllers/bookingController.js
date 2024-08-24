
const bookingModel=require("../models/Booking")

bookingModel.createTable()

const getAllBookings= (req, res) => {
  bookingModel.getAllBookings((err, bookings) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(bookings);
    }
  });
};

 const addBooking = (req, res) => {
  const booking = req.body;
  bookingModel.addBooking(booking, (err, id) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(id);
    }
  });
};

const getBookingById = (req, res) => {
  const { id } = req.params;
  bookingModel.getBookingById(id, (err, booking) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (booking) {
      res.json(booking);
    } else {
      res.json({ message: "Booking not found" });
    }
  });
};

const deleteBooking = (req, res) => {
  const { id } = req.params;
  bookingModel.deleteBooking(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(204).end();
    }
  });
};

module.exports = {
  getAllBookings,
  addBooking,
  getBookingById,
  deleteBooking
};
