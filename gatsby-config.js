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
                    `Basic-Auth: ben:ben`,
                    `Content-Security-Policy: script-src 'self' https://bmidxbnorwayprod.gatsbyjs.io wss://*.hotjar.com https://*.hs-scripts.com https://*.hs-banner.com https://*.hs-analytics.net https://*.hscollectedforms.net https://*.hotjar.com https://www.google-analytics.com https://www.googletagmanager.com https://cdn.cookielaw.org https://www.googleoptimize.com https://cdnjs.cloudflare.com https://maps.googleapis.com https://*.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.recaptcha.net/recaptcha https://*.googleapis.com https://snap.licdn.com https://connect.facebook.net https://www.youtube.com 'unsafe-inline' 'unsafe-eval' style-src 'self' https://bmidxbnorwayprod.gatsbyjs.io 'unsafe-inline' https://*.googleapis.com img-src 'self' https://bmidxbnorwayprod.gatsbyjs.io https://*.hsforms.com https://*.hubspot.com https://*.hotjar.com blob: data: https://*.hsforms.com https://*.hubspot.com https://images.ctfassets.net https://bmipimngprodtfe.azureedge.net https://www.google-analytics.com https://www.googletagmanager.com https://*.googleapis.com https://*.gstatic.com https://*.linkedin.com https://*.facebook.com https://www.google.com https://www.google.co.uk https://i.ytimg.com media-src 'self' https://bmidxbnorwayprod.gatsbyjs.io https://assets.ctfassets.net https://downloads.ctfassets.net https://videos.assets.ctfassets.net https://bmipimngprodtfe.azureedge.net https://*.googleapis.com https://*.gstatic.com connect-src 'self' blob: https://bmidxbnorwayprod.gatsbyjs.io https://*.hubspot.com https://snap.licdn.com https://connect.facebook.net wss://*.hotjar.com https://*.hotjar.com https://*.hotjar.io https://stats.g.doubleclick.net/ https://70f5cb29c2da49c79f1197aef4897fdc.europe-west3.gcp.cloud.es.io:* https://www.google-analytics.com https://www.googletagmanager.com https://cdn.cookielaw.org https://europe-west3-bmi-p-dxb-compute.cloudfunctions.net https://storage.googleapis.com https://cdnjs.cloudflare.com https://*.onetrust.com https://maps.googleapis.com https://bmipimngprodtfe.azureedge.net https://*.googleapis.com https://*.gstatic.com frame-src https://bmidxbnorwayprod.gatsbyjs.io https://*.google.com/recaptcha/ https://www.recaptcha.net/recaptcha/ https://*.hotjar.com/ https://www.youtube.com https://www.facebook.com`
                ]
            }
        }
    }
    ],
}
