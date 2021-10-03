exports.myFunction = (req, res) => {
  const message = "Hello world";
  res.status(200).send(message);
};
