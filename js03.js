var someone=50,x=1,y;
for(x=1;x<someone;x+=0.001)
{
    y=x.toFixed(3)*x.toFixed(3);
    if( y >= someone ) 
    {
        x-=0.001;
        break;
    }
}
console.log(x.toFixed(3),x.toFixed(3)*x.toFixed(3));