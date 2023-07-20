function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightInCm = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(heightInCm) || heightInCm === 0) {
    alert("Masukkan berat badan dan tinggi badan yang valid.");
    return;
  }

  const heightInMeter = heightInCm / 100;
  const bmi = weight / Math.pow(heightInMeter, 2);
  const roundedBMI = Math.round(bmi * 10) / 10;

  const bmiResultElement = document.getElementById("bmi");
  const categoryElement = document.getElementById("category");

  bmiResultElement.textContent = `BMI Anda: ${roundedBMI}`;

  let category = "";
  if (bmi < 18.5) {
    category = "Berat badan kurang. Jika BMI Anda kurang dari 18,5, Anda mungkin tidak memiliki cukup lemak tubuh. Jika Anda ingin menambah berat badan, Anda perlu makan lebih banyak kalori dan melakukan latihan kekuatan.";
  } else if (bmi < 24.9) {
    category = "Berat badan normal. Jika BMI Anda berada dalam kisaran normal, Anda tidak perlu menurunkan berat badan. Namun, Anda tetap dapat melakukan perubahan gaya hidup yang sehat untuk meningkatkan kesehatan Anda secara keseluruhan. Ini termasuk makan makanan yang sehat, berolahraga secara teratur, dan mengelola stres.";
  } else if (bmi < 29.9) {
    category = "Berat badan berlebih. Jika BMI Anda berada dalam kisaran kelebihan berat badan, Anda mungkin ingin menurunkan berat badan untuk mengurangi risiko penyakit kronis. Ada banyak cara untuk menurunkan berat badan, tetapi cara terbaik adalah dengan membuat perubahan gaya hidup yang berkelanjutan. Ini termasuk makan makanan yang sehat, berolahraga secara teratur, dan mengelola stres.";
  } else {
    category = "Obesitas. Jika BMI Anda berada dalam kisaran obesitas, Anda sangat perlu menurunkan berat badan untuk mengurangi risiko penyakit kronis. Ada banyak cara untuk menurunkan berat badan, tetapi penting untuk berkonsultasi dengan dokter Anda sebelum memulai program penurunan berat badan. Dokter Anda dapat membantu Anda mengembangkan rencana penurunan berat badan yang aman dan efektif.";
  }

  categoryElement.textContent = `Kategori: ${category}`;
}

function resetButton() {
  const inputElements = document.querySelectorAll('input[type="number"], input[type="radio"]');

  inputElements.forEach((input) => {
    if (input.type === "number") {
      input.value = "";
    } else if (input.type === "radio") {
      input.checked = false;
    }
  });

  document.getElementById("bmi").textContent = "";
  document.getElementById("category").textContent = "";
}
