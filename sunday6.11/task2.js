

for(let i=0; i<=4 ;i++)
{
    let x=i+1

    if(x==1)
    {
    console.log(x)
    }
else if (x==2)
{
    console.log(x,++x);
}
else if (x==3)
{
    console.log(++x,x+=1,x+=1);
}
else if (x==4)
{
  console.log(x+=3,x+=1,x+=1,x+=1)  
}

}
