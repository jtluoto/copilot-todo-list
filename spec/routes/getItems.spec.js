const db = require('../../src/persistence');
const getItems = require('../../src/routes/getItems');
const ITEMS = [{ id: 12345, category: 'Work' }];

jest.mock('../../src/persistence', () => ({
    getItems: jest.fn(),
}));

test('it gets items correctly', async () => {
    const req = {};
    const res = { send: jest.fn() };
    db.getItems.mockReturnValue(Promise.resolve(ITEMS));

    await getItems(req, res);

    expect(db.getItems.mock.calls.length).toBe(1);
    expect(res.send.mock.calls[0].length).toBe(1);
    expect(res.send.mock.calls[0][0]).toEqual(ITEMS);
    expect(ITEMS[0].category).toBe('Work');
});
