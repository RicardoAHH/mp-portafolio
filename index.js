

let buttonDark = document.querySelector("#dark");

buttonDark.addEventListener("click", switchDarkMode);

function switchDarkMode() {
    document.documentElement.classList.toggle("dark");
}

const MySkills = [
    {
        name: "HTML5.0",
        img: "./resources/html5.png"
    },
    {
        name: "CSS3.0",
        img: "./resources/css.png"
    },
    {
        name: "Javascript",
        img: "./resources/JS.png"
    },
    {
        name: "React",
        img: "./resources/React.png"
    },
    {
        name: "Next",
        img: "./resources/next.webp"
    },
    {
        name: "NodeJS",
        img: "./resources/jsgreen.png"
    },
    {
        name: "Tailwind",
        img: "./resources/pngwing.com.png"
    },
    {
        name: "MongoDB",
        img: "./resources/mongodb.png"
    }
];

skills = document.querySelector("#myskills")



skills.innerHTML = "";

MySkills.forEach(x => {
    skills.innerHTML += `
    <div class=" rounded-lg w-[24%] h-[48%] bg-gradient-to-br from-[#ffffff80] to-[#ffffff00] to-[80%]
                flex items-center justify-center">
                    <figure
                        class=" rounded-lg w-[99%] h-[99%] bg-[#47568a] dark:bg-[#1d2237] flex items-center justify-center">
                        <img src=${x.img} alt=${x.name} width="100">
                    </figure>
                </div>
    `
});

const additionalskills = [
    {
        name: "Bootstrap",
        img: "./resources/bootstrap.png"
    },
    {
        name: "Axios",
        img: "./resources/axios_.png"
    },
    {
        name: "Redux",
        img: "./resources/redux.png"
    },
    {
        name: "Mui",
        img: "./resources/material-ui-1.svg"
    },
    {
        name: "Firebase",
        img: "./resources/firebase-1.svg"
    },
    {
        name: "Wordpress",
        img: "./resources/wordpress.png"
    },
    {
        name: "TailwinFramer",
        img: "./resources/framer-motion.svg"
    }
]


addskills = document.querySelector("#addskills")


addskills.innerHTML = "";

additionalskills.forEach(x => {
    addskills.innerHTML += `
    <div class=" h-[95px]"><img
    class="h-[100%] max-lg:w-[80px] drop-shadow-black drop-shadow-sm dark:drop-shadow-none"
    src=${x.img} alt=${x.name} width=""></div>
    `
});





