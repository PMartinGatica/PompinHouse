const translations = {
  es: {
    nav: {
      location: "Ubicación",
      house: "La Casa",
      thingsToDo: "Qué Hacer",
      contact: "Contacto",
      services: "Servicios Recomendados"
    },
    hero: {
      welcome: "Bienvenido a PompinHouse",
      tagline: "Tu refugio en el Fin del Mundo",
      cta: "Ver ubicación"
    },
    location: {
      title: "¿Dónde estamos?",
      address: "Gobernador Cornero 325<br>Ushuaia, Tierra del Fuego",
      cards: {
        center: "Centro Ushuaia",
        airport: "Aeropuerto",
        museum: "Presidio",
        supermarket: "Supermercado",
        walking: "Caminando",
        driving: "En auto",
        minutes: "minutos",
        viewRoute: "Ver ruta"
      },
      openMaps: "Abrir en Google Maps"
    },
    stayInfo: {
      title: "Información de tu estadía",
      checkin: "Check-in",
      checkout: "Check-out",
      wifi: {
        title: "WiFi",
        network: "Red:",
        password: "Contraseña:",
        copy: "Copiar contraseña"
      },
      contact: {
        title: "Contacto",
        name: "Pablo",
        whatsapp: "WhatsApp",
        call: "Llamar"
      },
      footer: {
        contact: "Contacto",
        address: "Dirección",
        question: "¿Alguna duda? Escribime",
        whatsapp: "Abrir WhatsApp",
        madeWith: "Hecho con ❤️ en Ushuaia"
      },
      services: {
        title: "Servicios",
        heating: "Calefacción",
        kitchen: "Cocina equipada",
        bedding: "Ropa de cama",
        wifiHighSpeed: "WiFi alta velocidad"
      }
    },
    thingsToDo: {
      title: "Descubrí Ushuaia",
      subtitle: "Los mejores lugares a tu alcance",
      tabs: {
        trails: "Senderos",
        gastronomy: "Gastronomía",
        culture: "Cultura"
      },
      trails: {
        lagunaEsmeralda: {
          title: "Laguna Esmeralda",
          desc: "Sendero icónico de Ushuaia con vistas espectaculares de la laguna color esmeralda.",
          stats: {
            dist: "9 km (ida y vuelta)",
            time: "4-5 horas",
            diff: "Dificultad: Media",
            elev: "Desnivel: 220m",
            from: "18 km desde PompinHouse"
          }
        },
        glaciarMartial: {
          title: "Glaciar Martial",
          desc: "Sendero accesible con vistas panorámicas de Ushuaia y el canal Beagle.",
          stats: {
            dist: "2.6 km (sendero)",
            time: "1.5-2 horas",
            diff: "Dificultad: Baja-Media",
            elev: "Desnivel: 200m",
            from: "7 km desde PompinHouse"
          }
        },
        glaciarVinciguerra: {
          title: "Glaciar Vinciguerra",
          desc: "Trekking desafiante con recompensas increíbles: glaciar, laguna de los Témpanos.",
          stats: {
            dist: "14 km (sendero)",
            time: "8-9 horas",
            diff: "Dificultad: Alta",
            elev: "Desnivel: 650m",
            from: "7 km desde PompinHouse"
          }
        },
        parqueNacional: {
          title: "Parque Nacional TdF",
          desc: "El único parque nacional con costa marítima de Argentina. Imperdible.",
          stats: {
            dist: "Múltiples senderos",
            time: "Variada",
            diff: "Dificultad: Variada",
            elev: "Según sendero",
            from: "12 km desde PompinHouse"
          }
        },
        faro: {
          title: "Faro Les Eclaireurs",
          desc: "Icónico faro del Canal Beagle. Navegación con lobos marinos y aves.",
          stats: {
            dist: "Navegación en barco",
            time: "2-3 horas",
            diff: "Dificultad: Baja",
            elev: "Canal Beagle",
            from: "Desde puerto Ushuaia"
          }
        },
        caboSanPablo: {
          title: "Cabo San Pablo",
          desc: "Barco Desdemona varado. Paisaje único en la costa atlántica fueguina.",
          stats: {
            dist: "108 km desde Ushuaia",
            time: "Día completo",
            diff: "Dificultad: Baja",
            elev: "Requiere vehículo",
            from: "Costa Atlántica TdF"
          }
        }
      },
      gastronomy: {
        santos: {
          title: "Santos Bar",
          type: "Cervecería craft"
        },
        dublin: {
          title: "Bar Dublín",
          type: "Pub irlandés"
        },
        bodegon: {
          title: "Bodegón Fueguino",
          type: "Cocina tradicional"
        },
        isabel: {
          title: "Isabel al Disco",
          type: "Cordero patagónico"
        },
        tante: {
          title: "Tante Sara",
          type: "Café & Pastelería"
        },
        ramos: {
          title: "Ramos Generales",
          type: "Café histórico"
        }
      },
      culture: {
        presidio: {
          title: "Museo Marítimo y del Presidio",
          location: "Yaganes y Gob. Paz",
          desc: "Museo fascinante que cuenta la historia de Ushuaia desde la época de los pueblos originarios, pasando por la prisión más austral del mundo, hasta convertirse en la ciudad que es hoy. Imperdible para entender el contexto histórico del Fin del Mundo."
        }
      }
    },
    recommendedServices: {
      title: "Servicios de Confianza",
      subtitle: "Contactos verificados con descuento especial<br>para huéspedes de PompinHouse",
      guide: {
        name: "Marcos Vargas",
        role: "Guía de Montaña Certificado",
        specialtiesTitle: "Especialidades:",
        specialties: [
          "Laguna Esmeralda (guiado)",
          "Glaciar Vinciguerra",
          "Trekking personalizado",
          "Consultar precios"
        ],
        include: "Incluye: Transporte + Equipo + Seguridad + Fotos profesionales",
        discount: "Descuento especial<br><span class='text-sm font-normal'>mencionando PompinHouse</span>"
      },
      transport: {
        name: "Xalpen Transportes",
        role: "Traslados y Excursiones",
        servicesTitle: "Servicios:",
        services: [
          "Aeropuerto ↔ PompinHouse",
          "Parque Nacional TdF",
          "Lagos Fagnano y Escondido",
          "Traslados personalizados",
          "Consultar precios y disponibilidad"
        ],
        vehicle: "Vehículos: 4x4 + Van turística",
        discount: "10% OFF<br><span class='text-sm font-normal'>mencionando PompinHouse</span>"
      },
      disclaimer: "Nota: Servicios independientes recomendados. Precios orientativos actualizados a Diciembre 2024. PompinHouse no cobra comisión."
    },
    tips: {
      title: "Tips para tu estadía",
      weather: {
        title: "Clima y qué traer",
        temp: "Temperatura actual: 5-12°C",
        desc: "El clima en Ushuaia es variable incluso en verano. Vestite en capas y siempre llevá:",
        items: [
          "Campera impermeable",
          "Polar o buzo térmico",
          "Remera manga larga",
          "Pantalón largo (no jeans)",
          "Calzado impermeable",
          "Gorro y guantes",
          "Protector solar (sí, en serio!)"
        ],
        rain: "Lluvia posible todo el año"
      },
      hiking: {
        title: "Consejos para senderos",
        early: "Salí temprano (8-9 AM)",
        wind: "El viento aumenta por la tarde",
        bringTitle: "Llevá siempre:",
        bringItems: [
          "Agua (1.5L mínimo)",
          "Snacks energéticos",
          "Botiquín básico",
          "Celular cargado",
          "Bolsa para basura"
        ],
        offlineMap: "Descargá mapa offline",
        offlineMapDesc: "(Maps.me o similar)",
        alert: "Avisá a alguien tu ruta"
      },
      emergency: {
        title: "Contactos de emergencia",
        generalTitle: "Números de Emergencia Generales (Argentina)",
        generalItems: [
           "911 / 101: Policía y Emergencias Generales",
           "100: Bomberos (incendios, rescates)",
           "107: Emergencias Médicas (SAME)",
           "103: Defensa Civil"
        ],
        localTitle: "Contactos Específicos de Ushuaia",
        localItems: [
           "Defensa Civil Ushuaia: 103 (24hs)",
           "Policía: (02901) 421355",
           "Bomberos Cuartel Central: (02901) 421333"
        ],
        pabloTitle: "Pablo (PompinHouse):",
        whatsappCta: "WhatsApp"
      }
    }
  },
  en: {
    nav: {
      location: "Location",
      house: "The House",
      thingsToDo: "Things to Do",
      contact: "Contact",
      services: "Services"
    },
    hero: {
      welcome: "Welcome to PompinHouse",
      tagline: "Your refuge at the End of the World",
      cta: "See location"
    },
    location: {
      title: "Where are we?",
      address: "Gobernador Cornero 325<br>Ushuaia, Tierra del Fuego",
      cards: {
        center: "Ushuaia Center",
        airport: "Airport",
        museum: "Prison Museum",
        supermarket: "Supermarket",
        walking: "Walking",
        driving: "By car",
        minutes: "minutes",
        viewRoute: "View route"
      },
      openMaps: "Open in Google Maps"
    },
    stayInfo: {
      title: "Stay Information",
      checkin: "Check-in",
      checkout: "Check-out",
      wifi: {
        title: "WiFi",
        network: "Network:",
        password: "Password:",
        copy: "Copy password"
      },
      contact: {
        title: "Contact",
        name: "Pablo",
        whatsapp: "WhatsApp",
        call: "Call"
      },
      footer: {
        contact: "Contact",
        address: "Address",
        question: "Any questions? Text me",
        whatsapp: "Open WhatsApp",
        madeWith: "Made with ❤️ in Ushuaia"
      },
      services: {
        title: "Amenities",
        heating: "Heating",
        kitchen: "Equipped Kitchen",
        bedding: "Bedding included",
        wifiHighSpeed: "High-speed WiFi"
      }
    },
    thingsToDo: {
      title: "Discover Ushuaia",
      subtitle: "The best places within your reach",
      tabs: {
        trails: "Trails",
        gastronomy: "Gastronomy",
        culture: "Culture"
      },
      trails: {
        lagunaEsmeralda: {
          title: "Laguna Esmeralda",
          desc: "Iconic Ushuaia trail with spectacular views of the emerald-colored lagoon.",
          stats: {
            dist: "9 km (round trip)",
            time: "4-5 hours",
            diff: "Difficulty: Medium",
            elev: "Elevation gain: 220m",
            from: "18 km from PompinHouse"
          }
        },
        glaciarMartial: {
          title: "Martial Glacier",
          desc: "Accessible trail with panoramic views of Ushuaia and the Beagle Channel.",
          stats: {
            dist: "2.6 km (trail)",
            time: "1.5-2 hours",
            diff: "Difficulty: Low-Medium",
            elev: "Elevation gain: 200m",
            from: "7 km from PompinHouse"
          }
        },
        glaciarVinciguerra: {
          title: "Vinciguerra Glacier",
          desc: "Challenging trek with incredible rewards: glacier, Iceberg Lagoon.",
          stats: {
            dist: "14 km (trail)",
            time: "8-9 hours",
            diff: "Difficulty: High",
            elev: "Elevation gain: 650m",
            from: "7 km from PompinHouse"
          }
        },
        parqueNacional: {
          title: "Tierra del Fuego National Park",
          desc: "The only national park with maritime coast in Argentina. A must-see.",
          stats: {
            dist: "Multiple trails",
            time: "Various",
            diff: "Difficulty: Various",
            elev: "Depends on trail",
            from: "12 km from PompinHouse"
          }
        },
        faro: {
          title: "Les Eclaireurs Lighthouse",
          desc: "Iconic lighthouse of the Beagle Channel. Navigation with sea lions and birds.",
          stats: {
            dist: "Boat tour",
            time: "2-3 hours",
            diff: "Difficulty: Low",
            elev: "Beagle Channel",
            from: "From Ushuaia port"
          }
        },
        caboSanPablo: {
          title: "Cabo San Pablo",
          desc: "Stranded Desdemona ship. Unique landscape on the Atlantic coast of Tierra del Fuego.",
          stats: {
            dist: "108 km from Ushuaia",
            time: "Full day",
            diff: "Difficulty: Low",
            elev: "Vehicle required",
            from: "Atlantic Coast TdF"
          }
        }
      },
      gastronomy: {
        santos: {
          title: "Santos Bar",
          type: "Craft Brewery"
        },
        dublin: {
          title: "Dublin Bar",
          type: "Irish Pub"
        },
        bodegon: {
          title: "Bodegón Fueguino",
          type: "Traditional Cuisine"
        },
        isabel: {
          title: "Isabel al Disco",
          type: "Patagonian Lamb"
        },
        tante: {
          title: "Tante Sara",
          type: "Cafe & Pastry"
        },
        ramos: {
          title: "Ramos Generales",
          type: "Historic Cafe"
        }
      },
      culture: {
        presidio: {
          title: "Maritime and Prison Museum",
          location: "Yaganes & Gob. Paz",
          desc: "Fascinating museum telling Ushuaia's history from native peoples, through the southernmost prison, to the city it is today. Essential for understanding the End of the World's context."
        }
      }
    },
    recommendedServices: {
      title: "Trusted Services",
      subtitle: "Verified contacts with special discount<br>for PompinHouse guests",
      guide: {
        name: "Marcos Vargas",
        role: "Certified Mountain Guide",
        specialtiesTitle: "Specialties:",
        specialties: [
          "Laguna Esmeralda (guided)",
          "Vinciguerra Glacier",
          "Custom Trekking",
          "Ask for prices"
        ],
        include: "Includes: Transport + Equipment + Safety + Professional Photos",
        discount: "Special discount<br><span class='text-sm font-normal'>mentioning PompinHouse</span>"
      },
      transport: {
        name: "Xalpen Transportes",
        role: "Transfers and Excursions",
        servicesTitle: "Services:",
        services: [
          "Airport ↔ PompinHouse",
          "Tierra del Fuego National Park",
          "Fagnano & Escondido Lakes",
          "Custom transfers",
          "Ask for prices and availability"
        ],
        vehicle: "Vehicles: 4x4 + Tourist Van",
        discount: "10% OFF<br><span class='text-sm font-normal'>mentioning PompinHouse</span>"
      },
      disclaimer: "Note: Recommended independent services. Indicative prices updated December 2024. PompinHouse charges no commission."
    },
    tips: {
      title: "Tips for your stay",
      weather: {
        title: "Weather & what to pack",
        temp: "Current Temp: 5-12°C",
        desc: "Weather in Ushuaia is variable even in summer. Dress in layers and always bring:",
        items: [
          "Waterproof jacket",
          "Fleece or thermal hoodie",
          "Long sleeve shirt",
          "Long pants (no jeans)",
          "Waterproof footwear",
          "Hat and gloves",
          "Sunscreen (yes, really!)"
        ],
        rain: "Rain possible all year"
      },
      hiking: {
        title: "Hiking Tips",
        early: "Start early (8-9 AM)",
        wind: "Wind picks up in the afternoon",
        bringTitle: "Always bring:",
        bringItems: [
          "Water (1.5L min)",
          "Energy snacks",
          "Basic first aid kit",
          "Charged phone",
          "Trash bag"
        ],
        offlineMap: "Download offline map",
        offlineMapDesc: "(Maps.me or similar)",
        alert: "Tell someone your route"
      },
      emergency: {
        title: "Emergency Contacts",
        generalTitle: "General Emergency Numbers (Argentina)",
        generalItems: [
           "911 / 101: Police & General Emergency",
           "100: Firefighters",
           "107: Medical Emergencies (SAME)",
           "103: Civil Defense"
        ],
        localTitle: "Ushuaia Specific Contacts",
        localItems: [
           "Civil Defense Ushuaia: 103 (24hs)",
           "Police: (02901) 421355",
           "Firefighters Main Station: (02901) 421333"
        ],
        pabloTitle: "Pablo (PompinHouse):",
        whatsappCta: "WhatsApp"
      }
    }
  },
  fr: {
    nav: {
      location: "Emplacement",
      house: "La Maison",
      thingsToDo: "A faire",
      contact: "Contact",
      services: "Services"
    },
    hero: {
      welcome: "Bienvenue à PompinHouse",
      tagline: "Votre refuge au Bout du Monde",
      cta: "Voir l'emplacement"
    },
    location: {
      title: "Où sommes-nous ?",
      address: "Gobernador Cornero 325<br>Ushuaia, Terre de Feu",
      cards: {
        center: "Centre d'Ushuaia",
        airport: "Aéroport",
        museum: "Musée du Bagne",
        supermarket: "Supermarché",
        walking: "À pied",
        driving: "En voiture",
        minutes: "minutes",
        viewRoute: "Voir l'itinéraire"
      },
      openMaps: "Ouvrir dans Google Maps"
    },
    stayInfo: {
      title: "Informations sur votre séjour",
      checkin: "Arrivée",
      checkout: "Départ",
      wifi: {
        title: "WiFi",
        network: "Réseau :",
        password: "Mot de passe :",
        copy: "Copier le mot de passe"
      },
      contact: {
        title: "Contact",
        name: "Pablo",
        whatsapp: "WhatsApp",
        call: "Appeler"
      },
      footer: {
        contact: "Contact",
        address: "Adresse",
        question: "Une question ? Écrivez-moi",
        whatsapp: "Ouvrir WhatsApp",
        madeWith: "Fait avec ❤️ à Ushuaia"
      },
      services: {
        title: "Services",
        heating: "Chauffage",
        kitchen: "Cuisine équipée",
        bedding: "Linge de lit inclus",
        wifiHighSpeed: "WiFi haut débit"
      }
    },
    thingsToDo: {
      title: "Découvrez Ushuaia",
      subtitle: "Les meilleurs endroits à votre portée",
      tabs: {
        trails: "Sentiers",
        gastronomy: "Gastronomie",
        culture: "Culture"
      },
      trails: {
        lagunaEsmeralda: {
          title: "Laguna Esmeralda",
          desc: "Sentier emblématique d'Ushuaia avec des vues spectaculaires sur la lagune émeraude.",
          stats: {
            dist: "9 km (aller-retour)",
            time: "4-5 heures",
            diff: "Difficulté : Moyenne",
            elev: "Dénivelé : 220m",
            from: "18 km de PompinHouse"
          }
        },
        glaciarMartial: {
          title: "Glacier Martial",
          desc: "Sentier accessible avec vues panoramiques sur Ushuaia et le canal Beagle.",
          stats: {
            dist: "2.6 km (sentier)",
            time: "1.5-2 heures",
            diff: "Difficulté : Basse-Moyenne",
            elev: "Dénivelé : 200m",
            from: "7 km de PompinHouse"
          }
        },
        glaciarVinciguerra: {
          title: "Glacier Vinciguerra",
          desc: "Trekking difficile avec récompenses incroyables : glacier, lagune des Icebergs.",
          stats: {
            dist: "14 km (sentier)",
            time: "8-9 heures",
            diff: "Difficulté : Haute",
            elev: "Dénivelé : 650m",
            from: "7 km de PompinHouse"
          }
        },
        parqueNacional: {
          title: "Parc National TdF",
          desc: "Le seul parc national avec côte maritime en Argentine. Incontournable.",
          stats: {
            dist: "Multiples sentiers",
            time: "Variable",
            diff: "Difficulté : Variable",
            elev: "Selon sentier",
            from: "12 km de PompinHouse"
          }
        },
        faro: {
          title: "Phare Les Eclaireurs",
          desc: "Phare emblématique du canal Beagle. Navigation avec otaries et oiseaux.",
          stats: {
            dist: "Tour en bateau",
            time: "2-3 heures",
            diff: "Difficulté : Basse",
            elev: "Canal Beagle",
            from: "Depuis le port d'Ushuaia"
          }
        },
        caboSanPablo: {
          title: "Cabo San Pablo",
          desc: "Navire Desdemona échoué. Paysage unique sur la côte atlantique fuégienne.",
          stats: {
            dist: "108 km d'Ushuaia",
            time: "Journée complète",
            diff: "Difficulté : Basse",
            elev: "Véhicule requis",
            from: "Côte Atlantique TdF"
          }
        }
      },
      gastronomy: {
        santos: {
          title: "Santos Bar",
          type: "Brasserie artisanale"
        },
        dublin: {
          title: "Bar Dublín",
          type: "Pub irlandais"
        },
        bodegon: {
          title: "Bodegón Fueguino",
          type: "Cuisine traditionnelle"
        },
        isabel: {
          title: "Isabel al Disco",
          type: "Agneau de Patagonie"
        },
        tante: {
          title: "Tante Sara",
          type: "Café & Pâtisserie"
        },
        ramos: {
          title: "Ramos Generales",
          type: "Café historique"
        }
      },
      culture: {
        presidio: {
          title: "Musée Maritime et du Bagne",
          location: "Yaganes & Gob. Paz",
          desc: "Musée fascinant racontant l'histoire d'Ushuaia, des peuples autochtones à la prison la plus australe du monde. Essentiel pour comprendre le contexte historique."
        }
      }
    },
    recommendedServices: {
      title: "Services de Confiance",
      subtitle: "Contacts vérifiés avec réduction spéciale<br>pour les hôtes de PompinHouse",
      guide: {
        name: "Marcos Vargas",
        role: "Guide de Montagne Certifié",
        specialtiesTitle: "Spécialités :",
        specialties: [
          "Laguna Esmeralda (guidé)",
          "Glacier Vinciguerra",
          "Trekking personnalisé",
          "Consulter les prix"
        ],
        include: "Inclus : Transport + Équipement + Sécurité + Photos pro",
        discount: "Réduction spéciale<br><span class='text-sm font-normal'>mentionnant PompinHouse</span>"
      },
      transport: {
        name: "Xalpen Transportes",
        role: "Transferts et Excursions",
        servicesTitle: "Services :",
        services: [
          "Aéroport ↔ PompinHouse",
          "Parc National TdF",
          "Lacs Fagnano & Escondido",
          "Transferts personnalisés",
          "Consulter prix et dispo"
        ],
        vehicle: "Véhicules : 4x4 + Van touristique",
        discount: "10% OFF<br><span class='text-sm font-normal'>mentionnant PompinHouse</span>"
      },
      disclaimer: "Note : Services indépendants recommandés. Prix indicatifs mis à jour en décembre 2024. PompinHouse ne prend aucune commission."
    },
    tips: {
      title: "Conseils pour votre séjour",
      weather: {
        title: "Météo et quoi apporter",
        temp: "Temp. actuelle : 5-12°C",
        desc: "La météo à Ushuaia est variable même en été. Habillez-vous en couches et emportez toujours :",
        items: [
          "Veste imperméable",
          "Polaire ou thermique",
          "Manches longues",
          "Pantalon long (pas de jeans)",
          "Chaussures imperméables",
          "Bonnet et gants",
          "Crème solaire (oui, vraiment !)"
        ],
        rain: "Pluie possible toute l'année"
      },
      hiking: {
        title: "Conseils de randonnée",
        early: "Partez tôt (8-9h)",
        wind: "Le vent se lève l'après-midi",
        bringTitle: "Emportez toujours :",
        bringItems: [
          "Eau (1.5L min)",
          "Snacks énergétiques",
          "Trousse de secours",
          "Téléphone chargé",
          "Sac poubelle"
        ],
        offlineMap: "Téléchargez carte hors ligne",
        offlineMapDesc: "(Maps.me ou similaire)",
        alert: "Prévenez quelqu'un de votre itinéraire"
      },
      emergency: {
        title: "Contacts d'urgence",
        generalTitle: "Numéros d'urgence généraux (Argentine)",
        generalItems: [
           "911 / 101 : Police et Secours",
           "100 : Pompiers",
           "107 : Urgences Médicales",
           "103 : Sécurité Civile"
        ],
        localTitle: "Contacts Spécifiques Ushuaia",
        localItems: [
           "Sécurité Civile Ushuaia : 103 (24h)",
           "Police : (02901) 421355",
           "Pompiers Centrale : (02901) 421333"
        ],
        pabloTitle: "Pablo (PompinHouse) :",
        whatsappCta: "WhatsApp"
      }
    }
  },
  pt: {
    nav: {
      location: "Localização",
      house: "A Casa",
      thingsToDo: "O que fazer",
      contact: "Contato",
      services: "Serviços"
    },
    hero: {
      welcome: "Bem-vindo ao PompinHouse",
      tagline: "Seu refúgio no Fim do Mundo",
      cta: "Ver localização"
    },
    location: {
      title: "Onde estamos?",
      address: "Gobernador Cornero 325<br>Ushuaia, Terra do Fogo",
      cards: {
        center: "Centro Ushuaia",
        airport: "Aeroporto",
        museum: "Presídio",
        supermarket: "Supermercado",
        walking: "A pé",
        driving: "De carro",
        minutes: "minutos",
        viewRoute: "Ver rota"
      },
      openMaps: "Abrir no Google Maps"
    },
    stayInfo: {
      title: "Informações da sua estadia",
      checkin: "Check-in",
      checkout: "Check-out",
      wifi: {
        title: "WiFi",
        network: "Rede:",
        password: "Senha:",
        copy: "Copiar senha"
      },
      contact: {
        title: "Contato",
        name: "Pablo",
        whatsapp: "WhatsApp",
        call: "Llamar"
      },
      footer: {
        contact: "Contacto",
        address: "Dirección",
        question: "¿Alguna duda? Escribime",
        whatsapp: "Abrir WhatsApp",
        madeWith: "Hecho con ❤️ en Ushuaia"
      },
      services: {
        title: "Comodidades",
        heating: "Aquecimento",
        kitchen: "Cozinha equipada",
        bedding: "Roupa de cama",
        wifiHighSpeed: "WiFi de alta velocidade"
      }
    },
    thingsToDo: {
      title: "Descubra Ushuaia",
      subtitle: "Os melhores lugares ao seu alcance",
      tabs: {
        trails: "Trilhas",
        gastronomy: "Gastronomia",
        culture: "Cultura"
      },
      trails: {
        lagunaEsmeralda: {
          title: "Laguna Esmeralda",
          desc: "Trilha icônica de Ushuaia com vistas espetaculares da lagoa cor de esmeralda.",
          stats: {
            dist: "9 km (ida e volta)",
            time: "4-5 horas",
            diff: "Dificuldade: Média",
            elev: "Desnível: 220m",
            from: "18 km do PompinHouse"
          }
        },
        glaciarMartial: {
          title: "Glaciar Martial",
          desc: "Trilha acessível com vistas panorâmicas de Ushuaia e do Canal de Beagle.",
          stats: {
            dist: "2.6 km (trilha)",
            time: "1.5-2 horas",
            diff: "Dificuldade: Baixa-Média",
            elev: "Desnível: 200m",
            from: "7 km do PompinHouse"
          }
        },
        glaciarVinciguerra: {
          title: "Glaciar Vinciguerra",
          desc: "Trekking desafiador com recompensas incríveis: glaciar, lagoa dos Tempanos.",
          stats: {
            dist: "14 km (trilha)",
            time: "8-9 horas",
            diff: "Dificuldade: Alta",
            elev: "Desnível: 650m",
            from: "7 km do PompinHouse"
          }
        },
        parqueNacional: {
          title: "Parque Nacional TdF",
          desc: "O único parque nacional com costa marítima da Argentina. Imperdível.",
          stats: {
            dist: "Múltiplas trilhas",
            time: "Variada",
            diff: "Dificuldade: Variada",
            elev: "Conforme a trilha",
            from: "12 km do PompinHouse"
          }
        },
        faro: {
          title: "Farol Les Eclaireurs",
          desc: "Farol icônico do Canal de Beagle. Navegação com leões marinhos e aves.",
          stats: {
            dist: "Passeio de barco",
            time: "2-3 horas",
            diff: "Dificuldade: Baixa",
            elev: "Canal de Beagle",
            from: "Do porto de Ushuaia"
          }
        },
        caboSanPablo: {
          title: "Cabo San Pablo",
          desc: "Navio Desdemona encalhado. Paisagem única na costa atlântica fueguina.",
          stats: {
            dist: "108 km de Ushuaia",
            time: "Dia completo",
            diff: "Dificuldade: Baixa",
            elev: "Requer veículo",
            from: "Costa Atlântica TdF"
          }
        }
      },
      gastronomy: {
        santos: {
          title: "Santos Bar",
          type: "Cervejaria Artesanal"
        },
        dublin: {
          title: "Bar Dublín",
          type: "Pub Irlandês"
        },
        bodegon: {
          title: "Bodegón Fueguino",
          type: "Culinária Tradicional"
        },
        isabel: {
          title: "Isabel al Disco",
          type: "Cordeiro Patagônico"
        },
        tante: {
          title: "Tante Sara",
          type: "Café e Confeitaria"
        },
        ramos: {
          title: "Ramos Generales",
          type: "Café Histórico"
        }
      },
      culture: {
        presidio: {
          title: "Museu Marítimo e do Presídio",
          location: "Yaganes e Gob. Paz",
          desc: "Museu fascinante que conta a história de Ushuaia desde os povos originários até o presídio mais austral do mundo. Essencial para entender o contexto histórico."
        }
      }
    },
    recommendedServices: {
      title: "Serviços de Confiança",
      subtitle: "Contatos verificados com desconto especial<br>para hóspedes do PompinHouse",
      guide: {
        name: "Marcos Vargas",
        role: "Guia de Montanha Certificado",
        specialtiesTitle: "Especialidades:",
        specialties: [
          "Laguna Esmeralda (guiado)",
          "Glaciar Vinciguerra",
          "Trekking personalizado",
          "Consultar preços"
        ],
        include: "Inclui: Transporte + Equipamento + Segurança + Fotos pro",
        discount: "Desconto especial<br><span class='text-sm font-normal'>mencionando PompinHouse</span>"
      },
      transport: {
        name: "Xalpen Transportes",
        role: "Traslados e Excursões",
        servicesTitle: "Serviços:",
        services: [
          "Aeroporto ↔ PompinHouse",
          "Parque Nacional TdF",
          "Lagos Fagnano e Escondido",
          "Traslados personalizados",
          "Consultar preços e disp."
        ],
        vehicle: "Veículos: 4x4 + Van turística",
        discount: "10% OFF<br><span class='text-sm font-normal'>mencionando PompinHouse</span>"
      },
      disclaimer: "Nota: Serviços independentes recomendados. Preços indicativos atualizados em Dezembro 2024. PompinHouse não cobra comissão."
    },
    tips: {
      title: "Dicas para sua estadia",
      weather: {
        title: "Clima e o que levar",
        temp: "Temp. atual: 5-12°C",
        desc: "O clima em Ushuaia é variável mesmo no verão. Vista-se em camadas e leve sempre:",
        items: [
          "Jaqueta impermeável",
          "Polar ou térmico",
          "Manga longa",
          "Calça comprida (não jeans)",
          "Calçado impermeável",
          "Gorro e luvas",
          "Protetor solar (sim, sério!)"
        ],
        rain: "Chuva possível o ano todo"
      },
      hiking: {
        title: "Dicas para trilhas",
        early: "Saia cedo (8-9h)",
        wind: "O vento aumenta à tarde",
        bringTitle: "Leve sempre:",
        bringItems: [
          "Água (1.5L min)",
          "Snacks energéticos",
          "Kit primeiros socorros",
          "Celular carregado",
          "Saco de lixo"
        ],
        offlineMap: "Baixe mapa offline",
        offlineMapDesc: "(Maps.me ou similar)",
        alert: "Avise alguém sua rota"
      },
      emergency: {
        title: "Contatos de emergência",
        generalTitle: "Números de Emergência Gerais (Argentina)",
        generalItems: [
           "911 / 101: Polícia e Emergência",
           "100: Bombeiros",
           "107: Emergências Médicas",
           "103: Defesa Civil"
        ],
        localTitle: "Contatos Específicos Ushuaia",
        localItems: [
           "Defesa Civil Ushuaia: 103 (24h)",
           "Polícia: (02901) 421355",
           "Bombeiros Central: (02901) 421333"
        ],
        pabloTitle: "Pablo (PompinHouse):",
        whatsappCta: "WhatsApp"
      }
    }
  }
};
