function getDataFromLocalStorage() {
  const showData = document.getElementById("passwordBody");

  const data = JSON.parse(localStorage.getItem("data")) || [];

  if (data.length <= 0) {
    showData.innerHTML = `
      <tr>
        <td colspan="3">No Data Found</td>
      </tr>
    `;
    return;
  }

  showData.innerHTML = "";

  data.forEach((element) => {
    const TR = document.createElement("tr");

    TR.innerHTML = `
      <td>${element.website}</td>
      <td>${element.username}</td>
      <td>${element.password}</td>
    `;

    showData.appendChild(TR);
  });
}

getDataFromLocalStorage();