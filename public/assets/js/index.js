//Index.js JS --v

// $(function() {
//     // User clicks button to create a burger
//     $(".addBurger").on("click", (event) => {
//         event.preventDefault();
//         console.log("Burger created");

//         const newBurger = { burger_name: $("#bg").val().trim() }

//         // console.log(newBurger);

//         $.ajax("/api/burgers", {
//                 type: "POST",
//                 data: newBurger
//             })
//             .then(() => {
//                 console.log("Created new burger");
//                 location.reload();
//             })

//     });
// })



//Script tag JS --v
// $
//     (function() {
//         $(".addBurger").on("click", (event) => {
//             event.preventDefault();


//             const newBurger = {
//                 burger_name: $("#bg").val().trim(),
//                 devoured: $("#[name=sleepy]")
//             }
//             const newBurgerState = { devoured: newBurger }
//             $.ajax("api/burgers", {
//                     type: "POST",
//                     data: newBurger
//                 })
//                 .then(() => {
//                     console.log("Burger created");
//                     location.reload();
//                 })

//             console.log(newBurger);

//         })
//     })