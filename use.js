const Userbalan = require("./Userbalan");

class User {
  constructor(body) {
    this.body = body;
  }

  async use() {
    const client = this.body;
    try {
      const user = await Userbalan.UserInfo(client);
      return user;
    } catch (err) {
      return { success: false, err };
    }
  }

  //등록
  async register() {
    const client = this.body;
    try {
      const user = await Userbalan.save(client);
      return user;
    } catch (err) {
      return { success: false, err };
    }
  }
  //입금
  async deposit() {
    const client = this.body;
    try {
      const res = await Userbalan.update(client);
      return res;
    } catch (err) {
      return { success: false, err };
    }
  }
  //   if (res) {
  //     if (res.names === client.names) {
  //       return { success: true };
  //     }
  //     return { success: false, msg: "유저등록후 실행하세요." };
  //   }
  // } catch (err) {
  //   return { success: false, err };
  //출금
  async withd() {
    const client = this.body;
    try {
      const res = await Userbalan.delet(client);
      return res;
    } catch (err) {
      return { success: false, err };
    }
  }
  //   if (res) {
  //     if (res.names === client.names) {
  //       return { success: true };
  //     }
  //     return { success: false, msg: "유저등록후 실행하세요." };
  //   }
  // } catch (err) {
  //   return { success: false, err };
  //송금
  async send() {
    const client = this.body;
    try {
      const res = await Userbalan.sends(client);
      return res;
    } catch (err) {
      return { success: false, err };
    }
  }
  //   if (res) {
  //     if (res.names === client.names) {
  //       return { success: true };
  //     }
  //     return { success: false, msg: "유저등록후 실행하세요." };
  //   }
  // } catch (err) {
  //   return { success: false, err };
}

module.exports = User;
