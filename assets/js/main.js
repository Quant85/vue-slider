
/* Istruzioni:
Ricreare lo slider di immagini ma questa volta con Vue
Bonus ufficiale:
Facciamo in modo che il nostro slider scorra automaticamente in avanti,
e ogni 3 secondi visualizzi un immagine differente.
Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.
Possibili extra Bonus:
cliccando sui pallini visualizzeremo l'immagine corrispondente
cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini
I bonus metteteli in una cartella "bonus". */


let sliderMain = new Vue({
  el: "#slider_main",
  data: {
    immagini: ['assets/img/img1.jpg', 'assets/img/img2.jpg', 'assets/img/img3.jpg', 'assets/img/img4.jpg'],
    indexPosition: 0,
    keyCode: '',
  },
  methods : {
    next(){
      this.indexPosition++;
      if(this.indexPosition > this.immagini.length - 1){
          this.indexPosition = 0;
      }
    },
    prev(){
      this.indexPosition--;
      if(this.indexPosition < 0){
          this.indexPosition = this.immagini.length - 1;
      }
    },
    autoPlay() {
        setInterval(() => {
            this.next();
        }, 3000);
    },
    keyDown(){
      if (this.keyCode === 'ArrowLeft'){
        this.prev();
        
      } else if (this.keyCode === 'ArrowRight'){
        this.next();
        
      }
    }
  }, 
  mounted() {
      this.autoPlay();
  }
});

window.addEventListener('keydown', function(e) {
  sliderMain.keyCode = e.key;
  sliderMain.keyDown();
});
