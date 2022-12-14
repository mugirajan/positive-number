var pos=parseInt(prompt("enter the pol value"));
c=0;
for(i=1;i<=pos;i++){
    var val=parseInt(prompt("enter the val value"));
        if(val>0){
            c=c+val;
        }
}
document.write(c);