// Setup
let recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop === "tracks") {
        if (!records[id].hasOwnProperty([prop]) && value) {
            records[id][prop] = [value];
        } else if (!value) delete records[id][prop];
        else records[id][prop].push(value) ;
    } else {
        if (!value) delete records[id][prop];
        else records[id][prop] = value;
    }
    return records;
}

console.debug(updateRecords(recordCollection, 2468, 'tracks', 'o'));