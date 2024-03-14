const list = document.querySelector("#list-items")
const input = document.querySelector("input")
const submit = document.querySelector("#submit")
const clearAll = document.querySelector("#clear-all")
const container = document.querySelector(".container")
clearAll.style.display = "none"

submit.addEventListener("click", () => {
    
    let newItem = input.value
    input.value = ""
    if (newItem != null && newItem != ""){

    let itemList = document.createElement("article")
    let itemText = document.createElement("div")
    var itemEdit = document.createElement("img")
    itemEdit.setAttribute("src", "edit.png")
    itemEdit.setAttribute("id", "itemEdit")
    var itemDel = document.createElement("img")
    itemDel.setAttribute("src", "delete.png")
    itemDel.setAttribute("id", "itemDel")
    itemList.textContent = newItem
    itemText.appendChild(itemEdit)
    itemList.appendChild(itemText)
    itemText.appendChild(itemDel)
    itemList.appendChild(itemText)

    list.appendChild(itemList)
    itemList.style.marginTop = "10px"

    itemDel.addEventListener("click", () => {
        list.removeChild(itemList)
    })
    itemEdit.addEventListener("click", () => {
        newItem = ""
        list.removeChild(itemList)
        submit.textContent = "Edit"
    })
    submit.textContent = "submit"
    clearAll.style.display = "block"
    container.style.paddingBottom = "30px"
}
 
})

clearAll.addEventListener("click", function(e){
    console.log("jsadhj")
    if (confirm("Are you sure you want to delete all items?")) {

        
            list.innerHTML = ""
            //list.style.display = "none"
            clearAll.style.display = "none"
            container.style.paddingBottom = "80px"
        
    }
})

