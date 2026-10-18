const slides=[...document.querySelectorAll('.slide')];let index=0;
function fragments(){return [...slides[index].querySelectorAll('.fragment')].filter(x=>!x.classList.contains('shown'))}
function show(i){index=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,n)=>s.classList.toggle('active',n===index));document.querySelector('#counter').textContent=`${index+1} / ${slides.length}`;document.querySelector('#progress').style.width=`${(index+1)/slides.length*100}%`;history.replaceState(null,'',`#${index+1}`)}
function next(){const f=fragments();if(f.length){f[0].classList.add('shown');return}show(index+1)}
function prev(){const shown=[...slides[index].querySelectorAll('.fragment.shown')];if(shown.length){shown.at(-1).classList.remove('shown');return}show(index-1)}
document.querySelector('#next').onclick=next;document.querySelector('#prev').onclick=prev;document.querySelector('#fullscreen').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}if(e.key==='Home')show(0);if(e.key==='End')show(slides.length-1);if(e.key.toLowerCase()==='f')document.querySelector('#fullscreen').click()});
let touchX=0;addEventListener('touchstart',e=>touchX=e.touches[0].clientX);addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(dx<-60)next();if(dx>60)prev()});
const start=Math.max(0,Math.min(slides.length-1,(parseInt(location.hash.slice(1))||1)-1));show(start);

const states=[{v:['A','B','C','D','_'],m:[],n:'初始状态：准备在下标 2 插入 X。'},{v:['A','B','C','D','D'],m:[4],n:'先把最右侧的 D 搬到空位。'},{v:['A','B','C','C','D'],m:[3],n:'再把 C 向右搬一格。'},{v:['A','B','X','C','D'],m:[],x:2,n:'空位出现后，写入 X。'}];let a=0;
function arrayRender(){const s=states[a];document.querySelector('#array-demo').innerHTML=s.v.map((v,i)=>`<b data-index="${i}" class="${s.m.includes(i)?'moving':''} ${s.x===i?'inserted':''} ${v==='_'?'empty':''}">${v}</b>`).join('');document.querySelector('#array-label').textContent=`步骤 ${a+1} / 4`;document.querySelector('#array-note').textContent=s.n}
document.querySelectorAll('[data-array]').forEach(b=>b.onclick=()=>{if(b.dataset.array==='next')a=Math.min(3,a+1);if(b.dataset.array==='prev')a=Math.max(0,a-1);if(b.dataset.array==='reset')a=0;arrayRender()});arrayRender();
let w=-1;const walkNodes=[...document.querySelectorAll('#walk-chain b')];function walkRender(){walkNodes.forEach((n,i)=>n.classList.toggle('active',i===w));document.querySelector('#walk-status').textContent=w<0?'当前：head，尚未访问节点':`当前访问下标 ${w}，值为 ${[12,25,37,48][w]}`};document.querySelector('#walk-next').onclick=()=>{w=Math.min(3,w+1);walkRender()};document.querySelector('#walk-reset').onclick=()=>{w=-1;walkRender()};
const lc=document.querySelector('#link-chain'),ls=document.querySelector('#link-status');document.querySelector('#link-delete').onclick=()=>{lc.classList.add('deleted');ls.textContent='删除后：25 的 next 直接指向 48，随后释放节点 37。'};document.querySelector('#link-reset').onclick=()=>{lc.classList.remove('deleted');ls.textContent='删除前：25 的 next 指向 37'};

