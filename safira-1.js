
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { color } = require('./lib/color')
const PDFDocument = require('pdfkit');


module.exports = safira = async (safira, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
global.prefix = prefix
const isCmd = body.startsWith(prefix)
var budy4 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const command = budy4
var args = body.trim().split(/ +/).slice(1)
args = args.concat(['','','','','',''])
const pushname = m.pushName || "Sem nome"
const botNumber = await safira.decodeJid(safira.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ").trim()
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
	

// pra rodar qualquer comandos de outros bot

var safira = safira
var info = m
var SoDono = isCreator
var conn = safira
var mek = info
var Japa = conn
var aqua = conn
var sabrina = conn
var pl = conn
var emoji1 = `🩸`
var emoji2 = `🩸`
var anna = conn
var client = conn
var XeonBotInc = conn
var hg = conn

/////////////////


// Grupo
const groupMetadata = m.isGroup ? await safira.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = isBotAdmins
const isGroupAdmins = isAdmins

if(isBot) return

//Outras funcoes
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
const reply = (texto) => {
conn.sendMessage(from, { text: texto, mentions: [sender]}).catch(e => {
return reply("Erro..");
})
}
/////////////////////////////
       

// DELETAR ARQUIVO... \\
function DLT_FL(file) {
    try {
    fs.unlinkSync(file);
    } catch (error) {
    }
    }
/////////////////////////////


// RESPOSTAS \\
var Res_SoGrupo = "Este comando só deve ser utilizado em Grupos."
var Res_SoDono = "Este comando é apenas para o meu dono utilizar..."
var Res_SoAdm = "Só Administradores do grupo podem utilizar este comando.."
var Res_BotADM = "O Bot precisa ser Administrador do grupo para utilizar este comando..."
var Res_SoModoBN = `Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`
////////////////////////////


// FUNÇÕES DE MARCAÇÕES \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n = q.includes("@") ? menc_jid : sender
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


//=============DATA/HORA=============

const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

//=====================================

function calcularProximaData(diaSemanaDesejado) {
    var feriados = ["01/01", "02/02", "10/02", "14/02", "16/03", "29/03", "21/04", "28/04", "01/05", "30/05", "07/07", "07/09", "16/09", "12/10", "28/10", "02/11", "15/11", "20/11", "08/18", "25/12"];
    
    const dataAtual = new Date();
    let diaAtual = dataAtual.getDay();
    let diferencaDias = diaSemanaDesejado - diaAtual;
    
    if (diferencaDias < 0) {
        diferencaDias += 7;
    }
    
    dataAtual.setDate(dataAtual.getDate() + diferencaDias);
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const proximaData = `${dia}/${mes}`;
    
    if (feriados.includes(proximaData)) {
        return false;
    } else {
        return true;
    }
}

function verificardia(dia = "atual") {
    const data = new Date();
    let diaDaSemana;
    
    if(dia === "atual") {
        data.setDate(data.getDate() + 1);
        diaDaSemana = data.getDay();
    } else {
        diaDaSemana = dia;
    }

    if (diaDaSemana >= 1 && diaDaSemana <= 5) {
        return calcularProximaData(diaDaSemana);
    } else {
        return false;
    }
}



    //safira.readMessages([m.key])    
    // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗
    if (!isGroup && isCmd) console.log(
    color(`[${emoji2}] chat em privado [${emoji2}]`,'cyan'),'\n',
    color('⪼ NΙCK :','blue'),color(pushname,'cyan'),'\n',
    color('⪼ CМD :','blue'),color(body,'cyan'),'\n',
    color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
    color('⪼ DAТA :','blue'),color(dataa,'cyan'),'\n')

    // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
    if (isCmd && isGroup) console.log(
    color(`[${emoji2}] chat em grupo [${emoji2}]`,'cyan'),'\n',
    color('⪼ GRUPO :','blue'),color(groupName,'cyan'),'\n',
    color('⪼ NICK :','blue'),color(pushname,'cyan'),'\n',
    color('⪼ CMD :','blue'),color(body,'cyan'),'\n',
    color('⪼ HORA :','blue'),color(hora,'cyan'),'\n',
    color('⪼ DATA :','blue'),color(dataa,'cyan'),'\n')
    
    const caminhoArquivo = `./temp/${sender}.json`
    const caminhoArquivo2 = `./temp/2_${sender}.json`
    const caminhoArquivo3 = `./temp/3_${sender}.json`
    const enquete = [`Grupos` ,'Solicitar Historico',`Solicitar declaracao`, 'Horario de aulas', `Justificar falta`]
   
   

if(isGroup) return
{
if(budy4.includes("bom") && budy4.includes("dia")) 
reply("Bom dia, digite caic para iniciar seu atendimento.")
}
if(budy4.includes("boa") && budy4.includes("tarde")) {
reply("Boa tarde, digite caic para iniciar seu atendimento.")
}
if(budy4.includes("boa") && budy4.includes("noite")) {
reply("Boa noite, digite caic para iniciar seu atendimento. ")
}
if(budy4.includes("simone") || budy4.includes("diretora")) {
reply("wa.me/+5582982061656 Ao clicar no link acima você vai direto para a conversa com Simone.")
}      
if(fs.existsSync(caminhoArquivo3)) {
if(budy4 == "cancelar") {
await DLT_FL(caminhoArquivo3)
await reply(`Operação cancelada com sucesso`)
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
let dadosTemp = JSON.parse(fs.readFileSync(caminhoArquivo3))
if(dadosTemp.atual == 0) {
if(budy4 == "sim") {
if(!dadosTemp.motivo) return reply(`Voce não pode confirmar pois ainda não me informou o motivo`)
dadosTemp.atual = 1
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora voce poderia estar me informando o nome completo dele(a)?`})
}
dadosTemp.motivo = budy4
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(dadosTemp))
return reply(`O motivo dele(a) faltar é "${budy4}" ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o motivo correto`)
} else if(dadosTemp.atual == 1) {
if(budy4 == "sim") {
if(!dadosTemp.nome) return reply(`Voce não pode confirmar pois ainda não me informou o nome dele(a)`)
dadosTemp.atual = 2
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora você poderia estar me informando em qual serie o(a) ${dadosTemp.nome.split(" ")[0]} estuda?`})
}
dadosTemp.nome = budy4
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(dadosTemp))
return reply(`O nome dele(a) é "${budy4}" ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o nome correto`)
} else if(dadosTemp.atual == 2) { 

if(budy4 == "sim") {
if(!dadosTemp.serie) return reply(`Voce não pode confimar pois ainda não me informou a serie que ele(a) estuda`);
async function gerarTabelaAluno(safira, nome, serie, motivo) {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
        const buffer = Buffer.concat(buffers);
        await safira.sendMessage("120363263562586971@g.us", {
            document: buffer,
            mimetype: "application/pdf",
            fileName: `falta do ${nome.split(" ")[0]}.pdf`
        });
    });
    
    doc.text('Nome Completo do Aluno:', 50, 100);
    doc.text(nome, 50, 120);
    doc.text('Serie que o aluno frequenta:', 50, 150);
    doc.text(serie, 50, 170);
    doc.text('Motivo da falta:', 50, 200);
    doc.text(motivo, 50, 220);
    doc.end();
}
await gerarTabelaAluno(safira, `${dadosTemp.nome}`, `${dadosTemp.serie}`, `${dadosTemp.motivo}`);
await DLT_FL(caminhoArquivo3)
await safira.sendMessage(from, {text: `O motivo da falta do ${dadosTemp.nome.split(" ")[0]} foi enviado aos meus superiores, agradeço por estar nos avisando`})
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
dadosTemp.serie = budy4
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(dadosTemp))
return reply(`O(a) ${dadosTemp.nome.split(" ")[0]} estuda na serie "${budy4}" ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar a serie correta`)
}
}

if(budy4.includes("amanha") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia()
if(ad) return reply('Sim, amanhã tem aula')
if(!ad) return reply('Não, amanhã não tem aula')
}

if(budy4.includes("segunda") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(2)
if(ad) return reply('Sim, segunda tem aula')
if(!ad) return reply('não, segunda não tem aula')
}

if(budy4.includes("terca") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(3)
if(ad) return reply('Sim, terça tem aula')
if(!ad) return reply('não, terça não tem aula')
}

if(budy4.includes("quarta") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(4)
if(ad) return reply('Sim, quarta tem aula')
if(!ad) return reply('não, quarta não tem aula')
}

if(budy4.includes("quinta") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(5)
if(ad) return reply('Sim, quinta tem aula')
if(!ad) return reply('não, quinta não tem aula')
}

if(budy4.includes("sexta") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(6)
if(ad) return reply('Sim, sexta tem aula')
if(!ad) return reply('não, sexta não tem aula')
}

if(budy4.includes("domingo") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(1)
if(ad) return reply('Sim, domingo tem aula')
if(!ad) return reply('não, domingo não tem aula')
}

if(budy4.includes("sabado") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {
let ad = verificardia(7)
if(ad) return reply('Sim, sabado tem aula')
if(!ad) return reply('não, sabado não tem aula')
}

if(fs.existsSync(caminhoArquivo2)) {
if(budy4 == "cancelar") {
await DLT_FL(caminhoArquivo2)
await reply(`Operaçao cancelada com sucesso`)
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
let dadosTemp = JSON.parse(fs.readFileSync(caminhoArquivo2))
if(dadosTemp.atual == 0) { // NOME COMPLETO
if(budy4 == "sim") {
if(!dadosTemp.nome) return reply(`Voce não pode confirmar pois ainda não me enviou o nome`)
dadosTemp.atual = 1
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para darmos continuacao poderia estar me informando a data de nascimento do(a) aluno(a)?`})
}
dadosTemp.nome = budy4
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O nome "${budy4}" esta correto ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o novo nome`)


} else if(dadosTemp.atual == 1) { // DATA DE NASCIMENTO 
if(budy4 == "sim") {
if(!dadosTemp.nascimento) return reply(`Voce não pode confirmar pois ainda não me informou a data de nascimento`)
dadosTemp.atual = 2
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para darmos continuação poderia estar me informando em qual serie o(a) aluno(a) esta?`})
}
dadosTemp.nascimento = budy4
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`A data "${budy4}" esta correta ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar a nova data de nascimento`)


} else if(dadosTemp.atual == 2) { // SERIE QUE FREQUENTA
if(budy4 == "sim") {
if(!dadosTemp.serie) return reply(`Voce não pode confirmar pois ainda não me informou a serie que o aluno estuda`)
dadosTemp.atual = 3
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return safira.sendPoll(from, "Agora poderia me informar qual seria o motivo da declaracao?\n\n\nOpcoes abaixo:", [`1 - Bolsa Familia` ,'2 - Transferência',`3 - Trabalho`, '4 - Curso'])
}
dadosTemp.serie = budy4
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`A serie "${budy4}" esta correta ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar a nova serie`)



} else if(dadosTemp.atual == 3) { // MOTIVO DA DECLARAÇÃO
if(budy4 == "sim") {
if(!dadosTemp.motivo) return reply(`Voce não pode confirmar pois ainda não selecionou o motivo da declaração`)
dadosTemp.atual = 4
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para estarmos finalizando poderia me informar um numero de telefone para contato?`})
}
if(budy4 == "1") {
dadosTemp.motivo = "bolsa familia"
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O motivo da sua declaracao e "bolsa familia" ? \n\npara confirmar digite "sim" para corrigir basta selecionar outra opcao`)
} else if(budy4 == "2") {
dadosTemp.motivo = "transferencia"
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O motivo da sua declaracao e "transferencia" ? \n\npara confirmar digite "sim" para corrigir basta selecionar outra opcao`)
} else if(budy4 == "3") {
dadosTemp.motivo = "trabalho"
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O motivo da sua declaracao e "trabalho" ? \n\npara confirmar digite "sim" para corrigir basta selecionar outra opcao`)
} else if(budy4 == "4") {
dadosTemp.motivo = "curso"
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O motivo da sua declaracao e "curso" ? \n\npara confirmar digite "sim" para corrigir basta selecionar outra opcao`)
}
} else if(dadosTemp.atual == 4) { // TELEFONE

if(budy4 == "sim") {
if(!dadosTemp.telefone) return reply(`Voce não pode confimar pois ainda não me informou o numero de telefone`);
async function gerarTabelaAluno(safira, nome, telefone, nascimento, serie, motivo) {
    const doc = new PDFDocument();
    let buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
        const buffer = Buffer.concat(buffers);
        await safira.sendMessage("558296705326-1585481410@g.us", {
            document: buffer,
            mimetype: "application/pdf",
            fileName: `declaracao_${nome.split(" ")[0]}.pdf`
        });
    });
    
    doc.text('Nome Completo do Aluno:', 50, 100);
    doc.text(nome, 50, 120);
    doc.text('Numero de Telefone:', 50, 150);
    doc.text(telefone, 50, 170);
    doc.text('Data de Nascimento:', 50, 200);
    doc.text(nascimento, 50, 220);
    doc.text('Serie que o aluno frequenta:', 50, 250);
    doc.text(serie, 50, 270);
    doc.text('Motivo da declaracao:', 50, 300);
    doc.text(motivo, 50, 320);
    
    doc.end();
}
await gerarTabelaAluno(safira, `${dadosTemp.nome}`, `${dadosTemp.telefone}`, `${dadosTemp.nascimento}`, `${dadosTemp.serie}`, `${dadosTemp.motivo}`);
await DLT_FL(caminhoArquivo2)
await safira.sendMessage(from, {text: `As informacoes foram encaminhadas para os meus superiores e estaremos entrando em contato com voce o mais rapido possivel`})
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
dadosTemp.telefone = budy4
await fs.writeFileSync(caminhoArquivo2, JSON.stringify(dadosTemp))
return reply(`O numero de telefone "${budy4}" esta correto ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o novo numero`)
}
}
if(fs.existsSync(`./temp/${sender}.json`)) {
if(budy4 == "cancelar") {
await DLT_FL(`./temp/${sender}.json`)
await reply(`Operação cancelada com sucesso`)
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
let dadosTemp = JSON.parse(fs.readFileSync(`./temp/${sender}.json`))
if(dadosTemp.atual == 0) { // NOME COMPLETO

if(budy4 == "sim") {
if(!dadosTemp.nome) return reply(`Voce não pode confirmar pois ainda não me enviou o nome`)
dadosTemp.atual = 1
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para darmos continuacao poderia estar me informando a data de nascimento do(a) aluno(a)?`})
}
dadosTemp.nome = budy4
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return reply(`O nome "${budy4}" esta correto ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o novo nome`)
} else if(dadosTemp.atual == 1) { // DATA DE NASCIMENTO 

if(budy4 == "sim") {
if(!dadosTemp.nascimento) return reply(`Voce não pode confirmar pois ainda não me informou a data de nascimento`)
dadosTemp.atual = 2
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para darmos continuacao poderia estar me informando o ano no qual o(a) aluno(a) estudou na escola?`})
}
dadosTemp.nascimento = budy4
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return reply(`A data "${budy4}" esta correta ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar a nova data de nascimento`)
} else if(dadosTemp.atual == 2) { // ANO QUE ESTUDOU

if(budy4 == "sim") {
if(!dadosTemp.ano) return reply(`Voce não pode confirmar pois ainda não me informou em qual ano o aluno estudou na escola`)
dadosTemp.atual = 3
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return safira.sendMessage(from, {text: `Agora para estarmos finalizando poderia me informar um numero de telefone para contato?`})
}
dadosTemp.ano = budy4
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return reply(`O ano "${budy4}" esta correto ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o novo ano`)
} else if(dadosTemp.atual == 3) { // TELEFONE

if(budy4 == "sim") {
if(!dadosTemp.telefone) return reply(`Voce não pode confirmar pois ainda não me informou o numero de telefone`);
async function gerarTabelaAluno(safira, nome, telefone, nascimento, ano) {
    const doc = new PDFDocument();
    let buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
        const buffer = Buffer.concat(buffers);
        await safira.sendMessage("558296705326-1585481410@g.us", {
            document: buffer,
            mimetype: "application/pdf",
            fileName: `historico_${nome.split(" ")[0]}.pdf`
        });
    });
    
    doc.text('Nome Completo do Aluno:', 50, 100);
    doc.text(nome, 50, 120);
    doc.text('Numero de Telefone:', 50, 150);
    doc.text(telefone, 50, 170);
    doc.text('Data de Nascimento:', 50, 200);
    doc.text(nascimento, 50, 220);
    doc.text('Ano que estudou no colegio:', 50, 250);
    doc.text(ano, 50, 270);
    
    doc.end();
}
await gerarTabelaAluno(safira, `${dadosTemp.nome}`, `${dadosTemp.telefone}`, `${dadosTemp.nascimento}`, `${dadosTemp.ano}`);
await DLT_FL(`./temp/${sender}.pdf`)
await DLT_FL(`./temp/${sender}.json`)
await safira.sendMessage(from, {text: `As informacoes foram encaminhadas para os meus superiores e estaremos entrando em contato com voce o mais rapido possivel`})
return safira.sendPoll(from, "Posso estar lhe ajudando em mais alguma coisa ?", enquete)
}
dadosTemp.telefone = budy4
await fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosTemp))
return reply(`O numero de telefone "${budy4}" esta correto ? \n\npara confirmar digite "sim" caso queira corrigir basta enviar o novo numero`)
}
}
    
if(budy4.includes("amanha") && ( budy4.includes("havera") || budy4.includes("tera") || budy4.includes("ter") || budy4.includes("tem")) && budy4.includes("aula")) {

let ad = verificardia()

if(ad) return reply('Sim, amanhã tem aula')

if(!ad) return reply('Não, amanhã não tem aula')

}
  if(isGroup) return

{

if(budy4.includes(
    "oi": {
        return reply('Olá, como você está? digite caic para que eu possa mandar o menu.')
        break
    }
    'olá': {
        return reply(`Oi, tudo bem? Digite caic para que eu possa mandar o menu.`)
        break
    }
    'obrigada':
    'obrigado': {
        return reply(`De nada, obrigado por entrar em contato com nosso chatbot.`)
        break
    }
    'tudo bem?': {
        return reply(`Tudo ótimo, espero que esteja tudo bem com você também.`)
        break
    }
    'to bem': {
        return reply(`Que ótimo que você está bem.`)
        break
    })
   

               
          case 'soumaiscaic': {
                let byhiudy = `Agradecemos por entrar em contato com nosso chatbot, espero que eu possa te ajudar.`
                await safira.sendPoll(from, byhiudy, enquete)
                await safira.sendMessage(from,{audio: fs.readFileSync('./dados/audios/menu.mp3'), mimetype: 'audio/mpeg'})
            }
            break
                
 case 'caic': {
                let byhiudy = `Olá me chamou? 
em que eu posso te ajudar?.`
                await safira.sendPoll(from, byhiudy, enquete)
                await safira.sendMessage(from,{audio: fs.readFileSync('./dados/audios/menu.mp3'), mimetype: 'audio/mpeg'})
            }
            break )

{ budy4(enquete) {            

                case 'horario': {
                    await reply(`Abaixo estarei enviando um pdf com os horarios de nossas aulas`)
                    await safira.sendMessage(from,{document: fs.readFileSync('./dados/pdfs/h.pdf'), mimetype: 'application/pdf', fileName: "h.pdf"})
                    }
                break
        
        case 'grupos': {
                    await reply(`*Clique No Link Abaixo e Acesse Os nossos Grupos no whatsapp*\n\n https://linktr.ee/caicpilar`)
					 }
                break
                

         case 'historico': {
                    await safira.sendMessage(from, {text: `*Para darmos inicio a consulta de historico escolar eu estarei precisando de algumas informacoes, caso queira cancelar a consulta basta digitar "cancelar" a qualquer momento*\n\n*Primeiramente voce poderia me dizer o nome completo do(a) aluno(a) ?*`})
                    const json = {atual: 0}
                    await fs.writeFileSync(caminhoArquivo, JSON.stringify(json))
					 }
                break
                
                case 'declaracao': {
                    await safira.sendMessage(from, {text: `*Para darmos inicio ao processo de solicitacao de declaracao escolar eu estarei precisando de algumas informacoes, caso queira cancelar a consulta basta digitar "cancelar" a qualquer momento*\n\n*Primeiramente voce poderia me informar o nome completo do(a) aluno(a) ?*`})
                    const json = {atual: 0}
                    await fs.writeFileSync(caminhoArquivo2, JSON.stringify(json))
					 }
                break
                
               
        
              case 'justificar': {
               const json = {atual: 0}
await fs.writeFileSync(caminhoArquivo3, JSON.stringify(json))
return safira.sendMessage(from, {text: `*para justificar a falta do aluno irei precisar de algumas informações, caso queira cancelar basta digitar "cancelar" a qualquer momento*\n\n Primeiramente qual foi o motivo do aluno(a) não ter ido hoje?*`}, {quoted: info})
                  }
        break 
      };
  

console.log('Comando não reconhecido')
        
};