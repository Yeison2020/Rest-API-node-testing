import express from "express";
import bodyParser from "body-parser";
// They both the same
// const express = require("express");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
