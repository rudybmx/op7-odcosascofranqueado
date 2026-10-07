export interface Treatment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface Dentist {
  name: string;
  specialty: string;
  cro: string;
  photoUrl: string;
}

export interface Testimonial {
  name: string;
  text: string;
  treatment: string;
  rating: number;
}

export interface UnitData {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    googleMapsEmbed: string;
  };
  clinicalDirector: {
    name: string;
    cro: string;
  };
  cnpj: string;
  images: {
    heroBg: string;
    facade: string;
    reception: string;
    consulting: string;
  };
  treatments: Treatment[];
  dentists: Dentist[];
  testimonials: Testimonial[];
}

export const UNITS_DATA: Record<string, UnitData> = {
  belem: {
    id: "1",
    slug: "belem",
    name: "Belém",
    city: "Belém",
    state: "PA",
    phone: "(91) 3231-3040",
    whatsapp: "5591991140759",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na ODONTOCOMPANY BELÉM.",
    address: {
      street: "Avenida Tavares Bastos",
      number: "804",
      neighborhood: "Souza",
      city: "Belém",
      state: "PA",
      zipCode: "66615-006",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5830919904253!2d-48.4485501!3d-1.4258814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c60faf3dc724eb%3A0xe74e98f060bc004c!2sAv.%20Tavares%20Bastos%2C%20804%20-%20Marambaia%2C%20Bel%C3%A9m%20-%20PA%2C%2066615-006!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
    },
    clinicalDirector: {
      name: "Dr. Alexandre Belém",
      cro: "CRO-PA 9876"
    },
    cnpj: "12.345.678/0001-90",
    images: {
      heroBg: "/images/hero-bg.jpg",
      facade: "/images/estrutura/fachada.png",
      reception: "/images/estrutura/recepcao.png",
      consulting: "/images/estrutura/consultorio.png"
    },
    treatments: [
      {
        id: "implantes",
        title: "Implantes Dentários",
        description: "Recupere o prazer de sorrir e mastigar com implantes modernos e seguros realizados por especialistas renomados.",
        iconName: "Tooth",
        imageUrl: "/images/treatments/implantes.png"
      },
      {
        id: "aparelhos",
        title: "Aparelhos Ortodônticos",
        description: "Alinhamento perfeito para todas as idades, incluindo opções invisíveis e autoligáveis para maior conforto.",
        iconName: "Smiley",
        imageUrl: "/images/treatments/aparelhos.png"
      },
      {
        id: "clareamento",
        title: "Clareamento a Laser e Caseiro",
        description: "Sorriso mais branco e radiante de forma rápida, segura e com resultados visíveis desde a primeira sessão.",
        iconName: "Sun",
        imageUrl: "/images/treatments/clareamento.png"
      },
      {
        id: "proteses",
        title: "Próteses Dentárias",
        description: "Soluções fixas ou móveis personalizadas para devolver a harmonia, estética e funcionalidade do seu sorriso.",
        iconName: "ShieldCheck",
        imageUrl: "/images/treatments/proteses.png"
      },
      {
        id: "estetica",
        title: "Lentes de Contato e Facetas",
        description: "Correções estéticas sutis para transformar o formato, cor e alinhamento dos seus dentes com alta durabilidade.",
        iconName: "MagicWand",
        imageUrl: "/images/treatments/lentes.png"
      },
      {
        id: "geral",
        title: "Clínica Geral e Limpeza",
        description: "Prevenção, restaurações, remoção de tártaro e cuidados essenciais para manter a saúde bucal sempre em dia.",
        iconName: "Stethoscope",
        imageUrl: "/images/treatments/limpeza.png"
      }
    ],
    dentists: [
      {
        name: "Dr. Alexandre Belém",
        specialty: "Implantodontia & Reabilitação Oral",
        cro: "CRO-PA 9876",
        photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
      },
      {
        name: "Dra. Mariana Costa Diniz",
        specialty: "Ortodontia & Estética Dental",
        cro: "CRO-PA 10543",
        photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Gisele do Socorro",
        text: "Fui muito bem atendida desde a recepção até a consulta com o Dr. Alexandre. Fiz meu implante dentário lá e ficou perfeito, o atendimento é humanizado e a estrutura é nota 10. Recomendo muito!",
        treatment: "Implante Dentário",
        rating: 5
      },
      {
        name: "Mauro Sérgio Pinheiro",
        text: "Clínica excelente na Tavares Bastos. Faço meu tratamento de aparelho ortodôntico com a Dra. Mariana e ela é super atenciosa, explica tudo com paciência. O ambiente é limpo e moderno. Recomendo de olhos fechados.",
        treatment: "Aparelho Ortodôntico",
        rating: 5
      },
      {
        name: "Ana Beatriz Nazareno",
        text: "Atendimento maravilhoso e super rápido. Fiz clareamento dental a laser e a limpeza, o resultado superou minhas expectativas e o preço foi bem acessível. A equipe de recepção está de parabéns pelo carinho.",
        treatment: "Clareamento Dental",
        rating: 5
      }
    ]
  },
  campinas: {
    id: "2",
    slug: "campinas",
    name: "Campinas Centro",
    city: "Campinas",
    state: "SP",
    phone: "(19) 3455-8000",
    whatsapp: "5519999999999",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta na ODONTOCOMPANY CAMPINAS CENTRO.",
    address: {
      street: "Rua Francisco Glicério",
      number: "1200",
      neighborhood: "Centro",
      city: "Campinas",
      state: "SP",
      zipCode: "13012-000",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.289196160351!2d-47.06316222391447!3d-22.90367393774843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c627ee7535ab%3A0x7d02dc282ff19ad9!2sAv.%20Francisco%20Glic%C3%A9rio%2C%201200%20-%20Centro%2C%20Campinas%20-%20SP%2C%2013012-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
    },
    clinicalDirector: {
      name: "Dra. Patrícia Alencar Reis",
      cro: "CRO-SP 98765"
    },
    cnpj: "98.765.432/0001-10",
    images: {
      heroBg: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=2070&auto=format&fit=crop",
      facade: "/images/estrutura/fachada.png",
      reception: "/images/estrutura/recepcao.png",
      consulting: "/images/estrutura/consultorio.png"
    },
    treatments: [
      {
        id: "implantes",
        title: "Implantes Dentários",
        description: "Tecnologia de ponta para a substituição de dentes perdidos, recuperando a firmeza e naturalidade do sorriso.",
        iconName: "Tooth"
      },
      {
        id: "aparelhos",
        title: "Aparelhos Tradicionais e Estéticos",
        description: "Correção ortodôntica com braquetes metálicos, cerâmicos ou com os modernos alinhadores transparentes.",
        iconName: "Smiley"
      },
      {
        id: "clareamento",
        title: "Clareamento Odontológico",
        description: "Fórmula e técnicas exclusivas que garantem o clareamento seguro e duradouro sem agredir a gengiva.",
        iconName: "Sun"
      },
      {
        id: "proteses",
        title: "Próteses Dentárias",
        description: "Próteses móveis ou sobre implantes desenvolvidas sob medida com os melhores materiais do mercado.",
        iconName: "ShieldCheck"
      },
      {
        id: "canal",
        title: "Tratamento de Canal",
        description: "Procedimento preciso e indolor para salvar o dente natural, eliminando a dor e a infecção interna.",
        iconName: "FirstAid"
      },
      {
        id: "limpeza",
        title: "Profilaxia e Limpeza Profunda",
        description: "Prevenção de cáries e tártaros através de limpeza profissional com ultrassom e aplicação de flúor.",
        iconName: "Stethoscope"
      }
    ],
    dentists: [
      {
        name: "Dra. Patrícia Alencar Reis",
        specialty: "Ortodontia & Harmonização Facial",
        cro: "CRO-SP 98765",
        photoUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Dr. Anderson Souza Lima",
        specialty: "Clínica Geral & Periodontia",
        cro: "CRO-SP 87654",
        photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Fernanda Prado",
        text: "Muito satisfeita! Equipe atenciosa, clinica bem localizada e moderna. O tratamento de canal foi indolor.",
        treatment: "Canal",
        rating: 5
      },
      {
        name: "Guilherme Santos",
        text: "Coloquei aparelho aqui e já vejo muita diferença nos dentes. O atendimento da recepção é nota 10.",
        treatment: "Aparelho Ortodôntico",
        rating: 5
      },
      {
        name: "Juliana Mendes",
        text: "Excelente clínica! Fiz clareamento e gostei muito da presteza de toda a equipe médica.",
        treatment: "Clareamento Dental",
        rating: 5
      }
    ]
  }
};

export const DEFAULT_UNIT = "belem";

export function getUnitFromUrl(): UnitData {
  if (typeof window === "undefined") return UNITS_DATA[DEFAULT_UNIT];
  
  const params = new URLSearchParams(window.location.search);
  const unitSlug = params.get("unidade");
  
  if (unitSlug && UNITS_DATA[unitSlug]) {
    return UNITS_DATA[unitSlug];
  }
  
  // Alternativamente, se quiser rodar por rota ou subdomínio futuramente, a lógica pode ser expandida aqui
  return UNITS_DATA[DEFAULT_UNIT];
}
