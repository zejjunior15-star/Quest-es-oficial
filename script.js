const questionBanks = {
  penal: [
    {id:1,article:"Art. 1º",question:"Não há crime sem lei anterior que o ______. Não há pena sem prévia cominação legal.",answer:"defina"},
    {id:2,article:"Art. 2º",question:"Ninguém pode ser punido por fato que lei posterior deixa de considerar ______, cessando em virtude dela a execução e os efeitos penais da sentença condenatória.",answer:"crime"},
    {id:3,article:"Art. 3º",question:"A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua ______.",answer:"vigência"},
    {id:4,article:"Art. 4º",question:"Considera-se praticado o crime no momento da ______ ou omissão, ainda que outro seja o momento do resultado.",answer:"ação"},
    {id:5,article:"Art. 5º",question:"Aplica-se a lei brasileira, sem prejuízo de convenções, tratados e regras de direito internacional, ao crime cometido no território ______.",answer:"nacional"},
    {id:6,article:"Art. 6º",question:"Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o ______.",answer:"resultado"},
    {id:7,article:"Art. 8º",question:"A pena cumprida no estrangeiro atenua a pena imposta no Brasil, quando diversas, ou nela é ______, quando idênticas.",answer:"computada"},
    {id:8,article:"Art. 10",question:"O dia do começo inclui-se no cômputo do prazo. Contam-se os dias, os meses e os anos pelo calendário ______.",answer:"comum"},
    {id:9,article:"Art. 12",question:"As regras gerais deste Código aplicam-se aos fatos incriminados por lei especial, se esta não ______ de modo diverso.",answer:"dispuser"},
    {id:10,article:"Art. 100",question:"A ação penal é pública, salvo quando a lei expressamente a declara ______.",answer:"privativa do ofendido"},
    {id:11,article:"Art. 102",question:"A representação será irretratável depois de oferecida a ______.",answer:"denúncia"},
    {id:12,article:"Art. 103",question:"Salvo disposição expressa em contrário, o ofendido decai do direito de queixa ou de representação se não o exerce dentro de ______ meses, contado do dia em que veio a saber quem é o autor do crime.",answer:"6 (seis)"},
    {id:13,article:"Art. 104",question:"O direito de queixa não pode ser exercido quando renunciado ______ ou expressamente.",answer:"tacitamente"},
    {id:14,article:"Art. 105",question:"O perdão do ofendido, nos crimes em que somente se procede mediante queixa, ______ a punibilidade quando aceito pelo querelado.",answer:"obsta"},
    {id:15,article:"Art. 118",question:"As penas mais leves ______ as mais graves.",answer:"prescrevem"},
    {id:16,article:"Art. 119",question:"No caso de concurso de crimes, a extinção da punibilidade incidirá sobre a pena de cada um, ______.",answer:"isoladamente"},
    {id:17,article:"Art. 120",question:"A sentença que conceder perdão judicial não será considerada para efeitos de ______.",answer:"reincidência"},
    {id:18,article:"Art. 121",question:"Art. 121 — ______ alguém: Pena — reclusão, de seis a vinte anos.",answer:"Matar"},
    {id:19,article:"Art. 121, §1º",question:"Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um ______ a um terço.",answer:"sexto"},
    {id:20,article:"Art. 129",question:"Art. 129 — ______ a integridade corporal ou a saúde de outrem: Pena — detenção, de três meses a um ano.",answer:"Ofender"},
    {id:21,article:"Art. 150",question:"Art. 150 — Entrar ou permanecer, clandestina ou ______, ou contra a vontade expressa ou tácita de quem de direito, em casa alheia ou em suas dependências: Pena — detenção, de um a três meses, ou multa.",answer:"astuciosamente"},
    {id:22,article:"Art. 154",question:"Art. 154 — Revelar alguém, sem ______, segredo, de que tem ciência em razão de função, ministério, ofício ou profissão, e cuja revelação possa produzir dano a outrem: Pena — detenção, de três meses a um ano, ou multa de um conto a dez contos de réis.",answer:"justa causa"},
    {id:23,article:"Art. 294",question:"Art. 294 — Fabricar, adquirir, fornecer, possuir ou guardar objeto especialmente destinado à ______ de qualquer dos papéis falsificados ou alterados, de que trata o artigo anterior: Pena — detenção, de um a três anos, e multa.",answer:"falsificação"},
    {id:24,article:"Art. 295",question:"Art. 295 — Se o agente é funcionário público, e comete o crime prevalecendo-se do cargo, aumenta-se a pena de ______.",answer:"sexta parte"},
    {id:25,article:"Art. 297",question:"Art. 297 — Falsificar, no todo ou em parte, documento ______, ou alterar documento público verdadeiro: Pena — reclusão, de dois a seis anos, e multa.",answer:"público"},
    {id:26,article:"Art. 298",question:"Art. 298 — Falsificar, no todo ou em parte, documento particular ou alterar documento particular ______: Pena — reclusão, de um a cinco anos, e multa.",answer:"verdadeiro"},
    {id:27,article:"Art. 304",question:"Art. 304 — Fazer uso de qualquer dos papéis falsificados ou alterados, a que se referem os arts. 297 a 302: Pena — a ______ para falsificação ou alteração.",answer:"cominada"},
    {id:28,article:"Art. 307",question:"Art. 307 — Atribuir-se ou atribuir a terceiro falsa identidade para obter ______, em proveito próprio ou alheio, ou para causar dano a outrem: Pena — detenção, de três meses a um ano, ou multa.",answer:"vantagem"},
    {id:29,article:"Art. 312",question:"Art. 312 — Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do ______, ou desviá-lo, em proveito próprio ou alheio: Pena — reclusão, de dois a doze anos, e multa.",answer:"cargo"},
    {id:30,article:"Art. 359",question:"Art. 359 — Exercer função, atividade, direito, autoridade ou múnus, de que foi suspenso ou ______ por decisão judicial: Pena — detenção, de três meses a dois anos, ou multa.",answer:"privado"},
    {id:31,article:"Art. 5º, §1º",question:"A lei brasileira aplica-se aos crimes cometidos no território nacional, sem prejuízo das convenções, tratados e regras de direito internacional. O território brasileiro, para os efeitos penais, compreende também as hipóteses de ______ previstas no §1º.",answer:"extensão"},
    {id:32,article:"Art. 7º",question:"Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro, os crimes que o próprio artigo ______ em suas hipóteses de extraterritorialidade.",answer:"enumera"},
    {id:33,article:"Art. 9º",question:"A sentença estrangeira, quando a aplicação da lei brasileira produz na espécie as mesmas consequências, pode ser ______ para efeitos civis e para sujeitar o condenado a medida de segurança.",answer:"homologada"},
    {id:34,article:"Art. 11",question:"Desprezam-se, nas penas privativas de liberdade e nas restritivas de direitos, as ______ de dia e, na pena de multa, as frações de cruzeiro.",answer:"frações"},
    {id:35,article:"Art. 100, §1º",question:"A ação pública é promovida pelo ______, dependendo, quando a lei o exige, de representação do ofendido ou de requisição do Ministro da Justiça.",answer:"Ministério Público"},
    {id:36,article:"Art. 100, §2º",question:"A ação de iniciativa privada é promovida mediante ______ do ofendido ou de quem tenha qualidade para representá-lo.",answer:"queixa"},
    {id:37,article:"Art. 106",question:"O perdão, no processo ou fora dele, expresso ou tácito, é ______ pelo querelado.",answer:"recusável"},
    {id:38,article:"Art. 107",question:"Extingue-se a punibilidade pela ______, perempção ou pela morte do agente, entre outras hipóteses legais.",answer:"renúncia"},
    {id:39,article:"Art. 109",question:"A prescrição, antes de transitar em julgado a sentença final, regula-se pelo máximo da pena ______ cominada ao crime.",answer:"abstratamente"},
    {id:40,article:"Art. 110",question:"A prescrição depois de transitar em julgado a sentença condenatória regula-se pela pena ______ e verifica-se nos prazos fixados no artigo anterior.",answer:"aplicada"},
    {id:41,article:"Art. 111",question:"A prescrição, antes de transitar em julgado a sentença final, começa a correr, em regra, do dia em que o crime se ______.",answer:"consumou"},
    {id:42,article:"Art. 114",question:"A prescrição da pena de multa ocorrerá em ______ prazo de dois anos, quando a multa for a única cominada ou aplicada.",answer:"único"},
    {id:43,article:"Art. 117",question:"O curso da prescrição interrompe-se pelo recebimento da denúncia ou da ______.",answer:"queixa"},
    {id:44,article:"Art. 121, §2º",question:"No homicídio qualificado, a pena é de reclusão, de ______ a trinta anos.",answer:"doze"},
    {id:45,article:"Art. 121, §3º",question:"Se o homicídio é culposo, a pena é de ______, de um a três anos.",answer:"detenção"},
    {id:46,article:"Art. 121, §4º",question:"No homicídio culposo, a pena é aumentada de ______, se o crime resulta de inobservância de regra técnica de profissão, arte ou ofício.",answer:"1/3 (um terço)"},
    {id:47,article:"Art. 297, §2º",question:"Para os efeitos penais, equipara-se a documento público o ______, o livro mercantil e o testamento particular.",answer:"testamento marítimo"},
    {id:48,article:"Art. 299",question:"Art. 299 — Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir ou fazer inserir declaração ______ de fato juridicamente relevante: Pena — reclusão, de um a cinco anos, e multa, se o documento é público; e reclusão de um a três anos, e multa, se o documento é particular.",answer:"falsa"},
    {id:49,article:"Art. 311-A",question:"Utilizar ou divulgar, indevidamente, com o fim de beneficiar a si ou a outrem, ou de comprometer a credibilidade do ______, conteúdo sigiloso de concurso público ou processo seletivo para ingresso no ensino superior.",answer:"concurso"},
    {id:50,article:"Art. 312, §3º",question:"Se o funcionário repara o dano antes da sentença irrecorrível, extingue-se a punibilidade; se lhe é posterior, reduz-se de ______ a pena imposta.",answer:"metade"},
    {id:51,article:"Art. 316",question:"Art. 316 — ______, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida: Pena — reclusão, de 2 (dois) a 12 (doze) anos, e multa.",answer:"Exigir"},
    {id:52,article:"Art. 325",question:"Art. 325 — ______ fato de que tem ciência em razão do cargo e que deva permanecer em segredo, ou facilitar-lhe a revelação: Pena — detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave.",answer:"Revelar"}
  ],

  improbidade: [
    {id:53,article:"Lei 8.429/92 — Art. 9º",question:"Constitui ato de improbidade administrativa importando em enriquecimento ilícito auferir, mediante a prática de ato ______, qualquer tipo de vantagem patrimonial indevida em razão do exercício de cargo, de mandato, de função, de emprego ou de atividade nas entidades referidas no art. 1º desta Lei.",answer:"doloso"},
    {id:54,article:"Lei 8.429/92 — Art. 9º, I",question:"I — receber, para si ou para outrem, dinheiro, bem móvel ou imóvel, ou qualquer outra vantagem econômica, direta ou indireta, a título de comissão, percentagem, gratificação ou ______ de quem tenha interesse, direto ou indireto, que possa ser atingido ou amparado por ação ou omissão decorrente das atribuições do agente público;",answer:"presente"},
    {id:55,article:"Lei 8.429/92 — Art. 9º, II",question:"II — perceber vantagem econômica, direta ou indireta, para facilitar a aquisição, permuta ou locação de bem móvel ou imóvel, ou a contratação de serviços pelas entidades referidas no art. 1° por preço ______ ao valor de mercado;",answer:"superior"},
    {id:56,article:"Lei 8.429/92 — Art. 9º, III",question:"III — perceber vantagem econômica, direta ou indireta, para facilitar a alienação, permuta ou locação de bem público ou o fornecimento de serviço por ente estatal por preço ______ ao valor de mercado;",answer:"inferior"},
    {id:57,article:"Lei 8.429/92 — Art. 9º, IV",question:"IV — utilizar, em obra ou serviço particular, qualquer bem móvel, de propriedade ou à disposição de qualquer das entidades referidas no art. 1º desta Lei, bem como o trabalho de servidores, de empregados ou de ______ contratados por essas entidades;",answer:"terceiros"},
    {id:58,article:"Lei 8.429/92 — Art. 9º, V",question:"V — receber vantagem econômica de qualquer natureza, direta ou indireta, para tolerar a exploração ou a prática de jogos de azar, de lenocínio, de narcotráfico, de contrabando, de usura ou de qualquer outra atividade ilícita, ou aceitar ______ de tal vantagem;",answer:"promessa"},
    {id:59,article:"Lei 8.429/92 — Art. 9º, VI",question:"VI — receber vantagem econômica de qualquer natureza, direta ou indireta, para fazer declaração ______ sobre qualquer dado técnico que envolva obras públicas ou qualquer outro serviço ou sobre quantidade, peso, medida, qualidade ou característica de mercadorias ou bens fornecidos a qualquer das entidades referidas no art. 1º desta Lei;",answer:"falsa"},
    {id:60,article:"Lei 8.429/92 — Art. 9º, VII",question:"VII — adquirir, para si ou para outrem, no exercício de mandato, de cargo, de emprego ou de função pública, e em razão deles, bens de qualquer natureza, decorrentes dos atos descritos no caput deste artigo, cujo valor seja desproporcional à evolução do patrimônio ou à ______ do agente público, assegurada a demonstração pelo agente da licitude da origem dessa evolução;",answer:"renda"},
    {id:61,article:"Lei 8.429/92 — Art. 9º, VIII",question:"VIII — aceitar emprego, comissão ou exercer atividade de consultoria ou assessoramento para pessoa física ou jurídica que tenha interesse suscetível de ser atingido ou amparado por ação ou omissão decorrente das atribuições do agente público, durante a ______;",answer:"atividade"},
    {id:62,article:"Lei 8.429/92 — Art. 9º, IX",question:"IX — perceber vantagem econômica para intermediar a liberação ou aplicação de ______ pública de qualquer natureza;",answer:"verba"},
    {id:63,article:"Lei 8.429/92 — Art. 9º, X",question:"X — receber vantagem econômica de qualquer natureza, direta ou indiretamente, para ______ ato de ofício, providência ou declaração a que esteja obrigado;",answer:"omitir"},
    {id:64,article:"Lei 8.429/92 — Art. 9º, XI",question:"XI — incorporar, por qualquer forma, ao seu patrimônio bens, rendas, verbas ou valores integrantes do ______ patrimonial das entidades mencionadas no art. 1° desta lei;",answer:"acervo"},
    {id:65,article:"Lei 8.429/92 — Art. 9º, XII",question:"XII — usar, em proveito próprio, bens, rendas, verbas ou valores integrantes do acervo ______ das entidades mencionadas no art. 1° desta lei.",answer:"patrimonial"},
    {id:66,article:"Lei 8.429/92 — Art. 13",question:"A posse e o exercício de agente público ficam condicionados à apresentação de declaração de imposto de renda e proventos de qualquer natureza, que tenha sido apresentada à Secretaria Especial da Receita Federal do Brasil, a fim de ser ______ no serviço de pessoal competente.",answer:"arquivada"},
    {id:67,article:"Lei 8.429/92 — Art. 13, §2º",question:"§ 2º A declaração de bens a que se refere o caput deste artigo será atualizada ______ e na data em que o agente público deixar o exercício do mandato, do cargo, do emprego ou da função.",answer:"anualmente"},
    {id:68,article:"Lei 8.429/92 — Art. 13, §2º",question:"§ 2º A declaração de bens a que se refere o caput deste artigo será atualizada anualmente e na data em que o agente público deixar o exercício do mandato, do cargo, do emprego ou da ______.",answer:"função"},
    {id:69,article:"Lei 8.429/92 — Art. 13, §3º",question:"§ 3º Será apenado com a pena de ______, sem prejuízo de outras sanções cabíveis, o agente público que se recusar a prestar a declaração dos bens a que se refere o caput deste artigo dentro do prazo determinado ou que prestar declaração falsa.",answer:"demissão"},
    {id:70,article:"Lei 8.429/92 — Art. 13, §3º",question:"§ 3º Será apenado com a pena de demissão, sem prejuízo de outras sanções cabíveis, o agente público que se recusar a prestar a declaração dos bens a que se refere o caput deste artigo dentro do prazo ______ ou que prestar declaração falsa.",answer:"determinado"},
    {id:71,article:"Lei 8.429/92 — Art. 13, §3º",question:"§ 3º Será apenado com a pena de demissão o agente público que se recusar a prestar a declaração dos bens dentro do prazo determinado ou que prestar declaração ______.",answer:"falsa"},
    {id:72,article:"Lei 8.429/92 — Art. 9º, I",question:"No inciso I do art. 9º, a vantagem econômica pode ser recebida de forma direta ou ______.",answer:"indireta"},
    {id:73,article:"Lei 8.429/92 — Art. 9º, II",question:"No inciso II do art. 9º, a vantagem econômica pode ser direta ou indireta e está relacionada à facilitação da aquisição, permuta ou locação de bem móvel ou ______.",answer:"imóvel"},
    {id:74,article:"Lei 8.429/92 — Art. 9º, III",question:"No inciso III do art. 9º, a vantagem econômica está relacionada à facilitação da alienação, permuta ou locação de bem ______.",answer:"público"},
    {id:75,article:"Lei 8.429/92 — Art. 9º, IV",question:"O inciso IV do art. 9º trata da utilização, em obra ou serviço particular, de bem móvel pertencente ou à disposição das entidades referidas no art. 1º, bem como do trabalho de servidores, empregados ou ______ contratados por essas entidades.",answer:"terceiros"},
    {id:76,article:"Lei 8.429/92 — Art. 9º, V",question:"Entre as atividades ilícitas expressamente mencionadas no inciso V do art. 9º estão jogos de azar, lenocínio, narcotráfico, contrabando e ______.",answer:"usura"},
    {id:77,article:"Lei 8.429/92 — Art. 9º, VI",question:"O inciso VI do art. 9º menciona declaração falsa sobre dados técnicos que envolvam obras públicas ou qualquer outro serviço, ou sobre quantidade, peso, medida, qualidade ou característica de ______ ou bens fornecidos às entidades referidas no art. 1º.",answer:"mercadorias"},
    {id:78,article:"Lei 8.429/92 — Art. 9º, VII",question:"No inciso VII do art. 9º, é assegurada ao agente a demonstração da ______ da origem da evolução de seu patrimônio ou renda.",answer:"licitude"},
    {id:79,article:"Lei 8.429/92 — Art. 9º, VIII",question:"O inciso VIII do art. 9º menciona atividade de consultoria ou ______ para pessoa física ou jurídica que tenha interesse suscetível de ser atingido ou amparado pelas atribuições do agente público.",answer:"assessoramento"},
    {id:80,article:"Lei 8.429/92 — Art. 9º, IX",question:"O inciso IX do art. 9º trata da percepção de vantagem econômica para intermediar a liberação ou ______ de verba pública de qualquer natureza.",answer:"aplicação"},
    {id:81,article:"Lei 8.429/92 — Art. 9º, X",question:"O inciso X do art. 9º trata do recebimento de vantagem econômica para ______ ato de ofício, providência ou declaração a que o agente esteja obrigado.",answer:"omitir"},
    {id:82,article:"Lei 8.429/92 — Art. 9º, XI",question:"O inciso XI do art. 9º considera ato de improbidade incorporar ao patrimônio bens, rendas, verbas ou valores integrantes do ______ patrimonial das entidades mencionadas no art. 1º.",answer:"acervo"},
    {id:83,article:"Lei 8.429/92 — Art. 9º, XII",question:"O inciso XII do art. 9º trata do uso, em proveito próprio, de bens, rendas, verbas ou valores integrantes do acervo ______ das entidades mencionadas no art. 1º.",answer:"patrimonial"},
    {id:84,article:"Lei 8.429/92 — Art. 13",question:"A posse e o exercício de agente público ficam condicionados à apresentação de declaração de ______ e proventos de qualquer natureza.",answer:"imposto de renda"},
    {id:85,article:"Lei 8.429/92 — Art. 13",question:"A declaração de imposto de renda e proventos de qualquer natureza deve ter sido apresentada à Secretaria Especial da ______ do Brasil.",answer:"Receita Federal"},
    {id:86,article:"Lei 8.429/92 — Art. 13, §3º",question:"Além da recusa em prestar a declaração dos bens dentro do prazo determinado, também enseja a pena de demissão a prestação de declaração ______.",answer:"falsa"}
  ]
};

const info = {
  penal:{name:"Direito Penal",eyebrow:"DIREITO PENAL"},
  improbidade:{name:"Improbidade",eyebrow:"LEI DE IMPROBIDADE"}
};

const KEY="questoesoficial-progress-v3";
const $=id=>document.getElementById(id);
let state={subject:null,questions:[],index:0,answered:{},revealed:false};

function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return{}}}
function save(){const x=load();x[state.subject]=state.answered;localStorage.setItem(KEY,JSON.stringify(x))}
function stats(){let v=Object.values(state.answered),c=v.filter(x=>x==="correct").length,w=v.filter(x=>x==="wrong").length;return{c,w,a:c+w?Math.round(c/(c+w)*100):0}}
function render(){
  const q=state.questions[state.index]; if(!q)return;
  $("article").textContent=q.article;$("question").textContent=q.question;$("answer").textContent=q.answer;
  $("number").textContent=state.index+1;$("total").textContent=state.questions.length;
  const s=stats();$("correct").textContent=s.c;$("wrong").textContent=s.w;$("accuracy").textContent=s.a+"%";
  $("progress").style.width=((state.index+1)/state.questions.length*100)+"%";
  $("answerBox").classList.add("hidden");$("results").classList.add("hidden");$("reveal").classList.remove("hidden");state.revealed=false;
}
function openSubject(subject){
  state.subject=subject;state.questions=[...questionBanks[subject]];state.index=0;
  const p=load();state.answered=p[subject]||{};
  $("menu").classList.add("hidden");$("quiz").classList.remove("hidden");
  $("title").textContent=info[subject].name;$("eyebrow").textContent=info[subject].eyebrow;render();scrollTo(0,0);
}
function reveal(){state.revealed=true;$("answerBox").classList.remove("hidden");$("results").classList.remove("hidden");$("reveal").classList.add("hidden")}
function mark(r){state.answered[state.questions[state.index].id]=r;save();render();state.revealed=true;$("answerBox").classList.remove("hidden");$("results").classList.remove("hidden");$("reveal").classList.add("hidden")}
function next(){if(state.index<state.questions.length-1){state.index++;render()}}
function prev(){if(state.index>0){state.index--;render()}}
function shuffle(){for(let i=state.questions.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[state.questions[i],state.questions[j]]=[state.questions[j],state.questions[i]]}state.index=0;render()}
function reset(){if(confirm("Reiniciar o progresso desta matéria?")){state.answered={};save();state.index=0;render()}}
document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>openSubject(b.dataset.subject));
$("back").onclick=()=>{$("quiz").classList.add("hidden");$("menu").classList.remove("hidden");scrollTo(0,0)};
$("reveal").onclick=reveal;$("markWrong").onclick=()=>mark("wrong");$("markCorrect").onclick=()=>mark("correct");
$("next").onclick=next;$("prev").onclick=prev;$("shuffle").onclick=shuffle;$("reset").onclick=reset;
document.onkeydown=e=>{
 if($("quiz").classList.contains("hidden"))return;
 if(e.code==="Space"){e.preventDefault();if(!state.revealed)reveal()}
 if(e.key==="ArrowRight")next();if(e.key==="ArrowLeft")prev();
 if(e.key==="1"&&state.revealed)mark("wrong");if(e.key==="2"&&state.revealed)mark("correct");
};
$("penalCount").textContent=questionBanks.penal.length+" questões";
$("improbidadeCount").textContent=questionBanks.improbidade.length+" questões";
