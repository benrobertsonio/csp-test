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
                    `Content-Security-Policy: ${process.env.CONTENT_SECURITY_POLICY}`
                ]
            }
        }
    }
    ],
}
