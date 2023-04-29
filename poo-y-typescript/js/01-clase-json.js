var bicicleta = {
    color: 'Verde',
    modelo:'BMX',
    frenos:'De disco',
    velocidadMax:'50km',
    cambiarColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};

console.log(bicicleta);
bicicleta.cambiarColor('Azul');