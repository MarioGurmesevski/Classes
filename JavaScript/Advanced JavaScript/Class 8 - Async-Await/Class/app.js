// //Using nested callbacks

const makeSaladCallback = () => {
  setTimeout(() => {
    console.log("All vegetables diced");
    setTimeout(() => {
      console.log("Salt added");
      setTimeout(() => {
        console.log("Oil added");
        setTimeout(() => {
          console.log("Salad mixed");
          setTimeout(() => {
            console.log("Salad served");
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
};

// makeSaladCallback();

// const testPromiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//       setTimeout(() => {
//         reject("Something went wrong");
//       }, 1500);
//     }
//     if (Math.random() > 0.5) {
//       setTimeout(() => {
//         resolve("Promise Success");
//       }, 1500);
//     }
//   });
// };

// testPromiseFunc()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log(`Promise finished at ${new Date()}`));

// testPromiseFunc();

// const firstPromiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         msg: "first Promise success",
//       });
//     }, 1500);
//   });
// };

// const secondPromiseFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         msg: "Second Promise success",
//       });
//     }, 1500);
//   });
// };

// firstPromiseFunc()
//   .then((value) => {
//     console.log(value.msg);
//     return secondPromiseFunc;
//   })
//   .then((value) => {
//     console.log(value.msg);
//   })
//   .catch(error=>{

//   });

const cutVegetables = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All Vegetables diced");
    }, 1500);
  });
};
const saltAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salt added");
    }, 1500);
  });
};
const oilAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oil added");
    }, 1500);
  });
};
const saladMixed = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad mixed");
    }, 1500);
  });
};
const saladServed = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad served");
    }, 1500);
  });
};

const makeSaladPromise = () => {
  cutVegetables()
    .then((value) => {
      console.log(value);
      return saltAdded();
    })
    .then((value) => {
      console.log(value);
      return oilAdded();
    })
    .then((value) => {
      console.log(value);
      return saladMixed();
    })
    .then((value) => {
      console.log(value);
      return saladServed();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => console.error(error))
    .finally(() => "Salad finished");
};

// makeSaladPromise();

//ASYNC/AWAIT

//Defining async functions

async function testAsync() {}

const asyncExample = async () => {};

//Fetching users and rendering list of users in html

const fetchUsersPRomise = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

fetchUsersPRomise();

const fetchUsersAsync = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data;
};

const renderUsers = (users) => {
  const userlistEl = document.querySelector(".userlist");

  userlistEl.innerHTML = users
    .map((user) => `<li>Name: ${user.name}| Email:${user.email}</li>`)
    .join("");
};

const app = async () => {
  const users = await fetchUsersAsync();
  renderUsers(users);
};

app();

//Exerice

const cutVegetablesOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: "Cut vegetables",
      });
    }, 1500);
  });
};
const saltAddedOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: "Salt added",
      });
    }, 1500);
  });
};
const oilAddedOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: "Oil added",
      });
    }, 1500);
  });
};
const saladMixedOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: "Salad mixed",
      });
    }, 1500);
  });
};
const saladServedOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: "Salad served",
      });
    }, 1500);
  });
};

const asyncSaladExample = async () => {
  try {
    const cutVegetablesOneFunc = await cutVegetablesOne();
    console.log(cutVegetablesOneFunc.msg);

    const saltAddedOneFunc = await saltAddedOne();
    console.log(saltAddedOneFunc.msg);

    const oilAddedOneFunc = await oilAddedOne();
    console.log(oilAddedOneFunc.msg);

    const saladMixedOneFunc = await saladMixedOne();
    console.log(saladMixedOneFunc.msg);

    const saladServedOneFunc = await saladServedOne();
    console.log(saladServedOneFunc.msg);
  } catch (error) {
    console.log("ERROR", error);
  }
};

asyncSaladExample();
