const { response, request } = require('express');
const User = require('../models/user');
const { BadRequest } = require('../utils/errors.utils');

const HTTP_STATUSES = { CREATED: 201, BAD_REQUEST: 400 };

const getUser = (req = request, res = response) => {
  const { userId } = req.params;

  res.json({ ok: true, message: 'GET specific user', userId });
};

const getUsers = (req = request, res = response) => {
  const { name, gender = 'NA' } = req.query;

  res.json({
    ok: true,
    message: 'First GET API from Controller',
    name,
    gender
  });
};

const createUsers = async (req, res = response, next) => {
  const body = req.body;
  const user = new User(body);

  try {
    await user.save();
    res
      .status(HTTP_STATUSES.CREATED)
      .json({ ok: true, message: 'First POST API', user });
  } catch (error) {
    next(error);
  }
};

const updateUsers = (req = request, res = response, next) => {
  try {
    const { userId } = req.params;
    if (userId === '0') {
      throw new BadRequest('Missing required field: userId');
    }

    res.json({ ok: true, message: 'First PUT API', id: userId });
  } catch (err) {
    // passing to the error handler middleware
    next(err);
  }
};

const deleteUsers = (req, res) => {
  res.json({ ok: true, message: 'First DELETE API' });
};

module.exports = {
  getUsers,
  getUser,
  createUsers,
  updateUsers,
  deleteUsers
};
