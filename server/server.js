const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("express server")
})

const server = app.listen(8000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("服务访问地址为 http://%s:%s", host, port)
})