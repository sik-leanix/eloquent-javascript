`<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>`
  function byTagName(node, tagName) {
   	let matches = [];
    const tagNameUpperCase = tagName.toUpperCase();
    
    const searchForMatches = node => {
    	for (let i = 0; i < node.childNodes.length; i++) {
        	let child = node.childNodes[i];
          	searchForMatches(child);
          	if (child.nodeName === tagNameUpperCase) {
              matches.push(child);
      }
     }
    };
    searchForMatches(node);
    return matches;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
`</script>`