import { ContentBase, CardBase, VideoBase } from '~/types'

interface Card extends CardBase {
  video?: VideoBase
}

interface Content extends ContentBase {
  titleHighlight?: string
  cards: Card[]
}

import imageCard from '~/images/gatsby-astronaut.png'

const content: Content = {
  title: 'Matricule-se já e garanta mais 4 bônus extras!',
  titleHighlight: '4 bônus',
  cards: [
    {
      image: imageCard,
      video: {
        videoSrcURL: 'https://www.youtube.com/embed/q_8u3c4V6sE',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Teoria, Leitura e Escrita',
      content:
        'Tudo o que você precisa saber para se tornar um músico completo, ler partituras e escrever suas próprias idéias!',
    },
    {
      image: imageCard,
      video: {
        videoSrcURL: 'https://www.youtube.com/embed/q_8u3c4V6sE',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Tocando Músicas',
      content:
        'Coloque seu treinamento em prática criando seu repertório! São diversas músicas em diferentes estilos explicadas detalhadamente e com partitura completa.',
    },
    {
      image: imageCard,
      video: {
        videoSrcURL: 'https://www.youtube.com/embed/q_8u3c4V6sE',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Instrumento Complementar',
      content:
        'Torne-se um baterista mais musical, entendendo acordes, melodias, ciclos harmônicos, escalas e tocando músicas.',
    },
    {
      image: imageCard,
      video: {
        videoSrcURL: 'https://www.youtube.com/embed/q_8u3c4V6sE',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Apreciação Musical',
      content:
        'Uma seleção especial de álbuns, artistas e estilos musicais para você enriquecer seu vocabulário e repertório de boa música.',
    },
  ],
  callToAction: 'Matricule-se',
}

export default content