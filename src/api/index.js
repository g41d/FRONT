// {
// 	"id": "iddd",
// 	"pw": "pw",
// 	"nickname": "365aaa",
// 	"email": "geniusk10a47@naver.com",
// 	"phone": "010299521047"
// }

export const register = (data) =>
  fetch("http://192.168.200.135:3000/users/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
