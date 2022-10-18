import { RequestHandler } from "express";

import { Events } from "../models/event";

export const createEvent: RequestHandler = async (req, res, next) => {
  var event = await Events.create({ ...req.body });
  return res.status(200).json({ success: true, message: "event created successfully", data: event });
};

export const deleteEvent: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedevent: Events | null = await Events.findByPk(id);

  await Events.destroy({ where: { id } });

  return res.status(200).json({ message: "event deleted successfully", data: deletedevent });
};

export const getAllEvents: RequestHandler = async (req, res, next) => {
  const event = await Events.findAll();
  return res.status(200).json({ message: "event Fetched Successfully", data: event });
};

export const geteventById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const event: Events | null = await Events.findByPk(id);
  return res.status(200).json({ message: "event Fetched Successfully", data: event });
};

export const updateEvent: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Events.update({ ...req.body }, { where: { id } });
  const updatedEvents: Events | null = await Events.findByPk(id);
  return res.status(200).json({ message: "event Updated Successfully", data: updatedEvents });
};
