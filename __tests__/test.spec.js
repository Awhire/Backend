// Not working, just an illustration

const util = require('util')
const execFile = util.promisify(require('child_process').execFile);

let result;
beforeAll(async() => {
    const { stdout } = await execFile('node', ['list.js', '-w', 'file.txt'])
    result = stdout.replace(/\s/g, "").trim().toLowerCase()
})

describe('Write does not work without content flag', function(){
    it("Successfully ran test", () => {
        expect(result).toMatchSnapshot
    })
})