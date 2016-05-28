import {getStatus} from '../../lib/github';

exports.handle = function(e, ctx, cb) {
    getStatus().then((result) => cb(null, result)).catch((err) => cb(err))
}
