const Cookies = require('cookies')
const moment = require('moment')
const url = require('url')
const queryString = require('querystring')

function parseUri(ctx) {
    const query = url.parse(ctx.req.url).query;
    const parsedQuery = queryString.parse(query);
    return parsedQuery;
}

function setReferralCookie(ctx) {

    const parsedUri = parseUri(ctx);

    if (!parsedUri.ref) {
        return;
    }

    const referral_id = parsedUri.ref;

    const expires = moment().add(2, 'days').toDate()
    const cookies = new Cookies(ctx.req, ctx.res);

    cookies.set('REFERRAL', referral_id, {
        domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
        expires: expires,
        overwrite: true,
        httpOnly: false
    });

    // httpOnly must be false in order to be accesible by JavaScript
}

export default {
    parseUri,
    setReferralCookie
}