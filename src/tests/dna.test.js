const { string } = require("yargs");
const testDna = require("../dna");

describe('isValidDNA'), () => {
    it('Regresa el string correcto', () => {
        const isValidDNA = isValidDNA('string');
        expect(isValidDNA).toEqual(string)

    });
    

};