const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const place = document.querySelector("#place");
const btn = document.querySelector("#button");
btn.addEventListener("click", sen);

function sen() {
  const req = { name1: name1.value, name2: name2.value, place: place.value };

  fetch("/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("송금 되었습니다.");
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
