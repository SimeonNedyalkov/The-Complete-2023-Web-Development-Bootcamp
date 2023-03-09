let random_number = Math.floor(Math.random() * 6) + 1
let random_number_two = Math.floor(Math.random() * 6) + 1
console.log(random_number)

document.querySelector('.img1').setAttribute('src', `images/dice${random_number}.png`)
document.querySelector('.img2').setAttribute('src', `images/dice${random_number_two}.png`)

console.log(document.querySelector('title'))

if(random_number > random_number_two){
    document.querySelector('h1').innerHTML = 'Player 1 Wins !!!'
}else if(random_number < random_number_two){
    document.querySelector('h1').innerHTML = 'Player 2 Wins !!!'
}else{
    document.querySelector('h1').innerHTML = 'Its a Draw !!!'
}
