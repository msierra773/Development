/* #region Variables*/
var price = document.getElementById("price");
var title = document.getElementById("title");
var description = document.getElementById("description");
var image_url = document.getElementById("img");
var addBtn = document.getElementById("addBtn");
var showBtn = document.getElementById("showList");
var list = document.getElementById("list");
var responseArray;
/* #endregion */

onload();

function onload() {
  makeRequest()
    .then((data) => {
      responseArray = data;
      addToDom(responseArray);
    })
    .catch((error) => {
      console.log(error);
    });
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addItem(title.value.trim(), description.value.trim(), price.value.trim(), image_url.value.trim());
  price.value = "";
  description.value = "";
  title.value = "";
  image_url.value = "";
});

function addItem(title, description, price, image_url) {
  let todoObj = {
    title: title,
    description: description,
    price: price,
    image_url: image_url,
  };
  axios
    .post("https://api.vschool.io/marcoSierra/todo", todoObj)
    .then((response) => {
      console.log("added");
      onload();
    })
    .catch((error) => console.log(error));
}

showBtn.addEventListener("click", () => {
  onload();
});

async function makeRequest() {
  let resp = await axios.get("https://api.vschool.io/marcoSierra/todo");
  return resp.data;
}

function addToDom(param) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (let i = 0; i < param.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = param[i].title + " ";
    let btn = document.createElement("button");
    list.appendChild(li);
    li.appendChild(btn);
  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "completed";
    checkbox.value = "checked"
    if(param[i].completed === true){
      li.classList.add("line-through")
      checkbox.checked = true;

    }

    let editbtn = document.createElement("button");
    editbtn.classList.add("btn");
    editbtn.innerHTML = "edit";

    editbtn.addEventListener("click", (event) => {
      editButton(event);
    });
    li.appendChild(editbtn);

    let label = document.createElement("label");
    label.htmlFor = "id";
    label.appendChild(document.createTextNode("completed"));
    li.appendChild(label);
    label.classList.add("ignore-css");
    
    li.appendChild(checkbox);

    checkbox.addEventListener("click", (event) => {
      completed(event);
    });

    btn.innerHTML = "delete";
    btn.classList.add("dltbtn");
    btn.addEventListener("click", (event) => {
      deleteBtn(event);
    });
  }
}

function deleteBtn(event) {
  let target = event.target;
  let name1 = target.parentElement.childNodes[0].nodeValue;
  let axiosDataArray = [];
  makeRequest().then((resp) => {
    axiosDataArray = resp;
    deleteFuncdata();
  });
  function deleteFuncdata() {
    
    let item1 = axiosDataArray.find((item) => item.title === name1.trim());
    let idFinal = item1["_id"];
    
    let url = `https://api.vschool.io/marcoSierra/todo/${idFinal}`;
    axios.delete();
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data.msg);
        onload();
      })
      .catch((error) => console.log(error));
    onload();
  }
}

function editButton(event) {
  let itemName = event.target.parentElement.childNodes[0].nodeValue;
  console.log(`${itemName}edit button`);
  let ptag = event.target.parentElement[0];
}

function completed(event) {
  let title = event.target.parentElement.childNodes[0].nodeValue.trim();
  let axiosArray = [];
  makeRequest().then((response) => {
    axiosArray = response;
    completing(event);
  });

  function completing(event) {
    let title2 = event.target.parentElement.childNodes[4]
    if(title2.checked === true){
      console.log("checked")
    }

    let chosenObj = axiosArray.find((item) => item.title.trim() === title);
    let url = `https://api.vschool.io/marcoSierra/todo/${chosenObj._id}`;
    if (title2.checked === true) {
      chosenObj.completed = true;
    }
    if(title2.checked === false){
      chosenObj.completed = false
    }
    axios.put(url,chosenObj)
      .then(onload());
      
  }
  onload();
}
