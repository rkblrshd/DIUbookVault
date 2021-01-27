const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const fs = require("fs");
const app = express();

const db = mysql.createPool({
  connectionLimit:999,
  host: "localhost", // Your connection adress (localhost).
  user: "root", // Your database's username.
  password: "", // Your database's password.
  database: "diubookvault", // Your database's name.
  multipleStatements: true
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Hello");
});

app.post("/login", function(req, res) {
  db.getConnection((err, db) => {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    const sqlSearch = "SELECT * FROM user WHERE email = ? AND password = ?";

    db.query(sqlSearch, [email, password], function(error, results, fields) {
      if (error) throw error;

      res.send(results);
    });
  });
});

app.post("/signup", function(req, res) {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;
    const email = req.body.email;
    const firstname = req.body.first_name;
    const lastname = req.body.last_name;
    const password = req.body.password;
    const sqlInsert =
      "INSERT INTO user (userid,email,firstname,lastname,password) VALUES (?,?,?,?,?)";

    db.query(
      sqlInsert,
      [userid, email, firstname, lastname, password],
      function(error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});

app.post("/updateProfile", function(req, res) {
  db.getConnection(function(err, db) {
    const user = req.body.user;
    console.log(user);
    const firstname = user.firstname;
    const lastname = user.lastname;
    const address = user.address;
    const apartment = user.apartment;
    const town = user.town;
    const district = user.district;
    const postCode = user.postCode;
    const phone_number = user.phone_number;
    const userid = req.body.userid;
    const sqlUpdate =
      "UPDATE user SET firstname = ?, lastname = ?, address = ?, apartment = ?, town =?, district = ?, postCode = ?, phone_number = ? WHERE userid = ? ";

    db.query(
      sqlUpdate,
      [
        firstname,
        lastname,
        address,
        apartment,
        town,
        district,
        postCode,
        phone_number,
        userid
      ],
      function(error, results, fields) {
        if (error) throw error;
        const sqlSearch = "SELECT * FROM user WHERE userid = ? ";

        db.query(sqlSearch, [userid], function(error, results, fields) {
          if (error) throw error;

          res.send(results);
        });
      }
    );
  });
});

app.post("/uploadQuestionBank", upload.single("avatar"), (req, res) => {
  console.log(req.body.filename);
  const fileRealName = req.file.filename;
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = fileRealName + "." + fileType;

  fs.rename(
    `./uploads/${fileRealName}`,
    `./uploads/${newFileName}`,
    function() {
      console.log("done");
      var d = new Date();
      const level = req.body.level;
      const term = req.body.term;
      const examtype = req.body.examtype;
      const fileLocation = "./uploads/" + newFileName;
      const fileName = req.body.filename;
      const uploadTime = d.getTime();
      const size = req.file.size;
      const type = fileType;
      const sqlInsert =
        "INSERT INTO questionBank (level,term,examtype,fileLocation,fileName,uploadTime,size,type) VALUES (?,?,?,?,?,?,?,?)";

      db.query(
        sqlInsert,
        [level, term, examtype, fileLocation, fileName, uploadTime, size, type],
        function(error, results, fields) {
          if (error) throw error;

          res.send("200");
        }
      );
    }
  );
});

app.get("/getBook", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const prodsQuery = "SELECT * FROM books LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [limit, offset], function(error, results, fields) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelTermExamtypeBook", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const level = req.body.level;
  const term = req.body.term;
  const examtype = req.body.examtype;
  console.log(level, term, examtype);
  const prodsQuery =
    "SELECT * FROM books WHERE level = ? AND term = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, term, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelTerm", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const level = req.body.level;
  const term = req.body.term; // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM books WHERE level = ? AND term = ?  LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, term, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getTermExamtypeBook", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const term = req.body.term;
  const examtype = req.body.examtype;
  // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM books WHERE term = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [term, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelExamtypeBook", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const level = req.body.level;
  const examtype = req.body.examtype;
  // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM books WHERE level = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.get("/getQuestionBank", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const prodsQuery = "SELECT * FROM questionBank LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [limit, offset], function(error, results, fields) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});
app.post("/uploadBook", upload.single("avatar"), (req, res) => {
  const fileRealName = req.file.filename;
  console.log(fileRealName);
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = fileRealName + "." + fileType;

  fs.rename(
    `./uploads/${fileRealName}`,
    `./uploads/${newFileName}`,
    function() {
      console.log("done");
      // var d = new Date();
      // const level = 1;
      // const term = 1;
      // const examtype = 1;
      // const fileLocation = "./uploads/" + newFileName;
      // const fileName = req.body.filename;
      // const uploadTime = d.getTime();
      // const price = 200.0;
      // const quantity = 24;
      // const size = req.file.size;
      // const type = fileType;
      // const sqlInsert =
      //   "INSERT INTO books (level,term,examtype,fileLocation,fileName,uploadTime,price,quantity,size,type) VALUES (?,?,?,?,?,?,?,?,?,?)";

      // db.query(
      //   sqlInsert,
      //   [
      //     level,
      //     term,
      //     examtype,
      //     fileLocation,
      //     fileName,
      //     uploadTime,
      //     price,
      //     quantity,
      //     size,
      //     type
      //   ],
      //   function(error, results, fields) {
      //     if (error) throw error;

      //     res.send("200");
      //   }
      // );
    }
  );
});

app.post("/addtocart", (req, res) => {
  db.getConnection(function(err, db) {
    console.log(req.body);
    const userid = req.body.userid;
    //pass hoynay data
    const bookid = req.body.bookid;
    const quantity = 1;
    const sqlInsert =
      "INSERT INTO cart (bookid,userid,quantity) VALUES (?,?,?)";

    db.query(sqlInsert, [bookid, userid, quantity], function(
      error,
      results,
      fields
    ) {
      if (error) throw error;

      res.send(results);
    });
  });
});

app.get("/cartItem", (req, res) => {
  db.getConnection(function(err, db) {
    console.log(req.query.userid);
    const userid = req.query.userid;
    const sqlInsert =
      "SELECT *,cart.quantity as cartquantity FROM cart,books WHERE userid = ? AND books.bookid = cart.bookid";

    db.query(sqlInsert, [userid], function(error, results, fields) {
      if (error) throw error;

      res.send(results);
    });
  });
});

app.post("/order", (req, res) => {
  console.log(req, req.body.item);
  const item = req.body.item;
  const price = req.body.price;
  const userid = req.body.userid;

  db.getConnection(function(err, db) {
    const sqlInsert =
      "INSERT INTO orders ( userid, orderstatus,price) VALUES (?,?,?)";
    db.query(sqlInsert, [userid, 0, price], function(error, results, fields) {
      if (error) throw error;

      console.log(results.insertId);
      const orderid = results.insertId;
      const orders = [];

      item.map(item => {
        const d = new Date();
        var newData = [
          orderid,
          item.bookid,
          parseInt(item.cartquantity),
          d.getTime()
        ];
        orders.push(newData);
      });
      console.log(orders);
      const sqlInsertOrder =
        "INSERT INTO orderdetails (orderid,bookid,bookquantity,date) VALUES ?";

      db.query(sqlInsertOrder, [orders], function(error, results, fields) {
        if (error) throw error;

        const deletedData = [];

        item.map(item => {
          var newData = [item.cartId];
          deletedData.push(newData);
        });
        console.log(deletedData);
        const sqlDeleteCart = "DELETE FROM cart WHERE (cartId) IN (?)";
        db.query(sqlDeleteCart, [deletedData], function(
          error,
          results,
          fields
        ) {
          if (error) throw error;

          res.send(results);
        });
      });
    });
  });
});

app.post("/getOrder", function(req, res) {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;
    console.log(req);
    const sqlQuery = "SELECT * from orders WHERE userid = ?";

    db.query(sqlQuery, [userid], function(error, results, fields) {
      if (error) throw error;

      res.send(results);
    });
  });
});

app.post("/checksubscription", (req, res) => {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;
    console.log(userid);
    const sqlSearch =
      "SELECT * FROM subscriber WHERE userid = ? AND status = ?";
    db.query(sqlSearch, [userid, 1], function(error, results, fields) {
      if (error) throw error;

      res.send(results);
    });
  });
});

app.get("/getQuestion", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const prodsQuery = "SELECT * FROM questionBank LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [limit, offset], function(error, results, fields) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelTermExamtypeQuestion", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  // query for fetching data with page number and offset
  const level = req.body.level;
  const term = req.body.term;
  const examtype = req.body.examtype;
  console.log(level, term, examtype);
  const prodsQuery =
    "SELECT * FROM questionBank WHERE level = ? AND term = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, term, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelTermQuestion", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const level = req.body.level;
  const term = req.body.term; // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM questionBank WHERE level = ? AND term = ?  LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, term, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getTermExamtypeQuestion", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const term = req.body.term;
  const examtype = req.body.examtype;
  // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM questionBank WHERE term = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [term, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/getLevelExamtypeQuestion", (req, res) => {
  // limit as 20
  const limit = 12;
  // page number
  const page = req.query.page || 1;
  // calculate offset
  const offset = (page - 1) * limit;
  const level = req.body.level;
  const examtype = req.body.examtype;
  // query for fetching data with page number and offset
  const prodsQuery =
    "SELECT * FROM questionBank WHERE level = ? AND examtype = ? LIMIT ? OFFSET ?";
  db.getConnection(function(err, db) {
    db.query(prodsQuery, [level, examtype, limit, offset], function(
      error,
      results,
      fields
    ) {
      // When done with the db, release it.
      ;
      if (error) throw error;
      // create payload
      var jsonResult = {
        products_page_count: results.length,
        page_number: page,
        products: results
      };
      // create response
      // var myJsonString = JSON.parse(JSON.stringify(jsonResult));
      // res.statusMessage = "Products for page " + page;
      // res.statusCode = 200;
      // res.json(myJsonString);
      res.send(jsonResult);
    });
  });
});

app.post("/changepass", function(req, res) {
  db.getConnection(function(err, db) {
    const password = req.body.password;
    const userid = req.body.userid;
    console.log(password, userid);
    const sqlUpdate = "UPDATE user SET password = ? WHERE userid = ?";

    db.query(sqlUpdate, [password, userid], function(error, results, fields) {
      if (error) throw error;

      const sqlSearch = "SELECT * FROM user WHERE userid = ? ";

      db.query(sqlSearch, [userid], function(error, results, fields) {
        if (error) throw error;

        res.send(results);
      });
    });
  });
});

app.post("/getSubscriber", function(req, res) {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;
    const sqlSearch = "SELECT * FROM subscriber WHERE userid = ?";

    db.query(sqlSearch, [userid], function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.post("/setSubscriber", function(req, res) {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;
    const transactionid = req.body.transactionId;
    const number = req.body.number;
    const status = 0;
    const d = new Date();
    const subscribedate = d.getTime();
    const sqlInsert =
      "INSERT INTO subscriber (userid,transactionid,status,subscribedate,number) VALUES(?,?,?,?,?)";

    db.query(
      sqlInsert,
      [userid, transactionid, status, subscribedate, number],
      function(error, results, fields) {
        if (error) throw error;
        const sqlSearch = "SELECT * FROM subscriber WHERE userid = ?";

        db.query(sqlSearch, [userid], function(error, results, fields) {
          if (error) throw error;
          res.send(results);
        });
      }
    );
  });
});

app.post("/getSubscribedBook", function(req, res) {
  db.getConnection(function(err, db) {
    const userid = req.body.userid;

    const sqlSearch =
      "SELECT * FROM orderdetails,orders,books WHERE userid = ? AND orderdetails.orderid = orders.orderid AND orders.price = ? AND books.bookid = orderdetails.bookid";

    db.query(sqlSearch, [userid, 0], function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.get("/sendingData", function(req, res) {
  db.getConnection(function(err, db) {
    const sqlSearch = "SELECT * FROM questionBank WHERE questionBankId>?";

    db.query(sqlSearch, [98], function(error, results, fields) {
      if (error) throw error;
     
      let data = [];

      results.map(item => {
        let newData = [
          item.level,
          item.term,
          item.examtype,
          item.fileName,
          item.fileLocation,
          item.uploadTime,
          200,
          24,
          item.size,
          item.type
        ];
        data.push(newData);
      });
      console.log(data)
      const sqlInsert =
        "INSERT INTO books (level,term,examtype,fileName,fileLocation,uploadTime,price,quantity,size,type) VALUES ?";
      db.query(sqlInsert, [data], function(error, results, fields) {
        if (error) throw error;

        res.send(results);
      });
    });
  });
});

app.listen(3001, () => {
  console.log("Go to http://localhost:3001/ so you can see the data.");
});
