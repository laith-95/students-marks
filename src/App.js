// --- class based component ---
import React, { Component } from "react";
import "./App.css";

// components
import Loading from "./classComponents/Loading";
import UsersList from "./classComponents/UsersList";
import IncreaseMarkBtn from "./classComponents/IncreaseMarkBtn";

class App extends Component {
  state = {
    loading: true,
    users: [],
    unsuccessfulUsers: [],
  };

  increaseMarkHandler = () => {
    if (this.state.unsuccessfulUsers.length) {
      let unsuccessfulUsers = [...this.state.unsuccessfulUsers];

      unsuccessfulUsers = unsuccessfulUsers.filter((user) => {
        user.mark = user.mark + 1;

        if (user.mark < 50) {
          return user;
        }
      });

      this.setState({
        // users,
        unsuccessfulUsers,
      });
    }
  };

  deleteUser = (userIndex) => {
    const users = [...this.state.users];
    // console.log("userIndex = ", userIndex);
    // console.log("user in users arr = ", users[userIndex]);

    users.splice(userIndex, 1);
    this.setState({ users });
  };

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    const getData = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        data = await data.json();
        // get 5 users only
        data = data.slice(0, 5);

        // users marks
        const usersMarks = [91, 47, 48, 49, 88];

        // adding users marks props for each user
        data = data.map((user, index) => {
          user.mark = usersMarks[index];

          return user;
        });

        // select unsuccessful users
        const unsuccessfulUsers = data.filter((user) => user.mark < 50);

        this.setState({
          users: data,
          loading: false,
          unsuccessfulUsers,
        });
      } catch (error) {
        console.log("err = ", error);
      }
    };

    getData();
  }

  render() {
    console.log("[App.js] render");

    let displayOnPage = null;

    if (this.state.loading) {
      displayOnPage = <Loading />;
    } else {
      displayOnPage = (
        <>
          <UsersList users={this.state.users} deleteUser={this.deleteUser} />
          <IncreaseMarkBtn
            increaseMarkHandler={this.increaseMarkHandler}
            unsuccessfulUsersLength={this.state.unsuccessfulUsers.length}
          />
        </>
      );
    }

    return displayOnPage;
  }
}

export default App;

// ====================================
// ====================================

// // --- functional component ---
// import React, { useState, useEffect } from "react";
// import "./App.css";

// // components
// import Loading from "./functionalComponents/Loading";
// import UsersList from "./functionalComponents/UsersList";
// import IncreaseMarkBtn from "./functionalComponents/IncreaseMarkBtn";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);
//   const [unsuccessfulUsers, setUnsuccessfulUsers] = useState([]);

//   const increaseMarkHandler = () => {
//     if (unsuccessfulUsers.length) {
//       let updatedUnsuccessfulUsers = [...unsuccessfulUsers];

//       updatedUnsuccessfulUsers = updatedUnsuccessfulUsers.filter((user) => {
//         user.mark = user.mark + 1;

//         if (user.mark < 50) {
//           return user;
//         }
//       });

//       setUnsuccessfulUsers(updatedUnsuccessfulUsers);
//     }
//   };

//   useEffect(() => {
//     console.log("[App.js] useEffect = componentDidMount");
//     const getData = async () => {
//       try {
//         let data = await fetch("https://jsonplaceholder.typicode.com/users");
//         data = await data.json();
//         // get 5 users only
//         data = data.slice(0, 5);

//         // users marks
//         const usersMarks = [91, 47, 48, 49, 88];

//         // adding users marks props for each user
//         data = data.map((user, index) => {
//           user.mark = usersMarks[index];

//           return user;
//         });

//         // select unsuccessful users
//         const unsuccessfulUsers = data.filter((user) => user.mark < 50);

//         setUsers(data);
//         setLoading(false);
//         setUnsuccessfulUsers(unsuccessfulUsers);
//       } catch (error) {
//         console.log("err = ", error);
//       }
//     };

//     getData();
//   }, []);

//   console.log("[App.js] return");

//   let displayOnPage = null;

//   if (loading) {
//     displayOnPage = <Loading />;
//   } else {
//     displayOnPage = (
//       <>
//         <UsersList users={users} />
//         <IncreaseMarkBtn
//           increaseMarkHandler={increaseMarkHandler}
//           unsuccessfulUsersLength={unsuccessfulUsers.length}
//         />
//       </>
//     );
//   }

//   return displayOnPage;
// };

// export default App;
