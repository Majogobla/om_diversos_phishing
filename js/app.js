const submitButton = document.querySelector("#submit_button")

const inputs = document.querySelector("#inputs")

const oldPassword = document.querySelector('#old_password')
let validOldPassword = ''

const newPassword = document.querySelector('#new_password')
let validPassword = ''

const newPassword2 = document.querySelector('#new_password_2')
let validPassword2 = ''

const rulesDiv = document.createElement('DIV')
rulesDiv.classList.add('w-full', 'flex', 'mt-2', 'flex-col')

const rulesDiv2 = document.createElement('DIV')
rulesDiv2.classList.add('w-full', 'flex', 'flex-col')

const rulesDiv3 = document.createElement('DIV')
rulesDiv3.classList.add('w-full', 'flex', 'flex-col')

newPassword.addEventListener('change', e => {
  let rules = ``

  e.target.value.length >= 8 ? 
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00a80b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <p>8 carácteres mínimo.</p>
      </div>
    `:
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#cc0000"> <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>

        <p>8 carácteres mínimo.</p>
      </div>
    `
  
  const mayus = new RegExp("[A-Z]")
  mayus.test(e.target.value) ? 
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00a80b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <p>Al menos un carácter en mayúscula.</p>
      </div>
    `:
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#cc0000"> <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>

        <p>Al menos un carácter en mayúscula.</p>
      </div>
    `

  const numbers = new RegExp("[0-9]")
  numbers.test(e.target.value) ? 
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00a80b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <p>Al menos un número.</p>
      </div>
    `:
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#cc0000"> <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>

        <p>Al menos un número.</p>
      </div>
    `

  const special = new RegExp("[^a-zA-Z0-9\s]")
  special.test(e.target.value) ? 
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#00a80b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <p>Al menos un carácter especial.</p>
      </div>
    `:
    rules += `
      <div class="flex gap-2 items-center mb-2">
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" class="w-4 h-4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#cc0000"> <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>

        <p>Al menos un carácter especial.</p>
      </div>
    `
  
  validPassword = e.target.value

  rulesDiv.innerHTML = rules
  newPassword.after(rulesDiv)

  validation()
})

newPassword2.addEventListener('change', e => {
  let rules = ``

  if(e.target.value.length > 0 & e.target.value !== validPassword) rules += `<p class="text-red-600">Las contraseñas deben de coincidir.</p>`

  validPassword2 = e.target.value
  
  rulesDiv2.innerHTML = rules
  newPassword2.after(rulesDiv2)

  validation()
})

oldPassword.addEventListener('change', e => {
  let rules = ``

  if(e.target.value.length < 8) rules += `<p class="text-red-600">Este campo es obligatorio.</p>`

  validOldPassword = e.target.value
  
  rulesDiv3.innerHTML = rules
  oldPassword.after(rulesDiv3)

  validation()
})

submitButton.addEventListener('click', e => {
  const mayus = new RegExp("[A-Z]")
  const numbers = new RegExp("[0-9]")
  const special = new RegExp("[^a-zA-Z0-9\s]")

  if(validOldPassword.length >= 8 & validPassword.length >= 8 & mayus.test(validPassword) & numbers.test(validPassword) & special.test(validPassword) & validPassword2 === validPassword) {
    while (inputs.firstChild) {
      inputs.removeChild(inputs.lastChild);
    }


    inputs.innerHTML = `
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    `

    setTimeout(() => {
      while (inputs.firstChild) {
        inputs.removeChild(inputs.lastChild);
      }

        inputs.innerHTML = `
        <p class="text-lg text-bold mt-8">Lo sentimos hubo un error con tu solicitud, intenta más tarde</p>
      `
    }, 3000);
  }
})

function validation() {
  const mayus = new RegExp("[A-Z]")
  const numbers = new RegExp("[0-9]")
  const special = new RegExp("[^a-zA-Z0-9\s]")
  if(validOldPassword.length >= 8 & validPassword.length >= 8 & mayus.test(validPassword) & numbers.test(validPassword) & special.test(validPassword) & validPassword2 === validPassword) {
    submitButton.classList.remove('bg-blue-200', 'cursor-not-allowed')
    submitButton.classList.add('bg-[#159AFF]', 'cursor-pointer')
  }
}

