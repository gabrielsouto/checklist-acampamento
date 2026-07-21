const base = ["Documento, reserva e regra do local confirmados", "Barraca, lona de chão, estacas e cordins", "Saco de dormir ou coberta e isolante", "Lanterna e pilhas/carga reserva", "Água potável e alimentos para todo o período", "Saco para trazer todo o lixo de volta", "Kit de primeiros socorros e medicamentos de uso pessoal", "Calçado fechado, chapéu/boné e protetor solar"];
function criarChecklist(noites, clima, estrutura) {
  const itens = [...base];
  if (Number(noites) >= 2) itens.push("Itens de higiene e troca extra de roupa", "Planejamento de conservação dos alimentos");
  if (Number(noites) >= 4) itens.push("Recarga portátil e plano de reabastecimento de água");
  if (clima === "chuva") itens.push("Capa de chuva, saco estanque e lona extra");
  if (clima === "frio") itens.push("Camadas de roupa, gorro e saco de dormir adequado ao frio");
  if (estrutura !== "completa") itens.push("Fogareiro somente se permitido, combustível compatível e utensílios");
  if (estrutura === "remota") itens.push("Mapa offline, contato de emergência e roteiro compartilhado", "Confirmação expressa de que o pernoite é permitido");
  return itens;
}
function textoLista(itens) { return itens.map(item => `☐ ${item}`).join("\n"); }
if (typeof document !== "undefined") { const form=document.querySelector('#form'), lista=document.querySelector('#lista'); const render=()=>{const d=new FormData(form), itens=criarChecklist(d.get('noites'),d.get('clima'),d.get('estrutura')); lista.innerHTML=`<p class="count">${itens.length} itens para conferir</p><ul>${itens.map(i=>`<li><label><input type="checkbox"> <span>${i}</span></label></li>`).join('')}</ul>`; document.querySelector('#copiar').onclick=async()=>{await navigator.clipboard.writeText(textoLista(itens)); const b=document.querySelector('#copiar'); b.textContent='Lista copiada!'; setTimeout(()=>b.textContent='Copiar lista',1600);};}; form.addEventListener('input',render); render(); }
if (typeof module !== "undefined" && module.exports) module.exports={criarChecklist,textoLista};
