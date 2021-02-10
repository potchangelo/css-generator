/**
 * Create select option objects, by split and uppercase
 * @param {string[]} valueArray List of value strings
 * @param {string} separator Separator string
 * @returns {{ key: string, value: string, title: string }[]} Option objects
 */
function optionArrayUpper(valueArray, separator=' ') {
    return valueArray.map(value => {
        const title = value.split(separator).map(s => (
            s.charAt(0).toUpperCase() + s.slice(1)
        )).join(' ');
        return { key: `${value}`, value, title }
    });
}

export { optionArrayUpper };