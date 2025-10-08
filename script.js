
function toggleMenu(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const style = getComputedStyle(nav);
  if(style.display === 'none'){ nav.style.display = 'flex'; nav.style.flexDirection='column'; }
  else { nav.style.display = 'none'; }
}
