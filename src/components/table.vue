<template>
  <div>
    <table>
      <tr v-for="ligne in grille">
        <td v-for="cellule in ligne"
          :class="cellule.clique && cellule.bombe ? 'white' : 'black'"
          @click="click(cellule)">{{cellule.bombe  ? 'Boum' : 'None'}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data () {
      const grille = []
      // Lignes
      for(var i = 0; i<16; i++){
      	// Cellules
        var ligne = []
        
        
      	for(var j = 0; j<16; j++){
      		ligne.push({
      			bombe: Math.random() < 0.30 ? true : false,
      			x: j,
      			y: i,
            clique: false,
          })
      
      	}
      	grille.push(ligne)

      }
      return {
      	grille: grille
      }
    },
    methods: {
    	click(cellule){
        cellule.clique = true
    	
      }
    }
  }
</script>

<style>
	.white{
		background-color: white
	}
	.black{
		background-color: black;
	}
  td {
    width: 30px;
    height:30px;
    font-size: 10px;
    color: black;
    }

</style>