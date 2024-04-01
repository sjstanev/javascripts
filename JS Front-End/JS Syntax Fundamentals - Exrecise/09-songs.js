class Song{
    constructor(type, name, time){
        this.type = type;
        this.name = name;
        this.time = time;
    }
}

function solve(input){

    let songs = []
    numberOfSongs = input.shift();
    typeList = input.pop()
    
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');

        // Create new object using Class Cat
        let song = new Song(type, name, time)
        // Create list from Song Objects
        songs.push(song);  
    }

    if (typeList == 'all'){
        songs.forEach(song => console.log(song.name));
    } else {
        // use .filler method to filter song from this type and create array
        let fillered = songs.filter(song => song.type == typeList)
        // array from object, print only object.name property key
        fillered.forEach(i => console.log(i.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])