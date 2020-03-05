require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const cors = require("cors");
const fs = require("fs-extra");
const app = express();
const axios = require("axios");

app.use(cors());

/* will use axios to fetch updated state content when necessary */

const content = {
  html: `<i aria-hidden="true" class="v-icon notranslate material-icons theme--light red--text">error</i>
    View up to date information on how Illinois is handling the Coronavirus Disease 2019 (COVID-19) from the <a href="http://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus" style="text-decoration: underline;">Illinois Department of Public Health</a>
    `
};

app.get("/", (req, res) => res.send(content));

app.get("/healthcheck", (req, res) =>
  res.send({ status: 200, msg: "Working!" })
);

app.listen(port, () => console.log(`Server listening on port ${port}`));
