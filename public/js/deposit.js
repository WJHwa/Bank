const names = document.querySelector("#names");
const place = document.querySelector("#place");
const btn = document.querySelector("#button");
btn.addEventListener("click", Upde);

function Upde() {
  const req = { names: names.value, place: place.value };

  fetch("/deposit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("입금 되었습니다.");
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
