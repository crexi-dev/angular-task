export const parseObjectIntoQueryParams = (object: any): string => {

    const params = Object.keys(object).map((key) => `${key}=${object[key]}`);
    return params.join('&');

};
