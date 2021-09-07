const db = require("../app/config/db");

class Userbalan {
  static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    //유저 조회
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM user WHERE name = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }
  static UserInfo(user) {
    //유저 조회
    return new Promise((resolve, reject) => {
      const query = "SELECT balance,name FROM user WHERE name = ?;";
      db.query(query, [user.id], (err, data, results) => {
        if (err) reject(`${err}`);
        resolve(data);
      });
    });
  }
  // 유저 등록
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO user(name) VALUES(?);";
      db.query(query, [userInfo.id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
  // 유저 입금
  static async update(user) {
    return new Promise((resolve, reject) => {
      const squery1 =
        "INSERT INTO action_log(amount,action_type) VALUES(? , 'diposit');";
      db.query(squery1, [user.place], (err) => {
        if (err) reject(`${err}`);
        if (resolve) {
          const squery2 =
            "UPDATE user SET balance = balance + ? WHERE name = ?;";
          db.query(squery2, [user.place, user.names], (err) => {
            reject(`${err}`);
          });
          resolve({ success: true });
        }
      });
    });
  }
  // 유저 출금
  static async delet(user1) {
    return new Promise((resolve, reject) => {
      const squery1 =
        "INSERT INTO action_log(amount,action_type) VALUES(? , 'withdraw');";
      db.query(squery1, [user1.place], (err) => {
        if (err) reject(`${err}`);
        if (resolve) {
          const squery2 =
            "UPDATE user SET balance = balance - ? WHERE name = ?;";
          db.query(squery2, [user1.place, user1.names], (err) => {
            reject(`${err}`);
          });
          resolve({ success: true });
        }
      });
    });
  }
  // 유저 송금
  static async sends(user2) {
    return new Promise((resolve, reject) => {
      const squery1 = "UPDATE user SET balance = balance + ? WHERE name = ?;";
      db.query(squery1, [user2.place, user2.name1], (err) => {
        if (err) reject(`${err}`);
        if (resolve) {
          const squery2 =
            "UPDATE user SET balance = balance - ? WHERE name = ?;";
          db.query(squery2, [user2.place, user2.name2], (err) => {
            reject(`${err}`);
          });
          resolve({ success: true });
        }
      });
    });
  }
}

module.exports = Userbalan;
