"use strict";
const parseApiUser = (payload) => {
    payload.data.name;
};
const filterSuccessfulResponses = (payload) => {
    return payload.filter((p) => p.statusCode === 200);
};
const payload = [];
const results = filterSuccessfulResponses(payload);
const first = results[0].data;
//# sourceMappingURL=index.js.map