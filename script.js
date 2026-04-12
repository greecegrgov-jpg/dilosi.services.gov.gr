// =====================
// DATABASE (Applications)
// =====================
const applications = {
  "GOV001": {
    name: "Muhammad Abdullah",
    status: "Approved",
    date: "12 April 2026",
    verificationId: "VRF-2026-99821"
  },

  "GOV002": {
    name: "Ali Khan",
    status: "Pending",
    date: "10 April 2026",
    verificationId: "VRF-2026-44512"
  }
};

// =====================
// CHECK STATUS FUNCTION
// =====================
function checkStatus() {
  const idInput = document.getElementById("appId");
  const result = document.getElementById("result");

  if (!idInput) {
    alert("Input box not found");
    return;
  }

  const id = idInput.value.trim().toUpperCase();

  if (!id) {
    alert("Enter Application ID");
    return;
  }

  if (applications[id]) {
    const user = applications[id];

    result.innerHTML = `
      <div class="card">
        <h3>Application Details</h3>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Status:</strong> ${user.status}</p>
        <p><strong>Date:</strong> ${user.date}</p>
        <p><strong>Verification ID:</strong> ${user.verificationId}</p>
      </div>
    `;
  } else {
    result.innerHTML = `<p style="color:red;">Invalid Application ID</p>`;
  }
}

// =====================
// VERIFICATION LOADER
// =====================
function startVerification() {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.style.display = "block";
  loader.innerHTML = "⏳ Loading verification...";

  setTimeout(() => {
    loader.innerHTML = "✅ Verification Completed Successfully";
  }, 3000);
}

// =====================
// SEARCH FUNCTION (MAIN)
// =====================
function goSearch() {
  const input = document.getElementById("searchInput");

  if (!input) {
    alert("Search input not found");
    return;
  }

  const id = input.value.trim().toUpperCase();

  if (!id) {
    alert("Enter ID first");
    return;
  }

  // Redirect to verification page
  window.location.href = "view.html?id=" + id;
}
