export function hashObject(obj) {
    return Object.entries(obj).reduce((prev, cur) => prev + cur[0] + cur[1], '') + Math.random();
}