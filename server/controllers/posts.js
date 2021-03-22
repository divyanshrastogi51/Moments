import express from 'express';
import mongoose from 'mongoose';

import Schema from '../models/Schema.js';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const schema = await Schema.find();
    res.status(200).json(schema);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const { fname, lname } = req.body;

  const newPostMessage = new Schema({ fname, lname })

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export default router;