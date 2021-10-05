const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];


let ol = document.createElement('ol');



document.body.append(ol);
ol.style.listStyleType = 'none';



users.forEach((v) => {
    let li = document.createElement('li');
    ol.append(li);
    li.setAttribute("data-id", `${v.id}`);
    li.innerHTML = `${v.firstName} ${v.lastName}`;
})
