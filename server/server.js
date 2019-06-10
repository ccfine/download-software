const express = require("express")

const app = express()
const softwarePath = "/ccfine/software"

app.get("/download/nvm-setup", (req, res) => {
  res.download(`${softwarePath}/nvm-setup.zip`, "nvm-setup.zip")
})

const server = app.listen(8000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("服务访问地址为 http://%s:%s", host, port)
})