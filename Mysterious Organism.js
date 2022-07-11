//Mysterious Organism
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(randNum,dnaArray) {
  return {
    specimenNum : randNum,
    dna : dnaArray,
    mutate(){
    let firstRand=returnRandBase();
    while (this.dna[0] == firstRand) { 
      firstRand=returnRandBase()

    }
    console.log(firstRand)
    this.dna[0]= firstRand;
    return this.dna;
    },
    compareDNA(pAequor){
      equalArr=this.dna.filter((element)=>{
        return pAequor.indexOf(element)>=0
      })
      return (equalArr.length/this.dna.length)*100 +"%"
    },
    willLikelySurvive(){
      let tempArr = [];
      tempArr=this.dna.map((element)=>{
        if ((element == 'G') || (element == 'C')) {
          return element
        };
      });
       tempsArrLength=tempArr.toString().replace(/,/g,'').length
       if (((tempsArrLength/this.dna.length)*100) > 60) 
       return true; 
       else 
       return false
    }
  }
}
objPaequor1=pAequorFactory()
objPaequor2=pAequorFactory()


objPaequor1.specimenNum=5
objPaequor1.dna=['C', 'C', 'T', 'T']
objPaequor2.specimenNum=5
objPaequor2.dna=['T', 'A', 'T', 'T']

let comparerusult=objPaequor1.compareDNA(objPaequor2.dna)

console.log(objPaequor1.willLikelySurvive())



