let data = [
    { name: "Fuad", surname: "Süleymanlı", id: 1, age:10 },
    { name: "Cavid", surname: "Ağayev", id: 2, age:11 },
    { name: "Mehran", surname: "Kəbirtəlai", id: 3, age:12 },
    { name: "Kamal", surname: "Musayev", id: 4, age:13 },
    { name: "Kənan", surname: "Həsənzadə", id: 5, age:14 },
    { name: "Zalı", surname: "Nəcəfov", id: 6, age:15 },
    { name: "Aygül", surname: "Abbaszadə", id: 7, age:24 },
    { name: "Bənövşə", surname: "Məhərrəmova", id: 8, age:19 },
    { name: "Tərlan", surname: "Zeynalov", id: 9, age:16 },
  ];

  let tbody = document.querySelector("tbody");
  let table = document.querySelector("table");
  let txtValue;
    for (let i = 0; i < data.length; i++) {
      tbody.innerHTML +=
       `<tr>
      <td>${data[i].name}</td>
      <td>${data[i].surname}</td>
      <td>${data[i].age}</td>
      <td>${data[i].id}</td>
  </tr>`;
    }
   function myFunc() {
    let input = document.getElementsByTagName("input")[0];
    let inputValue = input.value.toUpperCase();
    let tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        txtValue = tr[i].innerHTML ;
        if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
  }





























//   let tbody = document.querySelector("tbody");
//   let input = document.querySelector("input");
//   let table = document.querySelector("table");
//   let tr = document.querySelector("tr")
//   let inputValue = input.value.toUpperCase();
//   var txtValue;
//     for (let i = 0; i < students.length; i++) {
//       tbody.innerHTML += 
//     `<tr>
//       <td>${students[i].name}</td>
//       <td>${students[i].surname}</td>
//       <td>${students[i].age}</td>
//       <td>${students[i].id}</td>
//     </tr>`;
//    }

//    function search(){
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.innerHTML || td.innerText;
//         if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
//           tr[i].style.display = " ";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }
//   search()









  // function search(){
  //   input.value.toLowerCase;
  //   for(let j=0 ; j<td.length ; j++){
  //   }
  // }
  // search()
//   var newData = [];
//   for(let i = 0 ; i<students.length;i++){
//     if(students[i].surname === “Nəcəfov”){
//       newData.push(students[i])
//     }
//   }