function openTool(tool) {
  const area = document.getElementById("toolArea");

  if (tool === "wordCounter") {
    area.innerHTML = `
      <h2>📝 Word Counter</h2>
      <textarea id="text" rows="6" cols="40" placeholder="Type your text here..."></textarea><br>
      <button onclick="countWords()">Count Words</button>
      <p id="result"></p>
    `;
  }

  if (tool === "qrGenerator") {
    area.innerHTML = `
      <h2>🔲 QR Code Generator</h2>
      <input id="qrText" placeholder="Enter text here">
      <button onclick="generateQR()">Generate</button><br>
      <img id="qrImage" style="margin-top:15px;">
    `;
  }
}

function countWords() {
  const text = document.getElementById("text").value.trim();
  const count = text ? text.split(/\s+/).length : 0;
  document.getElementById("result").innerText = "Word Count: " + count;
}

function generateQR() {
  const text = document.getElementById("qrText").value;
  const qr = document.getElementById("qrImage");
  if (text.trim() === "") {
    alert("Enter some text!");
    return;
  }
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=150x150`;
}
