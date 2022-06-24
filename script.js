function menu(x){
    if(x === menu){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('close').style.display = 'block';
    document.getElementById('l-links').style.display = 'block';
}
    else{
    document.getElementById('menu').style.display = 'block';
    document.getElementById('close').style.display = 'none';
    document.getElementById('l-links').style.display = 'none';
    }
}