import { RequestHandler } from "express";

import { Members } from "../models/member";

export const createMember: RequestHandler = async (req, res, next) => {
  var member = await Members.create({ ...req.body });
  return res.status(200).json({ success: true, message: "Member created successfully", data: member });
};

export const deleteMember: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedMember: Members | null = await Members.findByPk(id);

  await Members.destroy({ where: { id } });

  return res.status(200).json({ message: "Member deleted successfully", data: deletedMember });
};

export const getAllMembers: RequestHandler = async (req, res, next) => {
  const member = await Members.findAll();
  return res.status(200).json({ success: true, message: "Member Fetched Successfully", data: member });
};

export const getMemberById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const member: Members | null = await Members.findByPk(id);
  return res.status(200).json({ message: "Member Fetched Successfully", data: member });
};

export const updateMember: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Members.update({ ...req.body }, { where: { id } });
  const updatedMembers: Members | null = await Members.findByPk(id);

  return res.status(200).json({ message: "Member Updated Successfully", data: updatedMembers });
};
