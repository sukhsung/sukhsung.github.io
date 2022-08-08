//var mydata = JSON.parse(pubList);


/* <li><a href="https://doi.org/10.1038/ncomms5530">Atomically precise interfaces from stoichiometric deposition<br /><span class="gray"><i>Nature Communications,</i> 2014</span></a></li> */

                  
var container = document.getElementById( "testdiv" )

    
    
    
    
    

for (i=0; i<pubList.length; i++) {
    // make title
    var title = pubList[i].title
    
    // make newline element
    var br = document.createElement('br')

    // make info
    var span = document.createElement('span')

    var journal = document.createElement('i')
    journal.appendChild( document.createTextNode(pubList[i].journal))

    var year = document.createTextNode( ", " + pubList[i].year)

    span.appendChild( journal)
    span.appendChild( year )
    
    span.classList.add("gray")

    var li = document.createElement('li')
    // Create anchor element.
    var anchor = document.createElement('a'); 
    // Create the text node for anchor element.
    var link = document.createTextNode(title);
    
    // Append the text node to anchor element.
    anchor.appendChild(link); 
    // Set the href property.
    anchor.href = pubList[i].url; 
    // Set the title.
    anchor.title = pubList[i].title 
    anchor.classList.add("main")

    // Append the anchor element to the body.
    li.appendChild(anchor)
    li.appendChild(br)
    li.append(span)
    container.appendChild(li); 
    
    console.log( pubList[i].title )
}