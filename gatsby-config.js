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
                    `Content-Security-Policy: upgrade-insecure-requests; default-src data: 'unsafe-inline' 'unsafe-eval' https:; script-src data: 'unsafe-inline' 'unsafe-eval' https: blob:; style-src data: 'unsafe-inline' https:; img-src data: https: blob:; font-src data: https:; connect-src https: wss: blob:; media-src data: https: blob:; object-src https:; child-src https: data: blob:; form-action https:; report-uri https://csp.nytimes.com/report;`
                ]
            }
        }
    }
    ],
}
