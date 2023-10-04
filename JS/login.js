'use strict'

const loginContainer = document.getElementById('login-container')

const moverOverlay=() => loginContainer.classList.add('move')

document.getElementById('open-register').addEventListener('click', moverOverlay)