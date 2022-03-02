
const pague1 = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=1")
      console.log(res);
    const data = await res.data.data
      console.log(data); 
        let body = ""
        data.map(item => {
             body+= ` <li class"card-container" id="card">
                        <div class="image-container">
                        <img id="imagen" src="${item.avatar}" alt="avatar">
                        </div>
                        
                        <div class="name-container">
                          <span class="firtsName">Names: ${item.first_name}</span>
                          <span class="lastName">${item.last_name}</span>
                        </div>
                        <p class="email">Email: ${item.email}</p>
                      </li>
                     `
        });
      document.getElementById("body").innerHTML = body

  } catch (error) {
    console.log(error);
  }
}

const pague2 = async () => {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=2")
      console.log(res);
    const data = await res.data.data
      console.log(data); 
        let body = ""
        data.map(item => {
             body+= ` <li class"card-container" id="card">
                        <div class="image-container">
                        <img id="imagen" src="${item.avatar}" alt="avatar">
                        </div>
                        
                        <div class="name-container">
                          <span class="firtsName">Names: ${item.first_name}</span>
                          <span class="lastName">${item.last_name}</span>
                        </div>
                        <p class="email">Email: ${item.email}</p>
                      </li>
                     `
        });
      document.getElementById("body").innerHTML = body

  } catch (error) {
    console.log(error);
  }
}
pague1()



const siguiente = document.getElementById("siguiente")
siguiente.addEventListener("click", () => {
pague1()
}) 


const anterior = document.getElementById("anterior")
anterior.addEventListener("click", () => {
  pague2()
}) 
