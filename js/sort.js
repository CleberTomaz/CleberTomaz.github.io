
var tai = ['Minha fé',
'Acabou com o trabalho de Donatello',
'Acessível',
'Agradável',
'Airosa',
'Alterável',
'Ama animais (mas maltrata esse gadão aqui)',
'Ameaçadora',
'Amigável',
'Apaixonante',
'A pessoa mais bonita que já existiu',
'Aprazível',
'Apta',
'As expressões',
'Astuta',
'Atenciosa',
'Atraente',
'Beija bem',
'Bela',
'Boca maravilhosa',
'Cabelo maravilhoso',
'Cada detalhe do rosto lindo',
'Os olhos',
'As bochechas',
'O sorriso',
'Os lábios',
'O nariz',
'Cada segundo que eu tenho o privilégio de passar ao seu lado',
'Canta bem',
'Capaz de qualquer coisa',
'Cativante',
'Centenas de virtudes',
'Charmosa',
'Cheirosa',
'Complexa',
'Complicada',
'Contra o governo',
'Controladora',
'Corpo maravilhoso',
'Cozinha muito bem',
'Criativa',
'Curiosa',
'Dá atenção para meros mortais como eu',
'Dança muito bem',
'Desconsiderou Raphaello',
'Deslumbrante',
'Destruiu Michelangelo',
'Detém um rabão',
'Deusa',
'Diferente',
'Difícil de se lidar',
'Direta',
'Discute comigo',
'Disposta a aprender',
'Disposta a mudança',
'Dissímil',
'Divertida',
'Eclética',
'Educativa',
'Eficiente',
'É linda sem precisar de nada além de si mesma',
'Em constante evolução',
'Empenhada',
'Encantadora',
'Energia gigante',
'Engraçada',
'Enigmática',
'Entusiasta',
'Envolvente',
'Equação irresolvível',
'Escreve bem',
'Estonteante',
'Estudiosa',
'Estupenda',
'Excelente',
'Extraordinária',
'Extrovertida',
'Fala muito bem',
'Fala o que é necessário',
'Fantástica',
'Fascinante',
'Faz barulhinhos fofos',
'Faz maquiagens muito lindas (Apesar de não precisar)',
'Flexível',
'Formidável',
'Forte',
'Gostosa',
'Grossa',
'Guerreira',
'Habilidosa',
'Honesta',
'Honrada',
'Humilde',
'Humilhou Da Vinci',
'Impaciente',
'Impossível ficar triste quando vira as costas e vai embora',
'Impossível parar de olhar',
'Impressionante',
'Inaudita',
'Incrível',
'Indecifrável',
'Ininteligível',
'Inovadora',
'Insistente',
'Inspiradora',
'Insuperável',
'Íntegra',
'Inteligente',
'Interessante',
'Irresistível',
'James Cameron sente inveja dessa obra de arte',
'Justa',
'kkgostosa',
'Leal',
'Linda',
'Luta',
'Magnífica',
'Magnificente',
'Maravilhosa',
'Me ouve',
'Me proporcionou momentos maravilhosos',
'Misteriosa',
'Modelete',
'Não usa canudos',
'Natural',
'Notável',
'Nunca cansa',
'Nunca satura',
'Nunca se torna enjoativa',
'Obra de arte',
'Observadora',
'Olhos hipnotizantes',
'Organizada',
'Perfeita com defeitos',
'Personalidade forte',
'Poço de qualidades',
'Pode quebrar seu coração em um segundo',
'Pode reconstruir ele em meio segundo',
'Pode ter qualquer um com um estalo de dedos',
'Poliglota',
'Pontual',
'Porque eu amo ela',
'Portentosa',
'Possui um rabão',
'Programadora',
'Querida',
'Racional',
'Radiante',
'Rainha',
'Responsável',
'Revolucionária',
'Risada gostosa e boa de se ouvir',
'Rosto lindo',
'Se fosse uma música seria #1 na Billboard',
'Se fosse um jogo seria GOTY todos os anos',
'Se fosse um modelo político o mundo inteiro seria feliz',
'Se fosse um quadro estaria localizada no museu do Louvre',
'Se irrita fácil',
'Sem comparação',
'Sensata',
'Simples',
'Simples',
'Sincera',
'Sorriso esplêndido',
'Superdotada',
'Tem amigos maravilhosos',
'Tem um potencial gigantesco',
'Tem um rabão',
'Tentadora',
'Todo momento que olha pra mim',
'Todos os áudios que eu já tive o privilégio de ouvir',
'Única',
'Valente',
'Valiosa',
'Valorosa',
'Verdadeira',
'Viável',
'Voz maravilhosa',
'Zelosa',
'Minha esperança'];

function palavra() {
  var random = Math.floor(Math.random() * 175);
  var texto = tai[random];
  document.getElementById("palavra").innerHTML = '<label id="palavra">'+texto+'</label>';
}