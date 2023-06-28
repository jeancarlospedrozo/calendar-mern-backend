const { response } = require("express");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    message: "getEvents",
  });
};

const createEvent = (req, res = response) => {
  console.log(req.body);
  res.json({
    ok: true,
    message: "createEvent",
  });
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    message: "updateEvent",
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    message: "deleteEvents",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
