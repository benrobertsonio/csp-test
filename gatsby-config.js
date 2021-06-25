require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'csp-test',
    },
    plugins: [{
        resolve: 'gatsby-plugin-gatsby-cloud',
        options: {
            allPageHeaders: [
                "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
            ]
        }
    }
    ],
}
