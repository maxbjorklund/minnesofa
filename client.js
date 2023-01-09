
let emailList = [];

const addEmail = () => {
  let email = document.getElementById("footer__email").value;
  emailList.push(email);
  localStorage.setItem("MyEmailList", JSON.stringify(emailList))
  document.getElementById("footer__email").value = "success!"
}


Vue.createApp({
  data() {
    return {
      windowWidth: window.innerWidth,
     couches: [ {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch1",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
      hover: false,
     },
     {
      gallery: ["img/couch2/one.jpg" ,"img/couch2/two.jpg", "img/couch2/three.jpg", "img/couch2/four.jpg", "img/couch2/five.jpg", "img/couch2/six.jpg"],
      current: "img/couch2/one.jpg",
      key: "couch2",
      index: 0,
      title: "Brown Sectional",
      price: "$1000",
     },
     {
      gallery: ["img/couch3/one.jpg" ,"img/couch3/two.jpg", "img/couch3/three.jpg", "img/couch3/four.jpg", "img/couch3/five.jpg", "img/couch3/six.jpg"],
      current: "img/couch3/one.jpg",
      key: "couch3",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch4",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch5",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch6",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch7",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch1/one.jpeg" ,"img/couch1/two.jpeg", "img/couch1/three.jpeg", "img/couch1/four.jpeg", "img/couch1/five.jpeg", "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      key: "couch8",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     ],
    }
  },
    methods: {
      nextImage(i){
        if(i === "couch1"){
        this.couches[0].current = this.couches[0].gallery[this.couches[0].index + 1]
        this.couches[0].index = this.couches[0].index + 1;
        if(this.couches[0].index == 6){
          this.couches[0].index = 0;
          this.couches[0].current = this.couches[0].gallery[this.couches[0].index]        
        }

      }else if(i === "couch2"){
        this.couches[1].current = this.couches[1].gallery[this.couches[1].index + 1]
        this.couches[1].index = this.couches[1].index + 1;
        if(this.couches[1].index == 5){
          this.couches[1].index = 0;
          this.couches[1].current = this.couches[1].gallery[this.couches[1].index]        
        }
      }else if(i === "couch3"){
        this.couches[2].current = this.couches[2].gallery[this.couches[2].index + 1]
        this.couches[2].index = this.couches[2].index + 1;
        if(this.couches[2].index == 5){
          this.couches[2].index = 0;
          this.couches[2].current = this.couches[2].gallery[this.couches[2].index]        
        }
      }
    },

    displayArrow(i){
      this.couches[i].hover = true;
    },
    removeArrow(i){
      this.couches[i].hover = false;
    },


    scroll(){
      if(this.windowWidth < 599){
        if(this.couches.length == 6){ 
          window.scrollTo({ top: 2990, behavior: 'smooth' });
        }
        if(this.couches.length == 8){ 
          window.scrollTo({ top: 3840, behavior: 'smooth' });
        }
        if(this.couches.length == 10){ 
          window.scrollTo({ top: 4580, behavior: 'smooth' });
        }
        if(this.couches.length == 12){ 
          window.scrollTo({ top: 5480, behavior: 'smooth' });
        }
        if(this.couches.length == 14){ 
          window.scrollTo({ top: 6380, behavior: 'smooth' });
        }
        if(this.couches.length == 16){ 
          window.scrollTo({ top: 7280, behavior: 'smooth' });
        }
      }else if(this.windowWidth > 599 && this.windowWidth < 1030){
        if(this.couches.length == 6){ 
          window.scrollTo({ top: 3130, behavior: 'smooth' });
        }
        if(this.couches.length == 8){ 
          window.scrollTo({ top: 4080, behavior: 'smooth' });
        }
        if(this.couches.length == 10){ 
          window.scrollTo({ top: 5000, behavior: 'smooth' });
        }
        if(this.couches.length == 12){ 
          window.scrollTo({ top: 6000, behavior: 'smooth' });
        }
        if(this.couches.length == 14){ 
          window.scrollTo({ top: 7000, behavior: 'smooth' });
        }
        if(this.couches.length == 16){ 
          window.scrollTo({ top: 8000, behavior: 'smooth' });
        }
      }else if(this.windowWidth > 1030 && this.windowWidth < 1450){
        if(this.couches.length == 6){ 
          window.scrollTo({ top: 1820, behavior: 'smooth' });
        }
        if(this.couches.length == 8){ 
          window.scrollTo({ top: 2300, behavior: 'smooth' });
        }
        if(this.couches.length == 10){ 
          window.scrollTo({ top: 2780, behavior: 'smooth' });
        }
        if(this.couches.length == 12){ 
          window.scrollTo({ top: 3260, behavior: 'smooth' });
        }
        if(this.couches.length == 14){ 
          window.scrollTo({ top: 3740, behavior: 'smooth' });
        }
        if(this.couches.length == 16){ 
          window.scrollTo({ top: 4220, behavior: 'smooth' });
        }
      }else if(this.windowWidth > 1450 && this.windowWidth < 2000){
        if(this.couches.length < 25){ 
          window.scrollTo({ top: 3600, behavior: 'smooth' });
        }
        if(this.couches.length < 22){ 
          window.scrollTo({ top: 3200, behavior: 'smooth' });
        }
        if(this.couches.length < 16){ 
          window.scrollTo({ top: 2800, behavior: 'smooth' });
        }
        if(this.couches.length < 16){ 
          window.scrollTo({ top: 2400, behavior: 'smooth' });
        }
        if(this.couches.length < 13){ 
          window.scrollTo({ top: 2000, behavior: 'smooth' });
        }
        if(this.couches.length < 10){ 
          window.scrollTo({ top: 1600, behavior: 'smooth' });
        }
      }
      }
},
      computed: {

  },
}).mount('#app');
