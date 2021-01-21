export function sum(...args) {
    return args.reduce((pv, cv) => pv + cv)
}