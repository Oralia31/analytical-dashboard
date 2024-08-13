export const jsonGoogleAnalytics = {
  vistasPagina: [
    { fecha: "2024-08-01", vistas: 300 },
    { fecha: "2024-08-02", vistas: 450 },
  ],
  sesiones: [
    { fecha: "2024-08-01", sesiones: 200, tasaRebote: 0.35 },
    { fecha: "2024-08-02", sesiones: 300, tasaRebote: 0.4 },
  ],
  demografía: {
    edad: [
      { rango: "18-24", porcentaje: 25 },
      { rango: "25-34", porcentaje: 40 },
    ],
    género: [
      { tipo: "hombre", porcentaje: 55 },
      { tipo: "mujer", porcentaje: 45 },
    ],
  },
};

export const jsonGoogleAds = {
  campañas: [
    {
      nombre: "Campaña 1",
      impresiones: 1000,
      clics: 150,
      conversiones: 20,
      costo: 200,
    },
    {
      nombre: "Campaña 2",
      impresiones: 2000,
      clics: 300,
      conversiones: 50,
      costo: 350,
    },
  ],
};

export const jsonMetaAds = {
  anuncios: [
    {
      nombre: "Anuncio 1",
      alcance: 5000,
      participación: 300,
      gastoPublicidad: 100,
      conversiones: 30,
    },
    {
      nombre: "Anuncio 2",
      alcance: 7500,
      participación: 500,
      gastoPublicidad: 150,
      conversiones: 45,
    },

    {
      nombre: "Anuncio 3",
      alcance: 7100,
      participación: 700,
      gastoPublicidad: 200,
      conversiones: 60,
    },
    {
      nombre: "Anuncio 4",
      alcance: 4500,
      participación: 900,
      gastoPublicidad: 250,
      conversiones: 65,
    },
    {
      nombre: "Anuncio 5",
      alcance: 7000,
      participación: 1000,
      gastoPublicidad: 400,
      conversiones: 75,
    },
    {
      nombre: "Anuncio 6",
      alcance: 5500,
      participación: 1100,
      gastoPublicidad: 550,
      conversiones: 85,
    },
  ],
};

export const jsonSistemaCRM = {
  leads: [
    { nombre: "Lead 1", costoAdquisición: 200, valorDeVida: 1000 },
    { nombre: "Lead 2", costoAdquisición: 150, valorDeVida: 750 },

    { nombre: "Lead 3", costoAdquisición: 400, valorDeVida: 900 },
    { nombre: "Lead 4", costoAdquisición: 50, valorDeVida: 650 },
    { nombre: "Lead 5", costoAdquisición: 500, valorDeVida: 830 },
    { nombre: "Lead 6", costoAdquisición: 250, valorDeVida: 750 },
  ],
  tasaConversión: 0.08,
};
