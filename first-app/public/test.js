console.log("this is from test.js")

const header = document.querySelector('header.site-header')
console.log(header)
header.insertAdjacentHTML('afterbegin','<div style="background: orange; text-align: center;">Hello this is coming from the public folder</div>')