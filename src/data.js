// Filtrado de patronus
export const filterPatronus = (data, prop) => {
    let arrayPatronus = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][prop]) {
        arrayPatronus.push({
          name: data[i].name,
          image: data[i].image,
          patronus: data[i].patronus
        });
      }
    }
    return arrayPatronus;
  };

  // Filtrado de Varitas
  export const filterVaritas = (data, propiedad) => {
    let arrayVaritas = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][propiedad]) {
        if (data[i].wand.wood !== ''){
          arrayVaritas.push({
            name: data[i].name,
            image: data[i].image,
            wand: {
              wood: data[i].wand.wood,
              core: data[i].wand.core,
            } }); 
         }
        
        
      }
    }
    return arrayVaritas;
  };

  
  //Filtrado de Roles y Casas
  export const filterRolesCasas = (data, propiedad, value) => {
    const newRoles = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][propiedad] === value) {
        newRoles.push({
          name: data[i].name,
          image: data[i].image,
        });
      }
    }
    return newRoles;
  };

  



  
  

