export const uiConfig = {
  prices: { lavado: 1500, secado: 1500, ambos: 2500, suavizante: 500 },

  messages: {
    start: 'Presiona el logo para comenzar',
    footer: 'Created by',
    checkingStock: 'Verificando nivel de stock...',
    lowStock: 'Nivel de stock bajo, no podemos proceder con la venta',
    timeoutStockService: 'Servicio de stock no disponible',
    serviceType: 'Selecciona el tipo de servicio',

    softer: prices =>
      `¿Agregas suavizante por $${prices.suavizante}?`,

    paySelection: litros => `Usted ha seleccionado ${litros} litro(s)`,
    paying: 'Opere tarjeta.',
    printing: 'Pago completado con éxito.',
    fillInsert: 'Introduzca los artìculos y presione comenzar.',
    fillReady: '¿Desea comenzar el ciclo?. Una vez iniciado, no puede detenerse.',
    preparingFilling: 'Comenzando Llenado',
    filling: 'Llenando...',
    endFilling: 'Proceso terminado',
    thanks: 'Muchas gracias por utilizar EMI, vuelva pronto ;)',
    densidadLiquido: 0.985,
    error: 'Ups!, algo ha salido mal. Favor vuelva a intentarlo.'
  },

  buttons: {
    start: 'Comenzar',
    pay: 'Pagar',
    startFill: 'Comenzar'
  },

  saleTimeoutMs: 3 * 60 * 1000
}



