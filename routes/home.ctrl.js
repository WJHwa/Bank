const User = require("../use");

const process = {
  register: async (req, res) => {
    //유저 등록
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  deposit: async (req, res) => {
    // 입금
    const user = new User(req.body);
    const response = await user.deposit();
    return res.json(response);
  },
  use: async (req, res) => {
    //유저 조회
    const user = new User(req.body);
    const response = await user.use();
    return res.json(response);
  },
  withd: async (req, res) => {
    //출금
    const user = new User(req.body);
    const response = await user.withd();
    return res.json(response);
  },
  send: async (req, res) => {
    // 송금
    const user = new User(req.body);
    const response = await user.send();
    return res.json(response);
  },
};

module.exports = { process };
