module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "getcookin",
      script    : "server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "deploy",
      host : "138.68.229.113",
      ref  : "origin/master",
      repo : "https://github.com/nightspring/getcookin.git",
      path : "~/getcookin",
      "post-deploy" : "nvm install && npm install && /home/deploy/.nvm/versions/node/v7.5.0/bin/pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
