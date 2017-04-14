var serverFactory = require('spa-server');

var server = serverFactory.create({
    //   path: './dist',
    port: process.env.PORT || 3000,
    fallback: '/index.html',
    // middleware: [
    //     // https middleware for Heroku
    //     function (req, res, next) {
    //         // console.log(next)
    //         if (req.headers['x-forwarded-proto'] !== 'https') {
    //             res.writeHead(302, {
    //                 'Location': 'https://www.mysite.com' + req.url
    //             });
    //             return res.end();
    //         }
    //         return next();
    //     },
    // ]
});

server.start();
