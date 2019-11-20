import './app3.css'
import $ from 'jquery'


const $squere = $('#app3 .square')
$squere.on('click',() => {
    $squere.toggleClass('active')
})
