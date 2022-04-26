export function rmSource(source, rmKey) {
    for (let i = 0; i < rmKey.length; i++) {
        source.splice(rmKey[i] - i, 1);
    }
}