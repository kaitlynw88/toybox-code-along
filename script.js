// create an object.
// with categories of Safari, Ocean, or Dino.

const toys = {
    safari: [
        {
            name: "lion",
        },
        {
            name: "giraffe",
        },
        {
            name: "zebra",
        },

        {
            name: "elephant",
        }
    ],

    ocean: [
        {
            name: "whale",
        },
        {
            name: "octopus",
        },
        {
            name: "star fish",
        },

        {
            name: "turtle",
        }
    ],

    dinos: [
        {
            name: "T-rex",
        },
        {
            name: "triceratops",
        },
        {
            name: "raptor",
        },

        {
            name: "stegosaurus",
        }
    ]
}




// store the searchCart elements in a variable
const searchForm = document.querySelector(".searchForm")
const searchBarIcon = document.querySelector(".menuIcon")
const ulElement = document.querySelector(".toyUl")
const toyListContainer = document.querySelector(".javaArea")


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
        // console.log(userInput)

        // find the array corresponding to toy
        const toyArray = toys[userInput]
        // console.log(toyArray)

        // evaluate if user picked a category
        if(toys[userInput]){
            // print toy options and print out on page
            for (let i = 0; i < toyArray.length; i++) {
                const toyList = toyArray[i]
                const toyName =toyList.name
                console.log(toyName)

                // make a li element
                const listItem = document.createElement("li")

                // create a p element for our toyname
                const toyP = document.createElement("p")
                console.log(toyP)

                // assign the toyName to each p
                toyP.textContent = toyName

                // add p element to List item
                listItem.append(toyP)

                // add listItem to ulElement
                ulElement.append(listItem)

            }
        }else{
            alert("please pick safari, ocean or dinos. **Case sensitive**")
        }

       
        // create a header h3 element
        const headerItem = document.createElement("h4")
        // assign a value to the headerItem

        headerItem.textContent = "here are the toys you wanted"

        // append the h3 element to the search form
        toyListContainer.append(headerItem)
    })
    

})





// clear form


