import express from "express";
import cors from "cors";
import router from "./app/Routes";
import NotFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";

const app = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api", router);

// app.get("/", (req, res) => {
//   const a = 10;
//   res.send(a);
// });

app.use(globalErrorHandler);

app.use(NotFound);

export default app;
