import Qot from "../src/images/qot.jpg";
import lovelyrunner from "../src/images/lovelyrunner.jpg";
import startup from "../src/images/startup.jpg";
import tangurine from "../src/images/tangurine.jpg";
import topgun from "../src/images/topgun.jpg";
import vagabond from "../src/images/vagabond.jpg";
import twenty from "../src/images/20cen.jpg";
import hyperknife from "../src/images/hyperknife.jpg";
import nextdoor from "../src/images/nextdoor.jpg";
import friendlyrivalry from "../src/images/friendly-rivalry.jpg";
import mydearestnemesis from "../src/images/dearest-nemesis.jpg";
import Twinkling from "../src/images/twinkling-watermelon.png";
import Undercover from "../src/images/undercover.jpg";

const movie = [
  {
    src: Twinkling,
    title: "Twinkling Watermelon",
    hot: "true",
    description:
      "A heartwarming tale of a young musician who time-travels to the 90s to reconnect with his estranged father through music and love.",
    category: "Romance",
  },
  {
    src: lovelyrunner,
    title: "Lovely Runner",
    hot: "true",
    description:
      "A romantic comedy about a woman who keeps running into her charming neighbor, sparking an unexpected love story.",
    category: "Romance",
  },
  {
    src: twenty,
    title: "20th Century Girl",
    hot: "false",
    description:
      "A nostalgic romance set in the late 90s, following a teenage girl’s first love and the bittersweet memories it leaves behind.",
    category: "Romance",
  },
  {
    src: mydearestnemesis,
    title: "My Dearest Nemesis",
    hot: "false",
    description:
      "A romantic enemies-to-lovers tale where two coworkers clash daily, only to discover a deeper connection beneath the tension.",
    category: "Romance",
  },

  // Comedy
  {
    src: Undercover,
    title: "Undercover",
    hot: "true",
    description:
      "An intense thriller about a secret agent infiltrating a criminal organization, risking everything for justice.",
    category: "Comedy",
  },
  {
    src: nextdoor,
    title: "Next Door",
    hot: "false",
    description:
      "A quirky drama about neighbors whose lives intertwine unexpectedly, revealing secrets and building unlikely bonds.",
    category: "Comedy",
  },
//Thriller
  {
    src: hyperknife,
    title: "Hyper Knife",
    hot: "false",
    description:
      "A dark psychological thriller about a genius surgeon with a hidden past, cutting through lies and lives with precision.",
    category: "Thriller",
  }, 
  {
    src: friendlyrivalry,
    title: "Friendly Rivalry",
    hot: "false",
    description:
      "A lighthearted story of two best friends turned rivals in a cooking competition, blending humor and heartfelt moments.",
    category: "Thriller",
  },

 


  // Drama
  {
    src: Qot,
    title: "Queen of Tears",
    hot: "true",
    description:
      "A dramatic story of a chaebol heiress facing family betrayal and a tragic love story that brings tears and redemption.",
    category: "Drama",
  },
  {
    src: startup,
    title: "Start-Up",
    hot: "false",
    description:
      "A journey of young entrepreneurs chasing their dreams in the competitive world of tech startups, filled with ambition and romance.",
    category: "Drama",
  },
  {
    src: tangurine,
    title: "Tangurine",
    hot: "false",
    description:
      "A bittersweet coming-of-age story set in a small town, where a girl discovers friendship and loss under tangerine trees.",
    category: "Drama",
  },

  // Action
  {
    src: topgun,
    title: "Top Gun",
    hot: "false",
    description:
      "An action-packed tale of elite fighter pilots pushing their limits in the sky, with rivalry, courage, and high stakes.",
    category: "Action",
  },
  {
    src: vagabond,
    title: "Vagabond",
    hot: "false",
    description:
      "A gripping mystery of a stuntman uncovering a conspiracy after a plane crash, leading him on a dangerous quest for truth.",
    category: "Action",
  },
];

function Collections() {
  return movie;
}

export default Collections;
