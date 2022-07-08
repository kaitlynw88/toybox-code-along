// create an object.
// with categories of Safari, Ocean, or Dino.

const toys = {
    safari: [
        {
            name: "lion",
            price: "10:00"
        },
        {
            name: "giraffe",
            price: "10:00"
        },
        {
            name: "zebra",
            price: "10:00"
        },

        {
            name: "elephant",
            price: "10:00"
        }
    ],

    ocean: [
        {
            name: "whale",
            price: "10:00"
        },
        {
            name: "octopus",
            price: "10:00"
        },
        {
            name: "star fish",
            price: "10:00"
        },

        {
            name: "turtle",
            price: "10:00"
        }
    ],

    dinos: [
        {
            name: "T-rex",
            price: "10:00"
        },
        {
            name: "triceratops",
            price: "10:00"
        },
        {
            name: "raptor",
            price: "10:00"
        },

        {
            name: "stegosaurus",
            price: "10:00"
        }
    ]
}




// store the searchCart elements in a variable
const searchForm = document.querySelector(".searchForm")
const searchBarIcon = document.querySelector(".menuIcon")
const printToyList = document.querySelector(".javaArea")

// add an event listener for when the user clicks the searchCart Button
searchBarIcon.addEventListener("click", function(e){
    // prevent click default
    e.preventDefault(e)

    // create an input and store it in a variable
    const searchDivInput = '<input type = "text" class="searchCartInput" placeholder="Safari, Ocean or Dinos" required></input>'

    // append searchCartInput to the searchForm
    searchForm.innerHTML = searchDivInput

    //add an event listener for when user submits form
    searchForm.addEventListener("submit", function(e){
        // prevent default on submit
        e.preventDefault()

        // take users input and put it in a variable
        const userInput = searchForm.firstElementChild.value
        console.log(userInput)

        // find the array corresponding to toy
        const toyArray = toys[userInput]
        console.log(toyArray)

        // evaluate if user picked a category
        if(toys[userInput]){
            // print toy options and print out
            for (let i = 0; i < toyArray.length; i++) {
                const toyName = toyArray[i]
                console.log(toyName.name)

                // make a P element for toy name
            }
        }else{
            alert("please pick safari, ocean or dinos. **Case sensitive**")
        }

        

        // if users input equals toys category, print category names in alert
    })
    

})





// clear form


