const testConcatStrings = ({ strings, separator, expect }) => {
    let i = 0
    let result = concatStrings(strings[i++], separator)

    while (typeof result === `function`) result = result(strings[i++])

    if (typeof expect !== `string`) return console.log(result)
    
    return result === expect
        ? console.log(result + ` === ` + expect)
        : console.warn(result + ` !== ` + expect)
}

testConcatStrings({
    strings: [`first`, `second`, `third`, undefined],
    separator: undefined,
    expect: `firstsecondthird`,
})
testConcatStrings({
    strings: [`first`, `second`, undefined, `third`],
    separator: null,
    expect: `firstsecond`,
})
testConcatStrings({
    strings: [`first`, `second`, `third`, undefined],
    separator: `123`,
    expect: `first123second123third`,
})
testConcatStrings({
    strings: [`some-value`, ``, ``, null],
    separator: undefined,
    expect: `some-value`,
})
testConcatStrings({
    strings: [`some-value`, 2],
    separator: undefined,
    expect: `some-value`,
})
testConcatStrings({
    strings: [`some-value`, `333`, 123n, `end`],
    separator: undefined,
    expect: `some-value333`,
})
