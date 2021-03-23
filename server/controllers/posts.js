import express from 'express';
import mongoose from 'mongoose';

import Schema from '../models/Schema.js';

const router = express.Router();


export const getPosts = async (req, res) => {
  try {
    const postMessages = await Schema.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Schema.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newSchema = new Schema({ title, message, selectedFile, creator, tags })

  try {
    await newSchema.save();

    res.status(201).json(newSchema);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await Schema.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await Schema.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const post = await Schema.findById(id);

  const updatedPost = await Schema.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

  res.json(updatedPost);
}


export default router;
