// Requires content.js

(async () => {
  const handleButtonClick = async function () {
    const entries = Array.from(document.body.querySelectorAll("input"))
      .filter((elem) => fieldNames.includes(elem.name))
      .map((elem) => [elem.name, elem.value]);
    await chrome.storage.sync.set(Object.fromEntries(entries));
    alert("saved!")
  };
  document.getElementById("save")
    .addEventListener("click", handleButtonClick);

  // @see utils.js
  await fillOutInformation();
})();
