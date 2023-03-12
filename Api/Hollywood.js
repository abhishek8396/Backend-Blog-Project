const hollywoodTitle=(req, res)=>{res.send([
    {
      img: 'https://movies.universalpictures.com/media/02-m3g-dm-mobile-banner-1080x745-sl-f01-120922-6393deb1ec4b4-1.jpg',
      title:'M3gan',
      description:' Gemma (Allison Williams), a talented engineer invents an AI powered smart doll named M3GAN (short for Model 3 Generative ANdroid), and decides to test it on her own niece Cady (Violet McGraw), before the big launch. But soon, things start going awry, as the dolls behaviour and actions arent exactly what she had coded.',
      releaseDate:'13 Jan, 2023'
    },
    {
      img:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768_0-sixteen_nine.jpeg?size=1200:675',
      title:'Avatar: The Way Of Water',
      description:' A worthy sequel to the 2009 film Avatar, James Cameron takes us back to the stunning world of Pandora, where human turned Navi Jake Sully (Sam Worthington) and Navi princess Neytiri (Zoe Saldaña) must do everything it takes to protect their children from the sky people (humans from earth).',
      releaseDate:'16 Dec, 2022'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqSnm487wNiFcZdsN3y5FPWKCmBjUE792sO4xXrvfO5ETlpAsZyKTtFjciVa0tzRxXcc&usqp=CAU',
      title:'Violent Night',
      description:'Violent Night gives an interesting spin to cheesy Christmas movies but fails to recreate their feel good charm.',
      releaseDate:'02 Dec, 2022'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWg9C3wLf-XSSkdLP_pN8voDIvqR_GZruWF2yxQ5-l1BgqCoprlGoj896uTLKEYAixqvc&usqp=CAU',
      title:'Peaky Blinders',
      description:'Miss and cherish Polly to your hearts content but do come, say goodbye to the Shelbys as they unload their guns. Hopefully, never to pick them up again.',
      releaseDate:'10 Jun, 2022'
    },
])}
module.exports.apiController = hollywoodTitle;