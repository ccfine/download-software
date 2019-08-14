const express = require("express")

const app = express()
const softwarePath = "/ccfine/software"
const filePath = "/ccfine/file"

app.get("/software/nvm-setup", (req, res) => {
  res.download(`${softwarePath}/nvm-setup.zip`, "nvm-setup.zip")
})

app.get("/software/ShadowsocksX-NG", (req, res) => {
  res.download(`${softwarePath}/ShadowsocksX-NG.app.zip`, "ShadowsocksX-NG.app.zip")
})

app.get("/file/resume.docx", (req, res) => {
  res.download(`${filePath}/resume.docx`, "resume.docx")
})

app.get("/file/resume.pdf", (req, res) => {
  res.download(`${filePath}/resume.pdf`, "resume.pdf")
})

const server = app.listen(8000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("服务访问地址为 http://%s:%s", host, port)
})