let btnGenerar = document.getElementById('btnGenerar');
let btnCopiar = document.getElementById('copy');

const generarColor = () =>{
    let R = Math.floor(Math.random() * (16 - 0)) + 0;
    let r = Math.floor(Math.random() * (16 - 0)) + 0;
    let G = Math.floor(Math.random() * (16 - 0)) + 0;
    let g = Math.floor(Math.random() * (16 - 0)) + 0;
    let B = Math.floor(Math.random() * (16 - 0)) + 0;
    let b = Math.floor(Math.random() * (16 - 0)) + 0;

    return `#${R.toString(16)}${r.toString(16)}${G.toString(16)}${g.toString(16)}${B.toString(16)}${b.toString(16)}`;
};

btnGenerar.addEventListener('click', ()=>{
    document.getElementById('color').style.backgroundColor = generarColor();
    document.getElementById('codColor').value = generarColor().toUpperCase();
})

btnCopiar.addEventListener('click', ()=>{
    let codigo = document.getElementById('codColor').value;
    navigator.clipboard.writeText(codigo);
    Swal.fire({
        icon: 'success',
        title: 'Código copiado correctamente',
        width: 300,
        showConfirmButton: false,
        timer: 1500,
      })
})

