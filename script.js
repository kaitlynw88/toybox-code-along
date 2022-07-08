// store the searchCart elements in a variable
const searchForm = document.querySelector(".searchForm")
const searchBarIcon = document.querySelector(".menuIcon")

// add an event listener for when the user clicks the searchCart Button
searchBarIcon.addEventListener("click", function(e){
    // prevent click default
    e.preventDefault(e)

    // create an input and store it in a variable
    const searchDivInput = '<input type = "text" class="searchCartInput" placeholder="Safari,Ocean or Dinos" required></input>'

    // append searchCartInput to the searchForm
    searchForm.innerHTML = searchDivInput

    //add an event listener for when user submits form
    searchForm.addEventListener("submit", function(e){
        // prevent default on submit
        e.preventDefault()

        // take users input and put it in a variable
        const userInput = searchForm.firstElementChild.value
        console.log(userInput)


        // if users input equals id link to part of page.
        if (userInput === "Safari" || userInput === "safari" || userInput === "SAFARI"){
            alert("Check out our Safari themed toys here")
        }else if(userInput === "Ocean" || userInput === "ocean" || userInput === "OCEAN"){
            alert("Check out our Ocean themed toys here")
        } else if (userInput === "Dinos" || userInput === "dinos" || userInput === "DINOS"){
            alert("Check out our Dinos themed toys here")
        }else{
            alert("We're sorry we don't seem to have that in stock, check out our sale section!")
        }
    })
    

})





// clear form


