module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false,
  },
  purge: [],
  important: true,
  theme: {
    fontFamily: {
        averta: 'averta',
        avertalight: 'averta-light',
        avertasemibold: 'averta-semibold',
        avertabold: 'averta-bold',
        avertaextrabold: 'averta-extrabold',
        avertablack: 'averta-black'
    },
    screens: {
      'xl': {'min': '1081px'},
      'lg': {'min': '751px', 'max': '1080px'},
      'sm': {'min': '320px', 'max': '749px'},
    },
    maxWidth: {
        '1440': '1440px',
        '1600': '1600px',
        '1920': '1920px'
    },
    fontSize: {
      '13': '13px',
      'xxxs': '0.5rem',
      'xxs': '.625rem',
      'xss': '.6875rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.75rem',
      '5xl': '3rem',
      '5.5xl': '3.75rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '5.3rem'
    },
    extend: {
      spacing: {
        '1': '1px',
        '28': '7rem',
        '36': '9rem',
        '44': '11rem',
        '60': '15rem',
        '68': '16.5rem',
        '72': '18rem',
        '80': '19.5rem',
        '84': '21rem',
        '90': '22.5rem',
        '96': '24rem',
        '100': '25.5rem',
        '104': '27rem',
        '108': '28.5rem',
        '112': '30rem',
        '120': '33rem',
        '128': '36rem',
        '136': '39rem',
        '144': '42rem',
        '150': '45rem',
        '156': '48rem',
        '164': '51rem',
        '172': '54rem'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
