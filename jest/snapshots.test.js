var itemStock = [
    { id: '1', ItemName: 'Razors', Stock: 10 },
    { id: '2', ItemName: 'Socks', Stock: 1 },
    { id: '3', ItemName: 'Towels', Stock: 100 },
    { id: '4', ItemName: 'Socks', Stock: 100 }
];

function filterItemStock(arr, key, term) {
    return arr.filter(function (obj) {
        return obj[key] === term;
    });
}

test('it returns all items with matching Id', () => {
    expect(filterItemStock(itemStock, 'id', '1')).toEqual([
        { id: '1', ItemName: 'Razors', Stock: 10 }
    ])
});

test('it returns all items with matching Item Name', () => {
    expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toEqual([
        { id: '2', ItemName: 'Socks', Stock: 1 },
        { id: '4', ItemName: 'Socks', Stock: 100 }
    ])
});

test('it returns all items with matching Id', () => {
    expect(filterItemStock(itemStock, 'id', '1')).toMatchSnapshot()
});

test('it returns all items with matching Item Name', () => {
    expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toMatchSnapshot()
});