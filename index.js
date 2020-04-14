require("dotenv").config();
const port = process.env.PORT || 3030;
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
    View up to date information on how Illinois is handling the Coronavirus Disease 2019 (COVID-19) from the <a href="https://coronavirus.illinois.gov" target="_blank" style="text-decoration: underline;">State of Illinois Coronavirus Response Site</a>
    `,
};

const contentV2 = {
  html: `<v-alert icon="mdi-alert" border="left" prominent dense text dismissible color="info" class="px-6 py-4">
      <div class="pl-3" style="color: #444">
        View up to date information on how Illinois is handling the Coronavirus Disease 2019 (COVID-19) from the <a
          href="https://coronavirus.illinois.gov"
          style="text-decoration: underline;"
          target="_blank"
          >State of Illinois Coronavirus Response Site</a
        >.
      </div>
      <div class="pl-3 mt-1" style="color: #444">
        View <a
          href="https://icjia.illinois.gov/covid19"
          target="_blank"
          style="text-decoration: underline;"
          >ICJIA's COVID-19 Response page</a
        > for the latest grant and fiscal notifications, resources, and more.
      </div>
    </v-alert>`,
};

app.get("/", (req, res) => res.send(content));
app.get("/v2", (req, res) => res.send(contentV2));

app.get("/healthcheck", (req, res) =>
  res.send({ status: 200, msg: "Working!" })
);

app.listen(port, () => console.log(`Server listening on port ${port}`));
