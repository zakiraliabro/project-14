let itemsList = [];

        function additem(){
            let li = "";

            for(let i=0; i < itemsList.length; i++){
                li += `<li>${itemsList[i]}<button  onclick="deleteItem(${i})">Delete</button></li>`
            }
            document.getElementById("Data-Collection").innerHTML = li;
        }

        function addItems(){
            let item = document.getElementById("item").value;
            itemsList.push(item)
            additem()
        }

        function deleteItem(id){
            itemsList.splice(id, 1);

            additem()
        }