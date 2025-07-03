const express = require("express");
const { errorHandler } = require("./handlers");
const app = express();
const port = 4000;
app.get("/", (req, res) => res.json({ hello: "world" }));
// app.get('/api/login')
// app.use((req, res, next) => {
//   const err = new Error("Not found");
//   err.status = 404;

//   next(err);
// });
app.use(handle.notFound);
app.use(handle.errors);    
// => {
//   res.status(err.status || 500).json({
//     err: err.message || "something went wrong",
//   });
// });
// app.get('/',(req,res)=>res.send('Hello World'))
app.listen(port, console.log(`server started on port ${port}`));
