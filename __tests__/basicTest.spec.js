// Not working, just an illustration

describe('test jest', () => {
    test('jest should run', () => {
        expect("test").toEqual("test2")
    })

    test('promise test', () =>{
        return fetchData().then(data => {
            expect(data).toBe('test');
        })
    })

    test('await test', async () => {
        const data = await fetchData();
        expect(data).toBe('test')
    })
})