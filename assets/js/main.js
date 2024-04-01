//get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1583001809898-006ebc1377c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Kiyv, Ukraine",
        name: "Anastasiya",
        age: 27,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "painting"
            },
            {
                icon: `<i class="ri-bluesky-fill"></i>`,
                interest: "travel"
            }
        ],
        bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus debitis nisi esse, quisquam ab consequatur, quaerat
        voluptatum ipsum doloremque minima eos doloribus cupiditate
        dignissimos. Dolorum.`,
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1535546125792-dd417e0f8f87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1542596594-b47fea509622?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 7,
        location: "Kiyv, Ukraine",
        name: "Hanna",
        age: 27,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "painting"
            },
            {
                icon: `<i class="ri-bluesky-fill"></i>`,
                interest: "travel"
            }
        ],
        bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus debitis nisi esse, quisquam ab consequatur, quaerat
        voluptatum ipsum doloremque minima eos doloribus cupiditate
        dignissimos. Dolorum.`,
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1559107856-54768f8174ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 21,
        location: "Kiyv, Ukraine",
        name: "Alya",
        age: 31,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "painting"
            },
            {
                icon: `<i class="ri-bluesky-fill"></i>`,
                interest: "travel"
            }
        ],
        bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus debitis nisi esse, quisquam ab consequatur, quaerat
        voluptatum ipsum doloremque minima eos doloribus cupiditate
        dignissimos. Dolorum.`,
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1515159559764-c8990cc73657?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1679486697391-d0ae595427be?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location: "Kiyv, Ukraine",
        name: "Olga",
        age: 30,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "painting"
            },
            {
                icon: `<i class="ri-bluesky-fill"></i>`,
                interest: "travel"
            }
        ],
        bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus debitis nisi esse, quisquam ab consequatur, quaerat
        voluptatum ipsum doloremque minima eos doloribus cupiditate
        dignissimos. Dolorum.`,
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1688509375809-7c18379bef3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1685048241209-d1aeadaf2fc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Kiyv, Ukraine",
        name: "Zoya",
        age: 27,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "painting"
            },
            {
                icon: `<i class="ri-bluesky-fill"></i>`,
                interest: "travel"
            }
        ],
        bio: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Possimus debitis nisi esse, quisquam ab consequatur, quaerat
        voluptatum ipsum doloremque minima eos doloribus cupiditate
        dignissimos. Dolorum.`,
        isFriend: null
    },
];

function select(elem) {
    return document.querySelector(elem);
}


let curr = 0;
let isAnimating = false;

function setData(index) {
    select(".prflimg img").src = users[index].profilePic;

    select(".badge p").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1").textContent = users[index].name;
    select(".age").textContent = users[index].age;


    let clutter = "";
    users[index].interests.forEach(function (elem) {
        clutter += `<div class="tag flex items-center gap-2 bg-white/30 px-3 py-1 rounded-full">
                    ${elem.icon}
                    <h3 class="text-sm tracking-tighter capitalize">${elem.interest}</h3>
                </div>`;
    });
    select(".tags").innerHTML = clutter;

    select(".bio p").innerHTML = users[index].bio;
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr);

    curr = 2;
})();


function imageChange() {
    if (!isAnimating) {
        isAnimating = true;

        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;

                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });

                if (curr === users.length) curr = 0;
                select('.maincard img').src = users[curr].displayPic;
                curr++;

                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");

            }
        });

        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 0.9
        }, "a");
        tl.from(".incomingcard", {
            scale: 0.9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a");
    }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener('click', function () {
    imageChange();

    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: 0.1,
        ease: Circ,
        duration: 1,
    });
});

accept.addEventListener('click', function () {
    imageChange();

    setData(curr - 1);

    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: 0.1,
        ease: Circ,
        duration: 1,
    });
});


(function containerCreator() {
    document.querySelectorAll(".element").forEach(function (element) {
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        //console.log(div);

        div.appendChild(element);
        select('.details').appendChild(div);
    });
})();

gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: Circ,
    duration: 1,
});



