import { colorsChart } from "../Config/colorsCharts";
import {
  jsonGoogleAds,
  jsonGoogleAnalytics,
  jsonMetaAds,
  jsonSistemaCRM,
} from "./Data";

//Google Analytics
export const barData = {
  labels: jsonGoogleAnalytics?.vistasPagina?.map((item) => item.fecha) || [],
  datasets: [
    {
      label: "Vistas de página",
      data: jsonGoogleAnalytics?.vistasPagina?.map((item) => item.vistas) || [],
      backgroundColor: colorsChart.purple[100],
    },
    {
      label: "Sesiones",
      data: jsonGoogleAnalytics?.sesiones?.map((item) => item.sesiones) || [],
      backgroundColor: colorsChart.purple[200],
    },
    {
      label: "Tasa de rebote",
      data:
        jsonGoogleAnalytics?.sesiones?.map((item) => item.tasaRebote * 100) ||
        [],
      backgroundColor: colorsChart.purple[300],
    },
  ],
};
export const barDataOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "Vistas/Sesiones",
      },
    },
    x: {
      title: {
        display: true,
        text: "Fecha",
      },
    },
  },
};
export const pieDataAge = {
  labels:
    jsonGoogleAnalytics?.demografía?.edad?.map((item) => item.rango) || [],
  datasets: [
    {
      data:
        jsonGoogleAnalytics?.demografía?.edad?.map((item) => item.porcentaje) ||
        [],
      backgroundColor: [colorsChart.purple[100], colorsChart.purple[300]],
      hoverBackgroundColor: [
        colorsChart.purpleHover[100],
        colorsChart.purpleHover[300],
      ],
    },
  ],
};
export const pieDataGender = {
  labels:
    jsonGoogleAnalytics?.demografía?.género?.map((item) => item.tipo) || [],
  datasets: [
    {
      data:
        jsonGoogleAnalytics?.demografía?.género?.map(
          (item) => item.porcentaje
        ) || [],
      backgroundColor: [colorsChart.purple[100], colorsChart.purple[300]],
      hoverBackgroundColor: [
        colorsChart.purpleHover[100],
        colorsChart.purpleHover[300],
      ],
    },
  ],
};

//Google ads (campaings)
export const barDataCampaigns = {
  labels: jsonGoogleAds?.campañas?.map((item) => item.nombre) || [],

  datasets: [
    {
      label: "Impresiones",
      data: jsonGoogleAds?.campañas?.map((item) => item.impresiones) || [],
      backgroundColor: colorsChart.purple[100],
      borderColor: colorsChart.purpleHover[100],
      borderWidth: 1,
    },
    {
      label: "Clics",
      data: jsonGoogleAds?.campañas?.map((item) => item.clics) || [],
      backgroundColor: colorsChart.purple[200],
      borderColor: colorsChart.purpleHover[200],
      borderWidth: 1,
    },
    {
      label: "Conversiones",
      data: jsonGoogleAds?.campañas?.map((item) => item.conversiones) || [],
      backgroundColor: colorsChart.purple[300],
      borderColor: colorsChart.purpleHover[300],
      borderWidth: 1,
    },
    {
      label: "Costo",
      data: jsonGoogleAds?.campañas?.map((item) => item.costo) || [],
      backgroundColor: colorsChart.purple[400],
      borderColor: colorsChart.purpleHover[400],
      borderWidth: 1,
    },
  ],
};
export const barDataCampaignsOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50,
      },
    },
  },
};

//Meta ads
{
  /**
  export const barDataAds = {
  labels: jsonMetaAds?.anuncios?.map((item) => item.nombre) || [],
  datasets: [
    {
      type: "bar",
      label: "Alcance",
      data: jsonMetaAds?.anuncios?.map((item) => item.alcance) || [],
      backgroundColor: colorsChart.purple[100],
      borderColor: colorsChart.purpleHover[100],
      borderWidth: 1,
      yAxisID: "y",
    },
    {
      type: "bar",
      label: "Participación",
      data: jsonMetaAds?.anuncios?.map((item) => item.participación) || [],
      backgroundColor: colorsChart.purple[200],
      borderColor: colorsChart.purpleHover[200],
      borderWidth: 1,
      yAxisID: "y",
    },
    {
      type: "bar",
      label: "Gastos publicidad",
      data: jsonMetaAds?.anuncios?.map((item) => item.gastoPublicidad) || [],
      backgroundColor: colorsChart.purple[300],
      borderColor: colorsChart.purpleHover[300],
      borderWidth: 1,
      yAxisID: "y",
    },
    {
      type: "line",
      label: "Conversiones",
      data: jsonMetaAds?.anuncios?.map((item) => item.conversiones) || [],
      backgroundColor: colorsChart.purple[400],
      borderColor: colorsChart.purpleHover[400],
      fill: false,
      tension: 0.4,
      pointBackgroundColor: colorsChart.purple[100],
      pointBorderColor: colorsChart.purple[200],
      pointRadius: 5,
      pointHoverRadius: 7,
      yAxisID: "y1",
    },
  ],
};
  */
}

export const barDataOptionsAds = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Valores",
      },
    },
    y1: {
      beginAtZero: true,
      position: "right",
      title: {
        display: true,
        text: "Conversiones",
      },
    },
    x: {
      title: {
        display: true,
        text: "Anuncios",
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }

          if (context.parsed.y !== null) {
            label += context.parsed.y;
          }
          return label;
        },
      },
    },
  },
};

//Sistema CRM
export const barDataMetrics = {
  labels: jsonSistemaCRM?.leads?.map((item) => item.nombre) || [],
  datasets: [
    {
      label: "Costo de adquisición",
      data: jsonSistemaCRM.leads.map((item) => item.costoAdquisición),
      backgroundColor: colorsChart.purple[100],
    },
    {
      label: "Valor de vida",
      data: jsonSistemaCRM.leads.map((item) => item.valorDeVida),
      backgroundColor: colorsChart.purple[200],
    },
  ],
};
export const barDataOptionsMetrics = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Valor en USD",
      },
    },
    x: {
      title: {
        display: true,
        text: "Leads",
      },
    },
  },
};

export const lineCosteDataMetrics = {
  labels: jsonSistemaCRM?.leads?.map((item) => item.nombre) || [],
  datasets: [
    {
      label: "Costo de adquisición",
      data: jsonSistemaCRM?.leads?.map((item) => item.costoAdquisición) || [],
      borderColor: colorsChart.purple[100],
      backgroundColor: colorsChart.purpleHover[400],
      fill: false,
      tension: 0.4,
    },
  ],
};
export const lineValueDataMetrics = {
  labels: jsonSistemaCRM?.leads?.map((item) => item.nombre) || [],
  datasets: [
    {
      label: "Valor de vida",
      data: jsonSistemaCRM?.leads?.map((item) => item.valorDeVida) || [],
      borderColor: colorsChart.purple[100],
      backgroundColor: colorsChart.purpleHover[400],
      fill: false,
      tension: 0.4,
    },
  ],
};
export const lineOptionsMetrics = {
  type: "line",
  reponsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50,
      },
      title: {
        display: true,
        text: "Valor en USD",
      },
    },
    x: {
      title: {
        display: true,
        text: "Leads",
      },
    },
  },
};
