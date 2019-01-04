import { TWO_LEVELS } from '../constants'
import { secondLevelPostalCodes } from '../transforms/postalCodes'
import { getOneLevel, getTwoLevels } from '../transforms/addressFieldsOptions'

const countryData = {
  'Región Metropolitana': {
    Alhué: '9650000',
    Buin: '9500000',
    'Calera De Tango': '9560000',
    'Centro de Ski - El Colorado': '7690002',
    'Centro de Ski - Farellones': '7690003',
    'Centro de Ski - La Parva': '7690004',
    'Centro de Ski - Valle Nevado': '7690001',
    Cerrillos: '9200000',
    'Cerro Navia': '9080000',
    Chicureo: '9350001',
    Colina: '9350000',
    Conchalí: '8540000',
    Curacaví: '9630000',
    'El Bosque': '8010000',
    'El Monte': '9810000',
    'Estación Central': '9160000',
    Huechuraba: '8580000',
    Independencia: '8380000',
    'Isla De Maipo': '9790000',
    'La Cisterna': '7970000',
    'La Florida': '8240000',
    'La Granja': '8780000',
    'La Pintana': '8820000',
    'La Reina': '7850000',
    Lampa: '9380000',
    'Las Condes': '7550000',
    'Lo Barnechea': '7690000',
    'Lo Barnechea (Excepto Cordillera)': '7690100',
    'Lo Espejo': '9120000',
    'Lo Prado': '8980000',
    Macul: '7810000',
    Maipú: '9250000',
    'María Pinto': '9620000',
    Melipilla: '9580000',
    Ñuñoa: '7750000',
    'Padre Hurtado': '9710000',
    Paine: '9540000',
    'Pedro Aguirre Cerda': '8460000',
    Peñaflor: '9750000',
    Peñalolén: '7910000',
    Pirque: '9480000',
    Providencia: '7500000',
    Pudahuel: '9020000',
    'Puente Alto': '8150000',
    Quilicura: '8700000',
    'Quinta Normal': '8500000',
    Recoleta: '8420000',
    Renca: '8640000',
    'San Bernardo': '8050000',
    'San Joaquín': '8940000',
    'San José De Maipo': '9460000',
    'San Miguel': '8900000',
    'San Pedro': '9660000',
    'San Ramón': '8860000',
    Santiago: '8320000',
    Talagante: '9670000',
    Tiltil: '9420000',
    Vitacura: '7630000',
  },
  'I Región': {
    Camiña: '1150000',
    Colchane: '1160000',
    Huara: '1140000',
    Iquique: '1100000',
    Pica: '1170000',
    'Pozo Almonte': '1180000',
    'Alto Hospicio': '1130000',
  },
  'II Región': {
    Antofagasta: '1240000',
    Calama: '1390000',
    'María Elena': '1360000',
    Mejillones: '1310000',
    Ollagüe: '1420000',
    'San Pedro De Atacama': '1410000',
    'Sierra Gorda': '1320000',
    Taltal: '1300000',
    Tocopilla: '1340000',
  },
  'III Región': {
    'Alto Del Carmen': '1650000',
    Caldera: '1570000',
    Chañaral: '1490000',
    Copiapó: '1530000',
    'Diego De Almagro': '1500000',
    Freirina: '1630000',
    Huasco: '1640000',
    'Tierra Amarilla': '1580000',
    Vallenar: '1610000',
  },
  'IV Región': {
    Andacollo: '1750000',
    Canela: '1960000',
    'Caleta Hornos': '1780008',
    Combarbalá: '1890000',
    Coquimbo: '1780000',
    Guanaqueros: '1780007',
    Illapel: '1930000',
    'La Higuera': '1740000',
    'La Serena': '1700000',
    'Las Tacas': '1780002',
    'Los Vilos': '1940000',
    'Monte Patria': '1880000',
    Morrillos: '1780004',
    Ovalle: '1840000',
    Paihuano: '1770000',
    'Playa Blanca': '1780003',
    'Puerto Velero': '1780001',
    Punitaqui: '1900000',
    'Río Hurtado': '1870000',
    Salamanca: '1950000',
    Tongoy: '1780006',
    Totoralillo: '1780005',
    Vicuña: '1760000',
  },
  'V Región': {
    Algarrobo: '2710000',
    Cabildo: '2050000',
    'Calle Larga': '2130000',
    Cartagena: '2680000',
    Casablanca: '2480000',
    Catemu: '2230000',
    Concón: '2510000',
    'El Quisco': '2700000',
    'El Tabo': '2690000',
    Hijuelas: '2310000',
    'Isla De Pascua': '2770000',
    'Juan Fernández': '2600000',
    'La Calera': '1768121',
    'La Cruz': '2280000',
    'La Ligua': '2030000',
    Limache: '2240000',
    'Llay-Llay': '2220000',
    'Los Andes': '2100000',
    Nogales: '2300000',
    Olmué: '2330000',
    Panquehue: '2210000',
    Papudo: '2070000',
    Petorca: '2040000',
    Puchuncaví: '2500000',
    Putaendo: '2190000',
    Quillota: '2260000',
    Quilpué: '2420000',
    Quintero: '2490000',
    Rinconada: '2140000',
    'San Antonio': '2660000',
    'San Esteban': '2120000',
    'San Felipe': '2170000',
    'Santa María': '2200000',
    'Santo Domingo': '2720000',
    Valparaíso: '2340000',
    'Villa Alemana': '2450000',
    'Viña Del Mar': '2520000',
    Zapallar: '2060000',
  },
  'VI Región': {
    Chépica: '3120000',
    Chimbarongo: '3090000',
    Codegua: '2900000',
    Coinco: '3010000',
    Coltauco: '3000000',
    Doñihue: '3020000',
    Graneros: '2880000',
    'La Estrella': '3250000',
    'Lago Rapel': '3030001',
    'Las Cabras': '3030000',
    Litueche: '3240000',
    Lolol: '3140000',
    Machalí: '2910000',
    Malloa: '2950000',
    Marchigüe: '3260000',
    Mostazal: '2890000',
    Nancagua: '3110000',
    Navidad: '3230000',
    Olivar: '2920000',
    Palmilla: '3160000',
    Paredones: '3270000',
    Peralillo: '3170000',
    Peumo: '2990000',
    Pichidegua: '2980000',
    Pichilemu: '3220000',
    Placilla: '3100000',
    Pumanque: '3150000',
    'Quinta De Tilcoco': '2960000',
    Rancagua: '2820000',
    Rengo: '2940000',
    Requinoa: '2930000',
    'San Fernando': '3070000',
    'San Vicente': '2970000',
    'Santa Cruz': '3130000',
  },
  'IX Región': {
    Angol: '4650000',
    Caburga: '4920001',
    Calafquen: '4930001',
    Carahue: '5010000',
    Cholchol: '5040000',
    Collipulli: '4680000',
    Corralco: '4780002',
    Cunco: '4890000',
    Curacautín: '4700000',
    Curarrehue: '4910000',
    Ercilla: '4710000',
    Freire: '4940000',
    Galvarino: '5030000',
    Gorbea: '4960000',
    'Lago Cólico': '4930002',
    'Lago Cólico Norte': '4890001',
    'Lago Cólico Sur': '4890002',
    Lautaro: '4860000',
    Licanray: '4930001',
    Loncoche: '4970000',
    Lonquimay: '4690000',
    'Los Sauces': '4760000',
    Lumaco: '4740000',
    Malalcahuello: '4780001',
    Melipeuco: '4900000',
    'Nueva Imperial': '5020000',
    'Padre Las Casas': '4850000',
    Perquenco: '4870000',
    Pitrufquén: '4950000',
    Pucón: '4920000',
    'Puerto Saavedra': '5000000',
    Purén: '4750000',
    Renaico: '4670000',
    Temuco: '4780000',
    'Teodoro Schmidt': '4990000',
    Toltén: '4980000',
    Traiguén: '4730000',
    Victoria: '4720000',
    Vilcún: '4880000',
    Villarrica: '4930000',
  },
  'VII Región': {
    Cauquenes: '3690000',
    Chanco: '3720000',
    Colbún: '3610000',
    Constitución: '3560000',
    Curepto: '3570000',
    Curicó: '3340000',
    Empedrado: '3540000',
    Hualañé: '3400000',
    Licantén: '3410000',
    Linares: '3580000',
    Longaví: '3620000',
    Maule: '3530000',
    Molina: '3380000',
    Parral: '3630000',
    Pelarco: '3500000',
    Pelluhue: '3710000',
    Pencahue: '3550000',
    Rauco: '3430000',
    Retiro: '3640000',
    'Río Claro': '3510000',
    Romeral: '3370000',
    'Sagrada Familia': '3390000',
    'San Clemente': '3520000',
    'San Javier': '3660000',
    'San Rafael': '3490000',
    Talca: '3460000',
    Teno: '3360000',
    Vichuquén: '3420000',
    'Villa Alegre': '3650000',
    'Yerbas Buenas': '3600000',
  },
  'VIII Región': {
    'Alto Bío Bío': '4590000',
    Antuco: '4490000',
    Arauco: '4360000',
    Bulnes: '3930000',
    Cabrero: '4470000',
    Cañete: '4390000',
    Chiguayante: '4100000',
    Chillán: '3780000',
    'Chillán Viejo': '3820000',
    Cobquecura: '3990000',
    Coelemu: '3970000',
    Coihueco: '3870000',
    Concepción: '4030000',
    Contulmo: '4400000',
    Coronel: '4190000',
    Curanilahue: '4370000',
    Dichato: '4160001',
    'El Carmen': '3900000',
    Florida: '4170000',
    Hualpén: '4600000',
    Hualqui: '4180000',
    Laja: '4560000',
    Lebu: '4350000',
    Lirquen: '4140001',
    'Los Alamos': '4380000',
    'Los Ángeles': '4430000',
    Lota: '4210000',
    Mulchén: '4530000',
    Nacimiento: '4550000',
    Negrete: '4540000',
    Ninhue: '4010000',
    Ñiquén: '3850000',
    Pemuco: '3910000',
    Penco: '4140000',
    Pingueral: '4160002',
    Pinto: '3880000',
    Portezuelo: '3960000',
    Quilaco: '4520000',
    Quilleco: '4500000',
    Quillón: '3940000',
    Quirihue: '4000000',
    Recinto: '3880001',
    Ranquil: '3950000',
    'San Carlos': '3840000',
    'San Fabián': '3860000',
    'San Ignacio': '3890000',
    'San Nicolás': '4020000',
    'San Pedro De la Paz': '4120000',
    'San Rosendo': '4570000',
    'Santa Bárbara': '4510000',
    'Santa Juana': '4230000',
    Talcahuano: '4260000',
    Tirúa: '4410000',
    Tomé: '4160000',
    Trehuaco: '5248145',
    Tucapel: '4480000',
    Yumbel: '4580000',
    Yungay: '3920000',
  },
  'X Región': {
    Ancud: '5710000',
    Calbuco: '5570000',
    Castro: '5700000',
    Chaitén: '5850000',
    Chonchi: '5770000',
    Cochamó: '5560000',
    'Curaco De Vélez': '5740000',
    Dalcahue: '5730000',
    'El Islote': '5370001',
    Ensenada: '5550001',
    Fresia: '5600000',
    Frutillar: '5620000',
    Futaleufú: '5870000',
    Hualaihué: '5860000',
    Llanquihue: '5610000',
    'Los Muermos': '5590000',
    'Marina Rupanco': '5360001',
    Maullín: '5580000',
    Osorno: '5290000',
    Palena: '5880000',
    'Puerto Montt': '5500000',
    'Puerto Octay': '5370000',
    'Puerto Varas': '5550000',
    Puqueldón: '5760000',
    Purranque: '5380000',
    Puyehue: '5360000',
    Queilén: '5780000',
    Quellón: '5790000',
    Quemchi: '5720000',
    Quinchao: '5750000',
    'Río Negro': '5390000',
    'San Juan De la Costa': '5400000',
    'San Pablo': '5350000',
  },
  'XI Región': {
    Aysén: '6008102',
    'Chile Chico': '6050000',
    Cisnes: '6010000',
    Cochrane: '6100000',
    Coyhaique: '5950000',
    Guaitecas: '6020000',
    'Lago Verde': '5960000',
    "O'Higgins": '6110000',
    'Río Ibáñez': '6060000',
    Tortel: '6120000',
  },
  'XII Región': {
    'Cabo De Hornos Y Antártica': '6350000',
    'Laguna Blanca': '6250000',
    Porvenir: '6300000',
    Primavera: '6310000',
    'Puerto Natales': '6160000',
    'Punta Arenas': '6200000',
    'Río Verde': '6240000',
    'San Gregorio': '6260000',
    Timaukel: '6320000',
    'Torres Del Paine': '6170000',
  },
  'XIV Región': {
    Coñaripe: '5210001',
    Corral: '5190000',
    Futrono: '5180000',
    'La Union': '5220000',
    'Lago Ranco': '5250000',
    Lanco: '5160000',
    'Los Lagos': '5170000',
    Mafil: '5200000',
    Mariquina: '5150000',
    Paillaco: '5230000',
    Panguipulli: '5210000',
    'Rio Bueno': '5240000',
    Valdivia: '5090000',
  },
  'XV Región': {
    Arica: '1000000',
    Camarones: '1040000',
    'General Lagos': '1080000',
    Putre: '1070000',
  },
}

export default {
  country: 'CHL',
  abbr: 'CL',
  postalCodeFrom: TWO_LEVELS,
  postalCodeLevels: ['state', 'neighborhood'],
  secondLevelPostalCodes: secondLevelPostalCodes(countryData),
  fields: [
    {
      hidden: true,
      name: 'country',
      maxLength: 100,
      label: 'country',
      size: 'medium',
    },
    {
      autoComplete: 'nope',
      hidden: true,
      label: 'postalCode',
      maxLength: 50,
      name: 'postalCode',
      regex: /^([\d]{7})$/,
      size: 'large',
    },
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'number',
      maxLength: 750,
      label: 'number',
      required: true,
      size: 'mini',
      autoComplete: 'nope',
    },
    {
      name: 'complement',
      maxLength: 750,
      label: 'complement',
      size: 'large',
    },
    {
      hidden: true,
      name: 'reference',
      maxLength: 750,
      label: 'reference',
      size: 'xlarge',
    },
    {
      name: 'state',
      maxLength: 100,
      label: 'region',
      required: true,
      size: 'large',
      level: 1,
      options: getOneLevel(countryData),
    },
    {
      name: 'neighborhood',
      maxLength: 100,
      label: 'community',
      required: true,
      size: 'large',
      level: 2,
      basedOn: 'state',
      optionsMap: getTwoLevels(countryData),
    },
    {
      hidden: true,
      name: 'city',
      maxLength: 100,
      label: 'city',
      size: 'large',
    },
    {
      name: 'receiverName',
      elementName: 'receiver',
      maxLength: 750,
      label: 'receiverName',
      size: 'xlarge',
      required: true,
    },
  ],
  geolocation: {
    postalCode: {
      valueIn: 'long_name',
      types: ['postal_code'],
      required: false,
    },
    number: { valueIn: 'long_name', types: ['street_number'], required: false },
    street: { valueIn: 'long_name', types: ['route'], required: false },
    neighborhood: {
      valueIn: 'long_name',
      types: [
        'neighborhood',
        'sublocality_level_1',
        'sublocality_level_2',
        'sublocality_level_3',
        'sublocality_level_4',
        'sublocality_level_5',
      ],
      required: false,
    },
    state: {
      valueIn: 'short_name',
      types: ['administrative_area_level_1'],
      required: false,
    },
    city: {
      valueIn: 'long_name',
      types: ['administrative_area_level_2', 'locality'],
      required: false,
    },
  },
  summary: [
    [
      {
        name: 'street',
      },
      {
        delimiter: ' ',
        name: 'number',
      },
      {
        delimiter: ', ',
        name: 'complement',
      },
    ],
    [
      {
        name: 'neighborhood',
        delimiterAfter: ', ',
      },
      {
        name: 'city',
      },
      {
        delimiter: ', ',
        name: 'state',
      },
    ],
  ],
}
