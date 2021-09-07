const id = document.querySelector("#id");
const btn = document.querySelector("#button");

btn.addEventListener("click", Balan);

function Balan() {
  const req = { id: id.value };

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        alert(`${res[0].name}님의 잔액은 ${res[0].balance}원 입니다.`);
        // console.log(res[0].name);
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("등록중 에러발생");
    });
}
