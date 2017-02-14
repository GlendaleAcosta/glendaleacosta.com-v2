var path = require('path');

module.exports = {
    entry: "./app/src/app.jsx",
    output: {
        path: path.resolve(__dirname, 'app/public/'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"],
                    plugins: [["transform-object-rest-spread", { "useBuiltIns": true }]]
                }
            }
        ]
    },
    resolve : {
         extensions: [".js", ".json", ".jsx", ".css"],
         alias: {
             Main: path.resolve(__dirname, "app/src/components/Main.jsx"),

             Home:  path.resolve(__dirname, "app/src/components/pages/Home.jsx"),

             About: path.resolve(__dirname, "app/src/components/pages/about/About.jsx"),
             Skills: path.resolve(__dirname, "app/src/components/pages/about/Skills.jsx"),

             Portfolio: path.resolve(__dirname, "app/src/components/pages/portfolio/Portfolio.jsx"),
             ProjectDetails: path.resolve(__dirname, "app/src/components/pages/portfolio/ProjectDetails.jsx"),
             ProjectLinks: path.resolve(__dirname, "app/src/components/pages/portfolio/ProjectLinks.jsx"),
             ProjectCounter: path.resolve(__dirname, "app/src/components/pages/portfolio/ProjectCounter.jsx"),

             Contact: path.resolve(__dirname, "app/src/components/pages/Contact.jsx"),
             MapContainer: path.resolve(__dirname, "app/src/components/utilities/MapContainer.jsx"),
             Email: path.resolve(__dirname, "app/src/api/Email.js"),
             
             Navbar: path.resolve(__dirname, "app/src/components/layout/Navbar.jsx"),
             PageLoader: path.resolve(__dirname, "app/src/components/loaders/PageLoader.jsx"),
             home_icon: path.resolve(__dirname, "app/src/images/home_icon.svg"),

             PageLoader: path.resolve(__dirname, "app/src/components/loaders/PageLoader.jsx"),
             Resume: path.resolve(__dirname, "app/src/api/Resume.js"),

         }
    }
}