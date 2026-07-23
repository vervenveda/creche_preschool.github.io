const THEMES = {

A:{
  name:"Apple Orchard",
  palette:{primary:"#E63946",secondary:"#8AC926",accent:"#FFD166",background:"#FFF5E1",button:"#D62828"},
  particles:["🍎","🍃","🌼"],
  animation:"fall",
  ambient:"birds",
  border:"orchard"
},

B:{
  name:"Bluebird Meadow",
  palette:{primary:"#3A86FF",secondary:"#90E0EF",accent:"#FFBE0B",background:"#EAF8FF",button:"#4895EF"},
  particles:["🐦","☁️","🌼"],
  animation:"fly",
  ambient:"meadow",
  border:"flowers"
},

C:{
  name:"Coral Cove",
  palette:{primary:"#00B4D8",secondary:"#48CAE4",accent:"#FF7F50",background:"#E0FBFC",button:"#0096C7"},
  particles:["🫧","🐠","🪸"],
  animation:"bubble",
  ambient:"ocean",
  border:"coral"
},

D:{
  name:"Dinosaur Valley",
  palette:{primary:"#588157",secondary:"#A3B18A",accent:"#DDA15E",background:"#F4F1DE",button:"#3A5A40"},
  particles:["🦕","🍃","🪨"],
  animation:"stomp",
  ambient:"jungle",
  border:"vines"
},

E:{
  name:"Emerald Forest",
  palette:{primary:"#2D6A4F",secondary:"#95D5B2",accent:"#FFD166",background:"#F1FAEE",button:"#40916C"},
  particles:["🌲","✨","🦋"],
  animation:"sparkle",
  ambient:"forest",
  border:"leaves"
},

F:{
  name:"Firefly Forest",
  palette:{primary:"#5A189A",secondary:"#C77DFF",accent:"#FFD60A",background:"#F8F4FF",button:"#7B2CBF"},
  particles:["✨","🐞","🌙"],
  animation:"twinkle",
  ambient:"night",
  border:"fireflies"
},

G:{
  name:"Golden Garden",
  palette:{primary:"#F4A261",secondary:"#E9C46A",accent:"#2A9D8F",background:"#FFF8E7",button:"#E76F51"},
  particles:["🌻","🦋","🍃"],
  animation:"float",
  ambient:"garden",
  border:"flowers"
},

H:{
  name:"Honey Hollow",
  palette:{primary:"#F4A261",secondary:"#E9C46A",accent:"#FFD166",background:"#FFF8DC",button:"#D97706"},
  particles:["🐝","🍯","🌼"],
  animation:"buzz",
  ambient:"bees",
  border:"honey"
},

I:{
  name:"Ice Island",
  palette:{primary:"#90E0EF",secondary:"#CAF0F8",accent:"#FFFFFF",background:"#EAF9FF",button:"#48CAE4"},
  particles:["❄️","🧊","✨"],
  animation:"snow",
  ambient:"wind",
  border:"ice"
},

J:{
  name:"Jellyfish Lagoon",
  palette:{primary:"#4361EE",secondary:"#B5179E",accent:"#4CC9F0",background:"#EEF7FF",button:"#7209B7"},
  particles:["🪼","🫧","🐠"],
  animation:"drift",
  ambient:"water",
  border:"waves"
},

K:{
  name:"Kite Valley",
  palette:{primary:"#3A86FF",secondary:"#FFBE0B",accent:"#FB5607",background:"#F0FBFF",button:"#8338EC"},
  particles:["🪁","☁️","🌤️"],
  animation:"soar",
  ambient:"breeze",
  border:"clouds"
},

L:{
  name:"Lantern Lake",
  palette:{primary:"#F77F00",secondary:"#FFD166",accent:"#577590",background:"#FFF8E8",button:"#F9844A"},
  particles:["🏮","✨","🌙"],
  animation:"glow",
  ambient:"crickets",
  border:"lanterns"
},

M:{
  name:"Moon Mountain",
  palette:{primary:"#3A0CA3",secondary:"#4361EE",accent:"#FFD166",background:"#EEF2FF",button:"#560BAD"},
  particles:["🌙","⭐","☁️"],
  animation:"rise",
  ambient:"night",
  border:"stars"
},

N:{
  name:"Nesting Woods",
  palette:{primary:"#6B705C",secondary:"#A5A58D",accent:"#DDBEA9",background:"#FFF7EF",button:"#7F5539"},
  particles:["🪺","🍂","🐦"],
  animation:"flutter",
  ambient:"birds",
  border:"twigs"
},

O:{
  name:"Owl Forest",
  palette:{primary:"#386641",secondary:"#6A994E",accent:"#F2E8CF",background:"#FAF8F1",button:"#A7C957"},
  particles:["🦉","🌲","✨"],
  animation:"glide",
  ambient:"owls",
  border:"trees"
},

P:{
  name:"Polar Paradise",
  palette:{primary:"#A9DEF9",secondary:"#E4F9FF",accent:"#FFFFFF",background:"#F7FDFF",button:"#48CAE4"},
  particles:["❄️","🐧","🧊"],
  animation:"snowfall",
  ambient:"arctic",
  border:"snow"
},

Q:{
  name:"Queen's Castle",
  palette:{primary:"#7B2CBF",secondary:"#C77DFF",accent:"#FFD166",background:"#FAF5FF",button:"#9D4EDD"},
  particles:["👑","✨","🏰"],
  animation:"shine",
  ambient:"harp",
  border:"royal"
},

R:{
  name:"Rainbow River",
  palette:{primary:"#FF006E",secondary:"#8338EC",accent:"#3A86FF",background:"#FFF7FF",button:"#FB5607"},
  particles:["🌈","💧","✨"],
  animation:"rainbow",
  ambient:"river",
  border:"rainbow"
},

S:{
  name:"Star Valley",
  palette:{primary:"#1D3557",secondary:"#457B9D",accent:"#FFD166",background:"#F6F8FF",button:"#5E60CE"},
  particles:["⭐","🌠","✨"],
  animation:"shootingStars",
  ambient:"space",
  border:"stars"
},

T:{
  name:"Tropical Beach",
  palette:{primary:"#00B4D8",secondary:"#90E0EF",accent:"#FFD166",background:"#FFF9E6",button:"#06D6A0"},
  particles:["🌴","🐚","🌊"],
  animation:"waves",
  ambient:"ocean",
  border:"shells"
},

U:{
  name:"Umbrella Garden",
  palette:{primary:"#FF70A6",secondary:"#70D6FF",accent:"#FFD670",background:"#FFF7FA",button:"#B5179E"},
  particles:["☂️","🌷","💧"],
  animation:"raindrops",
  ambient:"rain",
  border:"flowers"
},

V:{
  name:"Volcano Island",
  palette:{primary:"#D62828",secondary:"#F77F00",accent:"#FCBF49",background:"#FFF2E8",button:"#9D0208"},
  particles:["🌋","🔥","🌴"],
  animation:"lava",
  ambient:"rumble",
  border:"rocks"
},

W:{
  name:"Whispering Woods",
  palette:{primary:"#2D6A4F",secondary:"#74C69D",accent:"#D8F3DC",background:"#F4FFF8",button:"#40916C"},
  particles:["🍃","🌲","🦉"],
  animation:"wind",
  ambient:"forest",
  border:"leaves"
},

X:{
  name:"Xylophone Village",
  palette:{primary:"#8338EC",secondary:"#3A86FF",accent:"#FFBE0B",background:"#F8F6FF",button:"#FF006E"},
  particles:["🎵","🎶","✨"],
  animation:"music",
  ambient:"xylophone",
  border:"notes"
},

Y:{
  name:"Yarn Village",
  palette:{primary:"#FFAFCC",secondary:"#A2D2FF",accent:"#CDB4DB",background:"#FFF9FC",button:"#BDE0FE"},
  particles:["🧶","🪡","🐑"],
  animation:"spin",
  ambient:"cozy",
  border:"knitting"
},

Z:{
  name:"Zebra Savannah",
  palette:{primary:"#6C584C",secondary:"#DDB892",accent:"#FFE8D6",background:"#FFF9F2",button:"#A98467"},
  particles:["🦓","🌾","☀️"],
  animation:"grass",
  ambient:"savannah",
  border:"grass"
}

};
