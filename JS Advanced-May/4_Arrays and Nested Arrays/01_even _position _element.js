/**
 * 
 * @param {Array} data 
 */
function evenPositionElements(data) {
    // filterdata = data.filter((element, index) => {
    //     if(index % 2 == 0 ){
    //         return element
    //     }
    // })
    // console.log(filterdata);

    const filterdData = data
        .filter((element, index) => {
            if(index % 2 == 0){
                return element
            }
        }).join(" ")
    
    console.log(filterdData);
}

evenPositionElements(['20', '30', '40', '50', '60'])