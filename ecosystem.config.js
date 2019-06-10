module.exports = {
  apps : [{
    name: "download",
    script: "./server/server.js"
  }],
  deploy : {
    production : {
      user : "root",
      host : "129.204.68.85",
      ref  : "origin/master",
      repo : "https://github.com/ccfine/download-software.git",
      path : "/ccfine/deployment/download-software",
      "post-deploy" : "yarn && pm2 reload ecosystem.config.js --env production"
    }
  }
};
