require("babel-register")({
    presets: ["es2015", "react"]
  });
 
const router = require('./route').default;
const Sitemap = require('react-router-sitemap').default;
 
(
    new Sitemap(router)
        .build('https://thachcao.netlify.app/')
        .save('./public/sitemap.xml')
);
