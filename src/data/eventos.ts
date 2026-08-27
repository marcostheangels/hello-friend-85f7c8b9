export type Evento = {
  id: string;
  titulo: string;
  categoria: "Shows" | "Festas" | "Cultura" | "Esportes" | "Gastronomia";
  data: string;
  hora: string;
  local: string;
  preco: string;
  destaque?: boolean;
  descricao: string;
};

export const categorias = ["Todos", "Shows", "Festas", "Cultura", "Esportes", "Gastronomia"] as const;

export const eventos: Evento[] = [
  {
    id: "1",
    titulo: "Montes Claros Sertanejo Fest",
    categoria: "Shows",
    data: "12 SET",
    hora: "21h00",
    local: "Parque de Exposições João Alencar Athayde",
    preco: "A partir de R$ 60",
    destaque: true,
    descricao: "Uma noite com os maiores nomes do sertanejo em um palco 360º no coração do Norte de Minas.",
  },
  {
    id: "2",
    titulo: "Baile Retrô do Centro",
    categoria: "Festas",
    data: "19 SET",
    hora: "22h00",
    local: "Clube Montes Claros",
    preco: "R$ 40",
    descricao: "Flash back dos anos 80 e 90 com DJ ao vivo, open de chopp e pista aberta até o amanhecer.",
  },
  {
    id: "3",
    titulo: "Feira Gastronômica do Norte",
    categoria: "Gastronomia",
    data: "21 SET",
    hora: "11h00",
    local: "Praça da Matriz",
    preco: "Entrada gratuita",
    descricao: "Comidas típicas mineiras, food trucks, cervejas artesanais e música ao vivo o dia inteiro.",
  },
  {
    id: "4",
    titulo: "Festival de Teatro Montes Claros",
    categoria: "Cultura",
    data: "26 SET",
    hora: "19h30",
    local: "Centro Cultural Hermes de Paula",
    preco: "R$ 20",
    descricao: "Companhias locais e convidadas apresentam sete espetáculos ao longo do fim de semana.",
  },
  {
    id: "5",
    titulo: "Corrida da Cidade 10K",
    categoria: "Esportes",
    data: "04 OUT",
    hora: "06h30",
    local: "Avenida Deputado Esteves Rodrigues",
    preco: "R$ 85",
    descricao: "Percurso de 5K e 10K pelas principais avenidas, com kit atleta e medalha para todos.",
  },
  {
    id: "6",
    titulo: "Noite do Forró Pé de Serra",
    categoria: "Shows",
    data: "11 OUT",
    hora: "20h00",
    local: "Espaço Vila Norte",
    preco: "R$ 35",
    descricao: "Sanfona, zabumba e triângulo em uma noite dedicada ao melhor do forró raiz.",
  },
];
