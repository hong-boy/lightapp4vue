/* eslint-disable no-useless-computed-key */
const proxy = {
  ["GET /api/users"]: (req, res) => {
    console.log(req);
    return res.status(200).json([{ id: 1, name: 12 }]);
  },
  "PUT /api/users": (req, res) => {
    console.log(req);
    return res.status(200).json([{ id: 1, name: 12 }]);
  },
  ["POST /api/users"]: (req, res) => {
    console.log(req);
    return res.status(200);
  },
  ["DELETE /api/users"]: (req, res) => {
    console.log(req);
    return res.status(200);
  }
};
/* eslint-enable no-useless-computed-key */

module.exports = proxy;
