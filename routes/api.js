var express = require("express");
var router = express.Router();
// const upload = require("../utils/middlewareUpload");
// const uploadController = require("./upload");
var fs = require("fs");

router.use(express.json());

/* List of API */
router.get("/", function (req, res, next) {
  res.render("list", {
    title: "MAROLLIC",
    apilist: [
      {
        name: `${req.headers.host}/api/user`,
        description: "Lista Todos Usuarios",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/user/register`,
        description: "Registra Novo Usuario",
        method: "post",
      },
      {
        name: `${req.headers.host}/api/user/login`,
        description: "Autentica Usuario",
        method: "post",
      },
      {
        name: `${req.headers.host}/api/user/search`,
        description: "Busca Usuario",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/product`,
        description: "Lista Todos Produtos",
        method: "get",
      },
    ],
  });
});

/* All User Listing */
router.get("/user", function (req, res, next) {
  const users = require("../users");
  res.send({ status: "success", data: users, msg: "" });
});

/* New User Register */
router.post("/user/register", function (req, res, next) {
  console.log("req.body -> ", req.body);
  const users = require("../users");
  let newUsers = users.filter(function (e) {
    return e.email == req.body.email;
  });
  if (newUsers.length > 0) {
    res.send({ status: "fail", data: {}, msg: "Usuario ja existente" });
  } else {
    users.push(req.body);
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
      // Checking for errors
      if (err)
        res.send({
          status: "fail",
          data: {},
          msg: `Something went wrong ${err}`,
        });
      res.send({ status: "success", data: req.body, msg: "" });
    });
  }
});

/* User Authentication */
router.post("/user/login", function (req, res, next) {
  console.log("req.body -> ", req.body);
  const users = require("../users");
  let newUsers = users.filter(function (e) {
    return e.email == req.body.email && e.password == req.body.password;
  });
  if (newUsers.length > 0) {
    res.send({ status: "success", data: newUsers[0], msg: "" });
  } else {
    res.send({ status: "fail", data: {}, msg: "Usario / Senha nao encontrados" });
  }
});

/* User Search */
router.get("/user/search", function (req, res, next) {
  console.log("req.body -> ", req.query);
  const users = require("../users");
  console.log(users);
  let newUsers = users.filter(function (e) {
    return e.email && e.email.toLowerCase().includes(req.query.q.toLowerCase());
  });
  res.send({ status: "success", data: newUsers, msg: "" });
});

/* User Update */
router.put("/user", function (req, res, next) {
  console.log("req.body -> ", req.body);
  const users = require("../users");
  let updateUser = req.body
  let newUsers = users.filter(function (e) {
    return e.email == updateUser.email;
  });
  if (newUsers.length > 0) {
    updateUser.age = parseInt(updateUser.age);
    users[users.indexOf(newUsers[0])] = updateUser
    newUsers = users[users.indexOf(newUsers[0])];
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
      // Checking for errors
      if (err)
        res.send({
          status: "fail",
          data: {},
          msg: `Something went wrong ${err}`,
        });
      res.send({ status: "success", data: newUsers, msg: "Dados atualizados com sucesso" });
    })
  } else {
    res.send({ status: "fail", data: {}, msg: "Falha ao atualizar os dados" });
  }
});


/* All Product Listing */
router.get("/product", function (req, res, next) {
  const products = require("../products");
  res.send({ status: "success", data: products, msg: "" });
});


/* New Product Register */
router.post("/product/register", (req, res, next) => {



  console.log("req.body -> ", req.body);

  const products = require("../products");

  let updateProduct = req.body

  let newProducts = products.filter(function (e) {
    return e.title == updateProduct.title;
  });

  if (newProducts.length > 0) {

    res.send({ status: "fail", data: {}, msg: "Produto ja existente" });

  } else {

    updateProduct = { id: parseInt(products[products.length - 1].id) + 1, ...updateProduct };
    updateProduct.price = parseFloat(updateProduct.price);
    updateProduct.discountPercentage = parseFloat(updateProduct.discountPercentage);
    updateProduct.rating = parseFloat(updateProduct.rating);
    updateProduct.stock = parseInt(updateProduct.stock);

    // updateProduct.images = req.files;
    // updateProduct.thumbnail = req.files[0];

    products.push(updateProduct);
    fs.writeFile("./products.json", JSON.stringify(products), (err) => {
      // Checking for errors
      if (err)
        res.send({
          status: "fail",
          data: {},
          msg: `Something went wrong ${err}`,
        });
      res.send({ status: "success", data: updateProduct, msg: "" });
    });
  }
});



/* Product Update */
router.put("/product", function (req, res, next) {
  console.log("req.body -> ", req.body);
  const products = require("../products");
  let updateProduct = req.body

  let newProducts = products.filter(function (e) {
    return e.id == updateProduct.id;
  });

  if (newProducts.length > 0) {

    // updateProduct.id = parseInt(updateProduct.id);
    updateProduct.price = parseFloat(updateProduct.price);
    updateProduct.discountPercentage = parseFloat(updateProduct.discountPercentage);
    updateProduct.rating = parseFloat(updateProduct.rating);
    updateProduct.stock = parseInt(updateProduct.stock);

    products[products.indexOf(newProducts[0])] = updateProduct
    newProducts = products[products.indexOf(newProducts[0])];
    fs.writeFile("./products.json", JSON.stringify(products), (err) => {
      // Checking for errors
      if (err)
        res.send({
          status: "fail",
          data: {},
          msg: `Something went wrong ${err}`,
        });
      res.send({ status: "success", data: newProducts, msg: "Dados atualizados com sucesso" });
    })

  } else {

    res.send({ status: "fail", data: {}, msg: "Falha ao atualizar os dados" });

  }
});

/* Product Image Upload */
// router.post("/multiple-upload", uploadController.multipleUpload);

module.exports = router;
