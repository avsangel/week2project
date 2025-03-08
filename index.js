setInterval(function () {
  let vegasElement = document.querySelector("#vegas");
  let vegasDateElement = vegasElement.querySelector(".date");
  let vegasTimeElement = vegasElement.querySelector(".time");
  let vegasTime = moment().tz("America/Los_Angeles");

  vegasDateElement.innerHTML = vegasTime.format("MMMM D, YYYY");
  vegasTimeElement.innerHTML = `${vegasTime.format(
    `h:mm:ss`
  )} <small> ${vegasTime.format("A")} </small>`;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    `h:mm:ss`
  )} <small> ${parisTime.format("A")} </small>`;

  let brazilElement = document.querySelector("#brazil");
  let brazilDateElement = brazilElement.querySelector(".date");
  let brazilTimeElement = brazilElement.querySelector(".time");
  let brazilTime = moment().tz("America/Buenos_Aires");

  brazilDateElement.innerHTML = brazilTime.format("MMMM D, YYYY");
  brazilTimeElement.innerHTML = `${brazilTime.format(
    `h:mm:ss`
  )} <small> ${brazilTime.format("A")} </small>`;
}, 1000);
