/**
 * Create select option objects, by split and uppercase
 * @param {string[]} valueArray List of value strings
 * @param {string} separator Separator string
 * @returns {{ key: string, value: string, label: string }[]} Option objects
 */
function optionArrayUpper(valueArray, separator=' ') {
    return valueArray.map(value => {
        const label = value.split(separator).map(s => (
            s.charAt(0).toUpperCase() + s.slice(1)
        )).join(' ');
        return { key: `${value}`, value, label }
    });
}

export { optionArrayUpper };