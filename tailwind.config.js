/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            opensans: ["Open Sans", "sans-serif"],
            nunito: ["Nunito", "sans-serif"],
            arima: ["Arima", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            merriweather: ["Merriweather", "sans-serif"],
            robot: ["Roboto", "sans-serif"],
            nunitosans: ["Nunito Sans", "sans-serif"],
            worksans: ["Work Sans", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        colors: {
            'custom': {
                'blue': {
                    100: '#70ACE0',
                    101: '#0074AF',
                    102: '#253B88',
                    103: '#00EAFF',
                    104: '#340D8E',
                    105: '#20E8D2',
                    106: '#ECF9FF',
                    107: '#00E5CC',
                    108: '#E0F8F8',
                    109: '#20CFC614',
                },
                'red': {
                    100: '#F53636',
                    101: '#ED1973',
                },
                'yellow': {
                  100: '#F5F0B4',
                  101: '#ca4f16',
                },
                'green': {
                  100: '#008080',
                  101: '#A2D408',
                  102: '#8FC00C',
                },
                'black': {
                  100: '#252B42',
                  101: '#060640',
                  102: '#1E1E1E',
                  103: '#323232',
                 
                },
                'orange': {
                  100: '#FF5A00',
                },
                'gray': {
                  100: '#828297',
                  101: '#9090A7',
                  102: '#B0B0B0',
                  103: '#575757',
                  104: '#E1E1E1',
                  105: '#F3F3F3',
                  106: '#E7E7E7',
               
                },
                'white': {
                  100: '#CCC',
                },
            }
        }
    },
    },
    plugins: [],
  }
  
  