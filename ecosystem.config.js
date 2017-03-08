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
      user : "root",
      host : "138.68.229.113",
      ref  : "origin/master",
      repo : "https://github.com/nightspring/getcookin.git",
      path : "~/getcookin",
      "post-deploy" : "nvm install && npm install && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
}
