function storeCatalogue(catalog){

    function sortArray(arr){
        /*
          Use this function when you have array containing objects,
          but the keys are different for every one of them!!!
          example:
          arr = [
            { 'Asspricot ': ' 20.4' },
            { 'Apple ': ' 1.25' },
            { 'Anti-Bug Spray ': ' 15' },
            { 'Abug Spray ': ' 135' }
              ]
        */
      
        // a and b are objects
        arr.sort((a, b) => {
      
          // this return the array containing keys
          let keyB = Object.keys(b)[0];
          let keyA = Object.keys(a)[0];
      
          // compare by the object values
          // return Number(a[keyA]) - Number(b[keyB])
          
          // compare by the object keys
          return keyA.localeCompare(keyB);
      
        });
        // return sorted Array
        return arr
      }
      

    const storeCatalog = {}

    for (let i = 0; i < catalog.length; i++){
        [key, value] = catalog[i].split(':');

        let firstLeter = key.charAt(0);

        // is first leter already exist as property name in Object
        if (!storeCatalog.hasOwnProperty(firstLeter)){

            // create property name with firstLeter and assign value to it
            // console.log(storeCatalog);
            storeCatalog[firstLeter] = [{[key]:value}];
            continue;
        }
        storeCatalog[firstLeter].push({[key]:value})

        
    }
    /*this will return matrix
    
    [   
        [ 'A', [ [Object], [Object], [Object] ] ],
        [ 'B', [ [Object] ] ],
        [ 'D', [ [Object] ] ],
        [ 'F', [ [Object] ] ],
        [ 'T', [ [Object], [Object] ] ]
    ]
    */

    const sortedArr = Object.entries(storeCatalog).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));

    for ( [ch, objects]  of sortedArr){

        console.log(ch);

        for (let obj of sortArray(objects)){
            
            key = Object.keys(obj);
            console.log(`  ${key.toString().trim()}: ${obj[key].toString().trim()}`);
        }


    }

}

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)