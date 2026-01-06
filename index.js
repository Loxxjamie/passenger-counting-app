// document.getElementById("count-el").innerText=5
// let count = 0

// console.log(count)


// initialize the count as 0
// listen for the clicks
// increment the count by one every time the button is clicked
// change the count el in html
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment(){
    count +=1
    countEl.innerText=count
    // console.log(count)
}
function save(){
        // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    let ui=count+' - '

    saveEl.textContent += ui
    countEl.textContent = 0
    count = 0
}



