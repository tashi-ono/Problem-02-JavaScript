const { TestScheduler } = require('jest');
const CountDuplicates = require('./CountDuplicates');

test("Integer 5 Duplicates", () =>{
    let dups = new CountDuplicates();
    let input = [1,2,3,4,5,1,3,2,3,6,6,3,3,2,5];

    const expected = 5;
    const actual = dups.countDups(input);
    expect(actual).toEqual(expected);
});


test("Integer 3 Duplicates", () =>{
    let dups = new CountDuplicates();
    let input = [1,1,1,2,2,3,4,4];

    const expected = 3;
    const actual = dups.countDups(input);
    expect(actual).toEqual(expected);
});


test("String 2 Duplicates", () =>{
    let dups = new CountDuplicates();
    let input = ["Rza","MethodMan", "Ghostface", "U-God", "ODB","MethodMan","GZA", "Ghostface"];

    const expected = 2;
    const actual = dups.countDups(input);
    expect(actual).toEqual(expected);
});