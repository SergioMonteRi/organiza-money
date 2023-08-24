import { ApexOptions } from 'apexcharts';

export const chartOptions = {
  legend: {
    show: false,
  },
  noData: {
    text: 'Sem resultados',
    align: 'center',
    verticalAlign: 'middle',
    offsetY: -15,
    style: {
      color: '#FFF',
      fontSize: '18px',
      fontFamily: 'Lato, sans-serif',
    },
  },
  chart: {
    foreColor: '#b4bed2',
    height: '100%',
    width: '100%',
    fontFamily: 'Lato, sans-serif',
    offsetX: -10,
    locales: [
      {
        name: 'pt-BR',
        options: {
          months: [
            'Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro',
          ],
          shortMonths: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
          ],
          days: [
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
            'Domingo',
          ],
          shortDays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        },
      },
    ],
    defaultLocale: 'pt-BR',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {},
  fill: {
    opacity: 1,
    colors: ['#3e82f7'],
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: function (val: number) {
        return `R$ ${val}`;
      },
    },
  },
} as ApexOptions;
