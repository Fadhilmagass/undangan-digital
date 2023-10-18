window.addEventListener("load", function () {
    const form = document.getElementById("my-form");
    const alertContainer = document.getElementById("alert-container");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;

        fetch(action, {
            method: "POST",
            body: data,
        })
            .then(() => {
                const alert = document.createElement("div");
                alert.classList.add("alert", "alert-success");
                alert.innerHTML = "Konfirmasi kehadiran berhasil dikirim!";
                alertContainer.appendChild(alert);

                // Atur timeout untuk menghilangkan pesan alert setelah beberapa detik
                setTimeout(function () {
                    alertContainer.removeChild(alert);
                }, 5000);
            })
            .catch((error) => {
                const alert = document.createElement("div");
                alert.classList.add("alert", "alert-danger");
                alert.innerHTML = "Terjadi kesalahan: " + error.message;
                alertContainer.appendChild(alert);
            });
    });
});