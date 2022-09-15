


let con = prompt('Буквы');
let baseObject ={
    a:"Alfa",
    b: "Bravo",
    c:"Charlie",
    d:"Delta", 
    e:"Echo",
    f:"Foxtrot",
    g:	"Golf",
    h:	"Hotel",
    i:	"India",
    j:	"Juliett",
    k:	"Kilo",  
    l:	"Lima",
     m:	"Mike",
     n:	"November",
     o:	"Oscar",
     p:	"Papa",
     q:	"Quebec",
     r:	"Romeo",
     s:	"Sierra",
     t:	"Tango",
     u:	"Uniform",
     v:	"Victor",
     w:	"Whiskey",
     x:	 "Xray",
     y:	"Yankee",
     z:	"Zulu",   
}
 
let alphabet ={
     A: "Alfa",     
     0: "Zero",
     B: "Bravo",   
     1:"One",
     C:"Charlie", 
     2:"Two",
     D:	"Delta",   
     3:"Three",
     E:"Echo",    
     4:"Four",
     F:	"Foxtrot", 
     5:"Five", 
     G:	"Golf",    
     6:"Six",
     H:	"Hotel",   
     7:"Seven",
     I:	"India",   
     8:"Eight", 
     J:	"Juliett", 
     9:"Niner",
     K:	"Kilo",
     L:	"Lima",
     M:	"Mike",
     N:	"November",
     O:	"Oscar",
     P:	"Papa",
     Q:	"Quebec",
     R:	"Romeo",
     S:	"Sierra",
     T:	"Tango",
     U:	"Uniform",
     V:	"Victor",
     W:	"Whiskey",
     X:	 "Xray",
     Y:	"Yankee",
     Z:	"Zulu",
     __proto__:baseObject
  
}

 for(let ani of con){
 
for(let key in alphabet){
 
 key = ani;

 console.log(`${alphabet[key]}`)

}
 }