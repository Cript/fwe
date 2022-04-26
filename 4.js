export function parseQuery(url) {
    const params = {}
    for (let [name, value] of (new URL(url).searchParams.entries())) {
        params[name] = isNaN(value) ? value : parseFloat(value)
    }

    return params;

    /*
        It could be one line code, but type value should be a number:

        return Object.fromEntries(new URL(url).searchParams)
     */
}

export function parseQuery2(url) {
    const params = {}
    url = url.split('?')

    if (url.length === 1) {
        return {}
    }

    url[1].split('&').forEach((param) => {
        const [name, value] = param.split('=')
        params[name] = isNaN(value) ? value : parseFloat(value)
    })
    return params
}