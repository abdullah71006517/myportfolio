function generate() {
  cname.innerText = name.value;
  cid.innerText = id.value;
  ccourse.innerText = course.value;
  cteacher.innerText = teacher.value;
}

function downloadPDF() {
  const element = document.getElementById("cover");
  html2pdf().from(element).save("Assignment_Cover.pdf");
}
