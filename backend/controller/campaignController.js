require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendmail = require("../models/email.models");
const config = require("../config/auth.config");
const user = require("../models/users");

const sendemail = (req, res) => {
  const {
    campaignName,
    campaignSubject,
    campaignBody,
    campaignFrom,
    campaignMailids,
  } = req.body;
};

module.exports = {
  sendemail,
};
