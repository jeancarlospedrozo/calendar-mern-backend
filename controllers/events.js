const { response } = require("express");

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    message: "getEvents",
  });
};

const createEvent = (req, res = response) => {
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

const deleteEvents = (req, res = response) => {
  res.json({
    ok: true,
    message: "deleteEvents",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvents,
};
