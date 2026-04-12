const applications = {
  "GOV123456": {
    name: "Muhammad Abdullah",
    status: "Approved",
    date: "12 April 2026",
    id: "VRF-2026-99821"
  }
};

function checkStatus() {
  const id = document.getElementById("appId").value;
  const result = document.getElementById("result");

  if (applications[id]) {
    result.innerHTML = `
      <div class="card">
        <h3>Application Details</h3>
        <p><strong>Name:</strong> ${applications[id].name}</p>
        <p><strong>Status:</strong> ${applications[id].status}</p>
        <p><strong>Date:</strong> ${applications[id].date}</p>
        <p><strong>Verification ID:</strong> ${applications[id].id}</p>
      </div>
    `;
  } else {
    result.innerHTML = `<p style="color:red;">Invalid Application ID</p>`;
  }
}

function startVerification() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(() => {
    loader.innerHTML = "✅ Verification Completed Successfully";
  }, 3000);
}
function goSearch() {
  const id = document.getElementById("searchInput").value;

  if (!id) {
    alert("Enter ID first");
    return;
  }

  window.location.href = "view.html?id=" + id;
}
alert("script loaded");
