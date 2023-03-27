
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
      key: "couch1",
      isActive: true,
      gallery: ["img/couch1/one.jpeg",
                "img/couch1/two.jpeg",
                "img/couch1/three.jpeg",
                "img/couch1/four.jpeg",
                "img/couch1/five.jpeg",
                "img/couch1/six.jpeg"],
      current: "img/couch1/one.jpeg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
      d1: "Ashley Furniture",
     },
     {
      key: "couch2",
      isActive: true,
      gallery: ["img/couch2/one.jpg",
                "img/couch2/two.jpg",
                "img/couch2/three.jpg",
                "img/couch2/four.jpg",
                "img/couch2/five.jpg",
                "img/couch2/six.jpg"],
      current: "img/couch2/one.jpg",
      index: 0,
      title: "Brown Sectional",
      price: "$1000",
     },
     {
      key: "couch3",
      isActive: true,
      gallery: ["img/couch3/one.jpg",
                "img/couch3/two.jpg",
                "img/couch3/three.jpg",
                "img/couch3/four.jpg",
                "img/couch3/five.jpg",
                "img/couch3/six.jpg"],
      current: "img/couch3/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch4",
      isActive: true,
      gallery: ["img/couch4/one.jpg",
                "img/couch4/two.jpg",
                "img/couch4/three.jpg",
                "img/couch4/four.jpg",
                "img/couch4/five.jpg",
                "img/couch4/six.jpg"],
      current: "img/couch4/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch5",
      isActive: true,
      gallery: ["img/couch5/one.jpg",
                "img/couch5/two.jpg",
                "img/couch5/three.jpg",
                "img/couch5/four.jpg",
                "img/couch5/five.jpg",
                "img/couch5/six.jpg"],      
      current: "img/couch5/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch6",
      isActive: true,
      gallery: ["img/couch6/one.jpg",
                "img/couch6/two.jpg",
                "img/couch6/three.jpg",
                "img/couch6/four.jpg",
                "img/couch6/five.jpg",
                "img/couch6/six.jpg"],      
      current: "img/couch6/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch7",
      isActive: true,
      gallery: ["img/couch7/one.jpg",
                "img/couch7/two.jpg",
                "img/couch7/three.jpg",
                "img/couch7/four.jpg",
                "img/couch7/five.jpg",
                "img/couch7/six.jpg"],      
      current: "img/couch7/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch8",
      isActive: true,
      gallery: ["img/couch8/one.jpg",
                "img/couch8/two.jpg",
                "img/couch8/three.jpg",
                "img/couch8/four.jpg",
                "img/couch8/five.jpg",
                "img/couch8/six.jpg"],      
      current: "img/couch8/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      gallery: ["img/couch9/one.jpg",
                "img/couch9/two.jpg",
                "img/couch9/three.jpg",
                "img/couch9/four.jpg",
                "img/couch9/five.jpg",
                "img/couch9/six.jpg"],      
      current: "img/couch9/one.jpg",
      key: "couch9",
      isActive: true,
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch10",
      isActive: true,
      gallery: ["img/couch10/one.jpg",
                "img/couch10/two.jpg",
                "img/couch10/three.jpg",
                "img/couch10/four.jpg",
                "img/couch10/five.jpg",
                "img/couch10/six.jpg"],      
      current: "img/couch10/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch11",
      isActive: true,
      gallery: ["img/couch11/one.jpg",
                "img/couch11/two.jpg",
                "img/couch11/three.jpg",
                "img/couch11/four.jpg",
                "img/couch11/five.jpg",
                "img/couch11/six.jpg"],      
      current: "img/couch11/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch12",
      isActive: true,
      gallery: ["img/couch12/one.jpg",
                "img/couch12/two.jpg",
                "img/couch12/three.jpg",
                "img/couch12/four.jpg",
                "img/couch12/five.jpg",
                "img/couch12/six.jpg"],      
      current: "img/couch12/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch13",
      isActive: true,
      gallery: ["img/couch13/one.jpg",
                "img/couch13/two.jpg",
                "img/couch13/three.jpg",
                "img/couch13/four.jpg",
                "img/couch13/five.jpg",
                "img/couch13/six.jpg"],      
      current: "img/couch13/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch14",
      isActive: true,
      gallery: ["img/couch14/one.jpg",
                "img/couch14/two.jpg",
                "img/couch14/three.jpg",
                "img/couch14/four.jpg",
                "img/couch14/five.jpg",
                "img/couch14/six.jpg"],      
      current: "img/couch14/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch15",
      isActive: true,
      gallery: ["img/couch15/one.jpg",
                "img/couch15/two.jpg",
                "img/couch15/three.jpg",
                "img/couch15/four.jpg",
                "img/couch15/five.jpg",
                "img/couch15/six.jpg"],      
      current: "img/couch15/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     {
      key: "couch16",
      isActive: true,
      gallery: ["img/couch16/one.jpg",
                "img/couch16/two.jpg",
                "img/couch16/three.jpg",
                "img/couch16/four.jpg",
                "img/couch16/five.jpg",
                "img/couch16/six.jpg"],      
      current: "img/couch16/one.jpg",
      index: 0,
      title: "Grey Sectional Couch with Storage Ottoman",
      price: "$800",
     },
     ],
    }
  },
    methods: {
      nextImage(couch){
          couch.isActive = true;
          couch.current = couch.gallery[couch.index + 1]
          couch.index = couch.index + 1;
          if(couch.gallery.length == couch.index){
            couch.index = 0;
            couch.current = couch.gallery[couch.index]        
          }
       
          
    },

    description(i){
      this.couches[i].isActive = false;
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
