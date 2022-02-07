var sahis = prompt("Lutfen Yasinizi Giriniz") ;

if (sahis < 18){
alert("Kafeye Giremez");
}else if(sahis > 18 && sahis < 23){
alert("Kafeye Girebilirsin ama Alkol alamazsin");
}else {
alert("Kafeye girebilir ve Alkol alabilirsin");
}