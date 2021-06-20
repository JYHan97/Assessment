
const { it, beforeEach, expect } = require('@jest/globals');
const userModel = require('../../models/User');
const userController = require('../../controller/user.controller');
const httpMocks = require("node-mocks-http");
const newUser = require('../mock/newUser.json');

let req, res, next;
userModel.save = jest.fn();
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("userController.addOne", () => {
  beforeEach(() => {
    req.body = newUser;
    res.render();
  });
  it("should have a addOne function", () => {
    expect(typeof userController.addOne).toBe('function');
  })
  it("should call userModel constructor function", () => {
    expect.any(userModel.save);
  })
})