const foodtitle=(req, res)=>{res.send([
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeyStT18e47WzRZ7p6VCuEj821YkZRUSkVQ&usqp=CAU',
      title:'Pizza Hut',
      description:'Pizza Hut began on May 31, 1958,[7] by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[8] The now famous little brick building was close to their childhood home and stomping grounds. The Carney brothers grew up in the College Hill neighborhood amongst many life long Wichita families where tree-lined streets were filled with historical homes with a scenic park as their playground. Six months after their launch, later they opened a second outlet and within a year they had six Pizza Hut restaurants.',
      releaseDate:'15 June 1958'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8tE7V1rlxQbz_iHOI2P-UCC4nlKdp6bHjXwJSK2xmgtyDqwXZREMcAB0j5trCnm8RPo&usqp=CAU',
      title:'KFC',
      description:'KFC, the most famous food store for chicken lovers. Whenever we think of fried chicken wings our brain immediately takes us to the KFC outlets. Want to know the interesting story behind KFC? So, here is an incredible story behind the success of KFC and the story of the founder is very interesting as well There are some entrepreneurial myths like you have to start at a very young age to become a successful entrepreneur. But, the owner of KFC has proved this myth wrong. Once Dallas Clayton said, “It’s never too late to start something new, to do all those things that you’ve been longing to do.” Now, you can see how this proverb stands perfect for the owner of KFC. Thus, in the blog, you will learn about the journey of the owner of this successful food store Colonel Harland Sanders.',
      releaseDate:'24 Sep 1952' 
    },
    {
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Maggi_logo.svg/1200px-Maggi_logo.svg.png',
      title:'Maggi',
      description:'The instant noodle brand Maggi, owned by Nestle, has achieved the milestone of 40-years of its journey in India. Since being introduced in 1982, the brand has also entered the business of selling spices, soups, sauces and more, along with its primary and much-loved instant noodle offering',
      releaseDate:'1988'
    }
  ])}
  module.exports.apiController = foodtitle;