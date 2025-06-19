const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map((el) => el.message);
  if (errors.length > 1) {
    let chain = "";
    for (let i = 0; i < errors.length; i++) {
      chain += errors[i] + " || ";
    }
    const string = chain.slice(0, -4);
    res.status(400).send({ messages: string });
  } else {
    res.status(400).send({ message: errors });
  }
};

const typeError = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    return (err = handleValidationError(err, res));
  } else if (err.code === 11000) {
    res.status(400).send({ message: "El correo tiene que ser único" });
  } else if (err.origin === "usuario") {
    console.warn("Error came from user registration.");
    return res.status(400).send("Hubo un error al registrar el usuario");
  } else {
    return res.status(500).send(`Hubo un problema`);
  }
};

module.exports = { typeError };
