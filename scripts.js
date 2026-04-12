const applications = {
  "GOV123456": {
    name: "Muhammad Abdullah",
    status: "Approved",
    date: "12 April 2026"
  },
  "GOV999999": {
    name: "Test User",
    status: "Pending",
    date: "10 April 2026"
  }
};

function checkStatus() {
  const id = document.getElementById("appId").value;
  const result = document.getElementById("result");

  if (applications[id]) {
    result.innerHTML = `
      <p><strong>Name:</strong> ${applications[id].name}</p>
      <p><strong>Status:</strong> ${applications[id].status}</p>
      <p><strong>Date:</strong> ${applications[id].date}</p>
    `;
  } else {
    result.innerHTML = `<p style="color:red;">Invalid Application ID</p>`;
  }
}

function startVerification() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(() => {
    loader.innerHTML = "✅ Verification Complete";
  }, 3000);
}
