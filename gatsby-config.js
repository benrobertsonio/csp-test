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
            headers: {
                "/*": [
                    "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
                ],
                "/my-page": [
                    // matching headers (by type) are replaced by Gatsby Cloud with more specific routes
                    "Basic-Auth: differentuser:differentpassword",
                ],
            },
        }
    }
    ],
}
