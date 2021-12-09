async function loadUsers() {
  const response = await fetch("data/users.json");
  const users = await response.json();
    //dswtu
  return users;
  console.log(response);
}

document.addEventListener("DOMContentLoaded", async () => {
  let users = [];
  
  try {
        users = await loadUsers();
    } catch (e) {
      console.log("Error!");
      console.log(e);
    }

    console.log(users);
});