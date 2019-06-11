module.exports = {
  apps: [{
    name: "download",
    script: "./server/server.js"
  }],
  deploy: {
    production: {
      user: "root",
      host: "129.204.68.85",
      ref: "origin/master",
      repo: "https://github.com/ccfine/download-software.git",
      path: "/ccfine/project/download-software",
      "post-deploy": "cd /ccfine/deployment/download-software && rm -rf * && cd /ccfine/project/download-software/current && cp -r * /ccfine/deployment/download-software && yarn && pm2 reload ecosystem.config.js"
    }
  }
};
