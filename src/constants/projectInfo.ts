import {
  etchImg,
  knightImg,
  ledImg,
  mastermindImg,
  portalImg,
  portfolioImg,
} from "../assets";

export const projects = [
  {
    id: "portal",
    title: "E-Learning Portal",
    desc: "A new portal for roughly one thousand students, parents, teachers, TAs, and admins. Features included are authorization/authentication, class schedules and rescheduling, worksheets made of problem sets, and an internal messaging system. This portal is what taught me React.js, building a product from start to production, and the confidence to come up with my own creative software solutions.",
    thumbnailImg: portalImg,
    skills: [
      "React JS",
      "TailwindCSS",
      "Docker",
      "RESTful API",
      "Axios",
      "Vite",
      "MathJax",
    ],
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    desc: "This project is the portfolio you are currently looking at! I had wanted to make a portfolio website for a while, and after going through the end-to-end development of the Mr. Math portal, I knew I had the skills to build it myself with React. I used this portfolio as an opportunity to learn TypeScript too, since it is something I have been wanting to learn for some time now.",
    thumbnailImg: portfolioImg,
    skills: ["TypeScript", "React JS", "TailwindCSS", "Vite", "Vercel"],
  },
  {
    id: "knight",
    title: "Knight Travails",
    desc: "Knight Travails is a chess inspired program that runs in the CLI. A knight is able to move to any square on a chess board. Using Graph Theory, we can create a graph with each possible move for a knight. When a Breadth First Search is utilized, the program stops at the first instance of the destination square, and reports the number of moves required, as well as the path taken.",
    thumbnailImg: knightImg,
    skills: ["Ruby", "Graph Theory", "BFS"],
  },
  {
    id: "etch",
    title: "Etch-A-Sketch",
    desc: "This is a fun web app I created when I was really trying to practice the basics of HTML/CSS/JS. I tried to make the UI/UX as user-friendly as possible. There is an input for variable grid sizes, and buttons for different color selection. I even added an opacity button that can change the opacity of the squares. This allows for some outside of the box sketches if you have the time!",
    thumbnailImg: etchImg,
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "mastermind",
    title: "Mastermind",
    desc: "This is a game played inside the CLI. You have the option to play as the Coder or the Code Breaker. As the Code Breaker, you have 10 guesses to discover the Coders code which is randomly generated. You have color indicators that show how close you are to this code. As the Coder, you create a code of four colors, which the Code Breaker has to guess. I created an AI that utilizes Donald Knuth's strategy that uses a Minimax algorithm to beat the game every time in 5 guesses or less. Additionally, I learned about graph pruning to speed up the runtime of this program by a few minutes.",
    thumbnailImg: mastermindImg,
    skills: ["Ruby", "Minimax Algorithm"],
  },
  {
    id: "lights",
    title: "LED Patterns with Arduino",
    desc: "An LED strip with a programmed Arduino glows with various patterns. I was inspired by my own LED light strip I had in my dorm, and I wanted my own patterns for it. The light strip had 4 wires. Red, Blue, Green, and Ground. Giving power to these different values let me adjust the colors for each LED. My favorite pattern mimicked twinkling snow for the winter.",
    thumbnailImg: ledImg,
    skills: ["Arduino Programming"],
  },
];
