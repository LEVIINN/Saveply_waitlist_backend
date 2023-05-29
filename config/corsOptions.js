const whiteList = ["http://localhost:5173"];

const corsOptions = {
  origin: whiteList,
};

exports.module = corsOptions;
