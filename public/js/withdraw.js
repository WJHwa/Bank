const names = document.querySelector("#name");
const place = document.querySelector("#place");
const btn = document.querySelector("#button");
btn.addEventListener("click", With);

function With() {
  const req = { names: names.value, place: place.value };

  fetch("/withdraw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("출금 되었습니다.");
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
