document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('.btn')
    let blockOne = document.querySelector('.block_one')
    let blockTwo = document.querySelector('.block_two')
    let isClicked = false
    function changeElementColor(element, color) {
        element.style = `background:${color}`
    }

    function changeElementVisibility(element, isVisible) {
        if (isVisible) {
            element.style = `visibility:unset`
        } else {
            element.style = `visibility:hidden`
        }
    }

    btn.onclick = function () {
        if (isClicked) {
            isClicked=false
            changeElementColor(blockOne, 'red')
            changeElementVisibility(blockTwo, true)
        } else {
            isClicked=true
            changeElementColor(blockOne, 'blue')
            changeElementVisibility(blockTwo, false)
        }
    }
})


