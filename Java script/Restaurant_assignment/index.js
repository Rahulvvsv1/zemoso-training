console.log("hello");
let menu_page = document.getElementById("menu");
let table_page = document.getElementById("tables");
let table_detail = document.getElementById("table_detail");
let table = document.getElementById("tablee");

let table_input = document.getElementById("table_search");
let menu_input = document.getElementById("menu_search");


let table_items = document.getElementsByClassName("table_item");
let menu_items = document.getElementsByClassName("menu_item");

let table_number = document.getElementById("table_detail_number");

let table1 = {items:{},total:0};
let table2 = {items:{},total:0};
let table3 = {items:{},total:0};

let table_array = [table1,table2,table3];



menu = {
        "Fried Rice":100,
        "Egg Fried Rice":200,
        "Chicken":300,
        "Maggi":50,
    }
menu2={
            "lunch":["Fried Rice","Egg Fried Rice","Chicken"],
            "breakfast":["Maggi"],

}




const createTableElements =  () => {
    // removeAllChildNodes(table_page);
    let count =1;
    for(let i of table_array){

        console.log(i,menu[i])
        let div = document.createElement("div");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let h1 = document.createElement("h1");


        h1.innerText = "Table " + count;
        p.innerText = i["total"];
        span.innerText = "| Total items : " + Object.keys(i["items"]).length;


        div.setAttribute("class","table_item");
        div.setAttribute("id",count);
        
        const dragover = (e) => {
            e.preventDefault();
            console.log("dragover");
        }

        const dragdrop = (e) => {
            e.preventDefault();
            console.log("dragdrp");
            
            console.log(e.currentTarget.id)
            let id = e.currentTarget.id;
            let data = e.dataTransfer.getData("text");
            let total_amount =0;
            console.log("data",data);

            for(let i in menu){
                if (i == data){
                    if(table_array[id-1]["items"][data] ==undefined){
                        table_array[id-1]["items"][data]  = 1;
                        
                    }
                    else{
                        table_array[id-1]["items"][data]  += 1;
                    }
                    for(let j in table_array[id-1]["items"]){
                        //console.log(j,table_array[id-1]["items"][j])
                        total_amount += menu[j]*table_array[id-1]["items"][j]
                    }
                    console.log("tpata;",total_amount);
                    table_array[id-1]["total"] = total_amount;
                    
                    updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
                }
            }
            console.log(table_array);


            
        } 

        div.addEventListener("dragover",dragover);
        div.addEventListener("drop",dragdrop,false);
        div.addEventListener("click",create_table_row)




        div.appendChild(h1);
        div.appendChild(p);
        p.appendChild(span);
        table_page.appendChild(div);
        console.log(div.innerHTML)
        count++;
    }
}


const createMenuElements = () => {

    for(let i in menu){

        console.log(i,menu[i])
        let div = document.createElement("div");
        let hele = document.createElement("h1");
        let pele = document.createElement("p");
        

        hele.innerText = i;
        pele.innerText = "Rs. "+menu[i];
        

        div.setAttribute("class","menu_item");
        div.setAttribute("draggable","true")

        
        const drag = (ev) =>{
            ev.dataTransfer.setData("text", ev.target.childNodes[0].innerHTML);
        }


        div.addEventListener("dragstart",drag);
        div.addEventListener("dragend",() =>console.log("Ended"));
        

        div.appendChild(hele);
        div.appendChild(pele);
        menu_page.appendChild(div);
        console.log(div.innerHTML)
    }

}


const updateElements = (id,count,total) =>{
    let ele = document.getElementById(id)
    let p = ele.childNodes[1]
    let span = p.childNodes[1]
    p.innerHTML = count;
    span.innerHTML = `| Total price : ${total}`;
    p.appendChild(span);
    console.log(ele,count,total);

}


const create_table_row = (e) => {
    table_detail.style.display = "flex";


    let id = e.currentTarget.id;
    table_number.innerHTML = id;
    table_curr = table_array[id-1];
    removeAllChildNodes(table);
    table.setAttribute("id",id);
        if(Object.keys(table_curr["items"]).length != 0){
            let items = table_curr["items"];
            let count =1;


            let row1 = document.createElement("tr");
                
            let th1 = document.createElement("th")
            let th2 = document.createElement("th")
            let th3 = document.createElement("th")
            let th4 = document.createElement("th")
            let th5 = document.createElement("th")

            th1.innerHTML = "S.no"
            th2.innerHTML = "Item"
            th3.innerHTML = "Price"
            th4.innerHTML = "Count"
            th5.innerHTML = "del"
            

            row1.appendChild(th1);
            row1.appendChild(th2);
            row1.appendChild(th3);
            row1.appendChild(th4);
            row1.appendChild(th5);


            table.appendChild(row1)

            
            for(let j in items){
                let name = j
                let amount = menu[j]*items[j];
                let quantity = items[j];
                
                let row = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");


                let span = document.createElement("span");
                let span1 = document.createElement("span");
                let number = document.createElement("input");
                let del = document.createElement("span");

                
                del.setAttribute("class","buttonss")
                number.setAttribute("type","integer");
                span.setAttribute("class","buttonss");  
                span1.setAttribute("class","buttonss");
                
                del.innerHTML = "DEL"
                span.innerHTML = "+"
                span1.innerHTML = "-"
                number.value = amount;
                
                span.addEventListener("click",increment);
                span1.addEventListener("click",decrement);
                del.addEventListener("click",deleter);
                
                td1.innerHTML = count;
                td2.innerHTML = name;
                // td3.innerHTML = amount;
                td4.innerHTML = quantity;
                
                td3.appendChild(number);
                td3.appendChild(span);
                td3.appendChild(span1);
                td5.appendChild(del);

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);              
                row.appendChild(td4);
                row.appendChild(td5);


                table.appendChild(row);


                count++;
            }
        }
    
}


function deleter(){
    let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
    let id = this.parentNode.parentNode.parentNode.id;
    let table_element = table_array[id-1];
    delete table_element["items"][food_item];
    let total_amount=0;
    for(let j in table_array[id-1]["items"]){
        //console.log(j,table_array[id-1]["items"][j])
        total_amount += menu[j]*table_array[id-1]["items"][j]
    }
    
    table_array[id-1]["total"] = total_amount;
    updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
    console.log(this.parentNode.parentNode.childNodes[0].innerHTML)
}





function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function increment (e) {
        let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
        let id = this.parentNode.parentNode.parentNode.id;
        let table_element = table_array[id-1];
        table_element["items"][food_item] +=1;
        
        let total_amount1 = table_element["items"][food_item]*menu[food_item];
        let amount = this.parentNode.parentNode.childNodes[2];
        amount.childNodes[0].value = total_amount1;
        
        let count  = this.parentNode.parentNode.childNodes[3];
        count.innerHTML = table_element["items"][food_item];    
        // amount_td.innerHTML = total_amount.toString(   );
        // console.log(amount_td,total_amount)
        let total_amount=0;
        for(let j in table_array[id-1]["items"]){
            //console.log(j,table_array[id-1]["items"][j])
            total_amount += menu[j]*table_array[id-1]["items"][j]
        }
        
        table_array[id-1]["total"] = total_amount;
        updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
        

}
function decrement (e) {
    let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
    let id = this.parentNode.parentNode.parentNode.id;
    let table_element = table_array[id-1];
    table_element["items"][food_item] -=1;
    
    let total_amount1 = table_element["items"][food_item]*menu[food_item];
    let amount = this.parentNode.parentNode.childNodes[2];
    amount.childNodes[0].value = total_amount1;
    
    let count  = this.parentNode.parentNode.childNodes[3];
    count.innerHTML = table_element["items"][food_item];    
    // amount_td.innerHTML = total_amount.toString(   );
    // console.log(amount_td,total_amount)
    let total_amount=0;
    for(let j in table_array[id-1]["items"]){
        //console.log(j,table_array[id-1]["items"][j])
        total_amount += menu[j]*table_array[id-1]["items"][j]
    }
    
    table_array[id-1]["total"] = total_amount;
    updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
    

}
window.onclick = function(event) {
    if (event.target == table_detail) {
        console.log("working");
      table_detail.style.display = "none";
      
    }
  }

const table_search = (e) => {
    let value = e.target.value
    for(let i of table_items){
        let table_item_name = i.childNodes[0].innerHTML 
        if (!table_item_name.toLowerCase().includes(value.toLowerCase())){
            i.style.display = "none"
            console.log("workingggg")
        } 
        else{
            i.style.display="flex";
            console.log("working");
        }
    }    
    if(value == ""){
        for(let i of table_items){
            console.log(i)
            i.style.display = "flex";
        }
    }
}
table_input.addEventListener("change",table_search )

const menu_search = (e) => {
    let value = e.target.value
    for(let i of menu_items){
        // console.log(i)
        let menu_item_name = i.childNodes[0].innerHTML 
        if ( !menu_item_name.toLowerCase().includes(value.toLowerCase())){
            i.style.display = "none"
            // console.log("workingggg")
        } 
        else{
            i.style.display="flex";
            // console.log("working");
        }
    } 
    for(let j in menu2){
        if(value == j){
            console.log("i")
            for(let i of menu_items){
                let menu_item_name = i.childNodes[0].innerHTML 
                // console.log(menu2[j].includes(menu_item_name))
                if(menu2[j].includes(menu_item_name)){
                    i.style.display = "flex";
                }
                else{
                    i.style.display = 'none';
                }
            }
        }


    }   
    if(value == ""){
        for(let i of menu_items){
            i.style.display = "flex";
        }
    }
}
menu_input.addEventListener("change",menu_search )


createTableElements();
createMenuElements();