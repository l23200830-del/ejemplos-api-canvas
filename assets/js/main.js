function resizeCanvas(canvas, container) {
    const rect = container.getBoundingClientRect();
    canvas.width = Math.floor(rect.width);
    canvas.height = Math.floor(rect.height);
  }
  
  function draw() {
    const canvas = document.getElementById("canvas");
    const container = canvas.parentElement;
  
    if (!canvas.getContext) return;
  
    resizeCanvas(canvas, container);
  
    const ctx = canvas.getContext("2d");
  
    // Limpia todo
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // =============================
    // RECTÁNGULO RELLENO
    // =============================
    ctx.fillStyle = "#2dd4bf";
    ctx.fillRect(25, 25, 100, 100);
  
    ctx.clearRect(45, 45, 60, 60);
  
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 3;
    ctx.strokeRect(50, 50, 50, 50);
  
    // =============================
    // TRIÁNGULO
    // =============================
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(250, 150);
    ctx.lineTo(250, 50);
    ctx.closePath();
    ctx.fillStyle = "#f97316";
    ctx.fill();
  
    // =============================
    // CARITA CON arc()
    // =============================
    ctx.beginPath();
  
    // Círculo externo
    ctx.arc(400, 100, 50, 0, Math.PI * 2, true);
  
    // Boca
    ctx.moveTo(435, 100);
    ctx.arc(400, 100, 35, 0, Math.PI, false);
  
    // Ojo izquierdo
    ctx.moveTo(390, 90);
    ctx.arc(385, 90, 5, 0, Math.PI * 2, true);
  
    // Ojo derecho
    ctx.moveTo(420, 90);
    ctx.arc(415, 90, 5, 0, Math.PI * 2, true);
  
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2;
    ctx.stroke();
 
     // Triángulo relleno
     ctx.beginPath();
     ctx.moveTo(525, 25);
     ctx.lineTo(605, 25);
     ctx.lineTo(525, 105);
     ctx.fill();
 
     // Triángulo contorneado
     ctx.beginPath();
     ctx.moveTo(625, 125);
     ctx.lineTo(625, 45);
     ctx.lineTo(545, 125);
     ctx.closePath();
     ctx.stroke();
 // =============================
  // MATRIZ DE ARCOS
  // =============================
  ctx.strokeStyle = "#0f172a";
  ctx.fillStyle = "#38bdf8";
  ctx.lineWidth = 2;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();

      const x = 80 + j * 60;  // desplazado para no chocar
      const y = 220 + i * 60;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        counterclockwise
      );

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }

  // =============================
// FIGURA CON CURVAS CUADRÁTICAS
// =============================
ctx.beginPath();

// Desplazamos la figura para que no choque con otras
const offsetX = 80;
const offsetY = 320;

ctx.moveTo(offsetX + 75, offsetY + 25);

ctx.quadraticCurveTo(
  offsetX + 25, offsetY + 25,
  offsetX + 25, offsetY + 62.5
);

ctx.quadraticCurveTo(
  offsetX + 25, offsetY + 100,
  offsetX + 50, offsetY + 100
);

ctx.quadraticCurveTo(
  offsetX + 50, offsetY + 120,
  offsetX + 30, offsetY + 125
);

ctx.quadraticCurveTo(
  offsetX + 60, offsetY + 120,
  offsetX + 65, offsetY + 100
);

ctx.quadraticCurveTo(
  offsetX + 125, offsetY + 100,
  offsetX + 125, offsetY + 62.5
);

ctx.quadraticCurveTo(
  offsetX + 125, offsetY + 25,
  offsetX + 75, offsetY + 25
);

ctx.strokeStyle = "#7c3aed";
ctx.lineWidth = 2;
ctx.stroke();

// =============================
// FIGURA CON CURVAS CÚBICAS (Bezier)
// =============================
ctx.beginPath();

ctx.moveTo(500, 200);

ctx.bezierCurveTo(500, 197, 495, 185, 475, 185);
ctx.bezierCurveTo(445, 185, 445, 222.5, 445, 222.5);
ctx.bezierCurveTo(445, 240, 465, 262, 500, 280);
ctx.bezierCurveTo(535, 262, 555, 240, 555, 222.5);
ctx.bezierCurveTo(555, 222.5, 555, 185, 525, 185);
ctx.bezierCurveTo(510, 185, 500, 197, 500, 200);

ctx.fillStyle = "#ef4444";
ctx.strokeStyle = "#7f1d1d";
ctx.lineWidth = 2;

ctx.fill();
ctx.stroke();

// =============================
// FIGURA CON RECTÁNGULOS REDONDEADOS
// =============================
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";

roundedRect(ctx, 12, 12, 150, 150, 15);
roundedRect(ctx, 19, 19, 150, 150, 9);
roundedRect(ctx, 53, 53, 49, 33, 10);
roundedRect(ctx, 53, 119, 49, 16, 6);
roundedRect(ctx, 135, 53, 49, 33, 10);
roundedRect(ctx, 135, 119, 25, 49, 10);

ctx.beginPath();
ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
ctx.lineTo(31, 37);
ctx.fill();

for (let i = 0; i < 8; i++) {
  ctx.fillRect(51 + i * 16, 35, 4, 4);
}

for (let i = 0; i < 6; i++) {
  ctx.fillRect(115, 51 + i * 16, 4, 4);
}

for (let i = 0; i < 8; i++) {
  ctx.fillRect(51 + i * 16, 99, 4, 4);
}

ctx.beginPath();
ctx.moveTo(83, 116);
ctx.lineTo(83, 102);
ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
ctx.lineTo(111, 116);
ctx.lineTo(106.333, 111.333);
ctx.lineTo(101.666, 116);
ctx.lineTo(97, 111.333);
ctx.lineTo(92.333, 116);
ctx.lineTo(87.666, 111.333);
ctx.lineTo(83, 116);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(91, 96);
ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);

ctx.moveTo(103, 96);
ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
ctx.fill();

  }

  // =============================
// FUNCIÓN AUXILIAR: RECTÁNGULO REDONDEADO
// =============================
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
  
  function initUI() {
    document.getElementById("year").textContent =
      new Date().getFullYear();
  
    document
      .getElementById("btnRedraw")
      .addEventListener("click", draw);
  
    window.addEventListener("resize", draw);
  
    draw();
  }
  
  initUI();
  