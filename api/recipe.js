import express from "express";
import db from "../db/database";

import Recipe from '../core/classes/Recipe';
import action from '../core/process/process';

const router = express.Router();
module.exports = router;