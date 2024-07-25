function createSortedList(){

    return {
        add: function(element){
            // /adds a new element to the collection

            if (!typeof element === 'number'){
               return;
            }
            this._list.push(element);
            this._list.sort(this._sortArr);
            this.size = this._list.length;
        },
        remove: function(index) {
            // /removes the element at position index

            if(index < 0 || index > this._list.length){
                return;
            } 
            this._list.splice(index, 1)
            this._list.sort(this._sortArr);
            this.size = this._list.length;
        },

        get: function(index){
            // returns the value of the element at position index

            if(index < 0 || index > this._list.length){
                return;
            } 
            return this._list[index]

        },

        size: 0, // number of elements stored in the colloction
        _list: [],  // empty array to keeps received numbers
        _sortArr: (a, b) => a - b, // Function to sort elements in array
    }

}

let list = createSortedList();
list.add(5);
list.add(3);
list.add(6);
list.add(4);
list.add(7);
console.log(list.get(2))
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));