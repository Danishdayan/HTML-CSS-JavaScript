function changeitem1(){

    var model = document.getElementById("Brand1").value;

    if(model == "select1")
    {
       document.getElementById("productimage1").src="";
            document.getElementById("productname1").innerHTML = "";
             document.getElementById("productdetail1").innerHTML = "";
      
    }
    if(model == "Metal Wall Art")
    {
       document.getElementById("productimage1").src = "Metal iron Leaf Wall.png";
      //  document.getElementById("productname1").innerHTML = "Metal Wall Art";


       document.getElementById("productdetail1").innerHTML = ("<li><b>Brand</b> :Gloster</li>" +"<li><b>Product Name</b> : Metal Iron Leaf Wall </li> "+"<li><b>DESCRIPTION</b>: Introducing our exquisite Metal Iron Wall Art  a perfect blend of sophistication, craftsmanship, and contemporary design to elevate the aesthetic appeal of your living spaces. Crafted with meticulous attention to detail, this stunning piece is not just decor; it's a statement. </li>"+ "<li><b>Price</b>$578 </li> ");    
    }


else if(model == "Mirror Art")
{
   document.getElementById("productimage1").src = "black-white-picture-gothic-mirror-with-word-eye-it_873925-14665.avif";
   // document.getElementById("productname1").innerHTML = "Mirror Art";


   document.getElementById("productdetail1").innerHTML = ("<li><b>Brand</b> :GLOSTER</li>" +"<li><b>Product Name</b> :black white picture gothic mirror </li> "+ "<li><b>price</b>: $300</li> ");
}





 else if(model == "PhotoFrame Art")
{
   document.getElementById("productimage1").src = "floral.png";
   // document.getElementById("productname1").innerHTML = "Experimotors";


   document.getElementById("productdetail1").innerHTML= ("<li><b>Brand</b> :GLOSTER</li>" +"<li><b>Product Name</b> : Floral  </li> "+"<li><b>DESCRIPTION</b>:Crafted with precision and attention to detail, each petal and leaf is delicately formed from high-quality metal, ensuring durability and longevity. The intricate design captures the essence of blooming florals, creating a visually striking and harmonious composition. </li>"+ "<li><b>Price</b> $590 </li> ");    
}




}



function changeitem2(){
    var model = document.getElementById("Brand2").value;

     if(model == "select2")
    {
       document.getElementById("productimage2").src="";
            document.getElementById("productname2").innerHTML = "";
             document.getElementById("productdetail2").innerHTML = "";
      
    }
    if(model == "Metal Wall Art")
    {
       document.getElementById("productimage2").src = "Metal Iron Flower Wall art.png";
      //  document.getElementById("productname2").innerHTML = "Metal Wall Art";

       document.getElementById("productdetail2").innerHTML = ("<li><b>Brand</b> : Gloster</li>" +"<li><b>Product Name</b> : Metal Iron Flower Wall art</li> "+ "<li><b>DESCRIPTION</b>: Introducing our Metal Iron Flower Wall Art – a delicate fusion of nature-inspired beauty and industrial craftsmanship. Immerse your living spaces in the charm of blossoming flowers, intricately crafted from high-quality iron to bring a touch of elegance and sophistication to your walls.</li>"+ "<li><b>Price</b>$300  </li> ")      
    }


    else if(model == "Mirror Art")
    {
       document.getElementById("productimage2").src= "churchgate-round-wall-mirror-80cm-brown.jpg";
       document.getElementById("productname2").innerHTML = "Mirror Art";

       document.getElementById("productdetail2").innerHTML = ("<li><b>Brand</b> :GLOSTER</li>" +"<li><b>Product Name</b> :churchate round wall mirrorg</li> "+ "<li><b>DESCRIPTION</b> :Introducing the Churchate Round Wall Mirror  a timeless blend of classic design and contemporary elegance. This exquisite mirror not only reflects your image but also adds a touch of sophistication to your living spaces. Crafted with precision and attention to detail, the Churchate Round Wall Mirror is a stunning addition to any room, making a statement with its refined aesthetics.</li>"+ "<li><b>Price</b>$1000 </li> </li>");
    }


   else if(model == "PhotoFrame Art")
    {
       document.getElementById("productimage2").src = "Set of 3 Historical Framed Art.png";
       document.getElementById("productname2").innerHTML = "PhotoFrame Art ";

       document.getElementById("productdetail2").innerHTML = ("<li><b>Brand</b> :Gloster</li>" +"<li><b>Product Name</b>: Set of 3 Historical Framed Art.png<li> "+ "<b>DESCRIPTION</b> :Introducing our exquisite Set of 3 Historical Framed Artworks, a captivating collection that effortlessly merges the past with the present. Each piece is carefully curated to transport you to different epochs, inviting you to explore the richness of history through art.</li>"+ "<li><b>Price</b>$600 </li> </li>");
    }

}



