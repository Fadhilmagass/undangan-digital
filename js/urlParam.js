const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronounce = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector(".hero h4 span");
namaContainer.innerText = `${pronounce} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;