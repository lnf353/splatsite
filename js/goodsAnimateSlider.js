!function(){function e(e){for(var t=0;t<e.target.parentNode.children.length;t++)e.target.parentNode.children[t]==e.target&&(r=t);if(E(),v(e),"LI"==e.target.tagName&&(u=e.target,i=-960,e.clientX>=n.left+n.width?m=r*i:e.clientX<=n.left&&(m=r*i),S(e.target)),e.target==a){if(u==c.lastElementChild)return;S(u.nextElementSibling),u=u.nextElementSibling,i=-960,m=Math.max(m+i,h.length*i)}else if(e.target==d){if(u==c.children[0])return;S(u.previousElementSibling),u=u.previousElementSibling,i=960,m=Math.min(0,m+i)}g.style.marginLeft=m+"px"}var t,n,i,r,l,o,g=document.querySelector("#motherSliderBlock"),c=document.querySelector("#nameBlock"),a=document.querySelector("#rightArrow"),d=document.querySelector("#leftArrow"),h=document.querySelectorAll(".goods-slider-image__slide"),u=(document.querySelectorAll(".goods-name__text"),c.children[0]),m=0,f=c.children[0],s=0,S=function(e){f&&f.classList.remove("goods-name--hight-light"),f=e,f.classList.add("goods-name--hight-light")},E=function(){l=c.lastElementChild.getBoundingClientRect(),o=c.firstElementChild.getBoundingClientRect(),t=document.querySelector("#sizeControlBlock").getBoundingClientRect(),n=u.getBoundingClientRect()};E();var v=function(e){"LI"==e.target.tagName&&(s+=e.clientX>=n.left+n.width?-l.right+t.right:t.left-o.left),l.right>t.right&&"rightArrow"==e.target.id?s+=-l.right+t.right:o.left<t.left&&"leftArrow"==e.target.id&&(s+=t.left-o.left),c.style.marginLeft=s+"px"};a.addEventListener("click",e),d.addEventListener("click",e),c.addEventListener("click",e)}();
