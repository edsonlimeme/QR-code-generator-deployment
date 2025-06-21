function generateQR() {
  const input = document.getElementById('qr-input').value;
  const output = document.getElementById('qr-output');
  output.innerHTML = ''; // Clear previous QR code

  if (!input) {
    alert("Please enter a value");
    return;
  }

  QRCode.toCanvas(document.createElement('canvas'), input, function (error, canvas) {
    if (error) console.error(error);
    output.appendChild(canvas);
  });
}
