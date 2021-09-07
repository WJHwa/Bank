const id = document.querySelector("#id");
const btn = document.querySelector("#button");

btn.addEventListener("click", Inquire);

function Inquire() {
  const req = { id: id.value };

  fetch("/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("등록되었습니다.");
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("등록중 에러발생");
    });
}
