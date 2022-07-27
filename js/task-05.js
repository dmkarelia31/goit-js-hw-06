const input = document.querySelector('#name-input')

const printInput = (Event) => {
    const output = document.querySelector('#name-output')
    if (Event.currentTarget.value.length === 0 || Event.currentTarget.value === " ") {
        output.innerHTML = 'Anonymous'
        return
    }
output.innerHTML = Event.currentTarget.value
}
input addEventListener ("input", printInput)