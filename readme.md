
# Rotas

## Get

/foods - Lista opções de comida disponiveis 

## Post

/calc - Calcula quantidade de comida 


# Parâmetros

## /foods

query: {
 foodType
}

## /calc

body : { 
  **person, 
  children, 
  foods, 
  drinks
}

** Person = Número de **adultos** que vão comer
