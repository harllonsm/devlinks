function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")) {
    img.setAttribute("src", "./assests/avatar-light.png")
  } else {
    img.setAttribute("src", "./assests/avatar-dark.png")
  }

  if(html.classList.contains("light")) {
    img.setAttribute("alt", "Minha foto de perfil usando óculos e camisa preta em um fundo azul"
    )
  } else {
    img.setAttribute("alt", "Minha foto de perfil usando óculos de sol e camisa preta em um fundo azul")
  }
}