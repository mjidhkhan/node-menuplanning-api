import express from "express";
import db from "../db/database";

import Review from '../core/classes/Review';
import action from '../core/process/process';

const router = express.Router();

module.exports = router;