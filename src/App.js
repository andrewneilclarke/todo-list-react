import { useState } from 'react'
import propTypes from 'prop-types'
import './App.css';
import Card from './Card'
import Header from './Header'

function App() {
  const [stories, showStories] = useState(() => {
    return [{
      "id": 0,
      "title": "The Three Pigs",
      "text": `Near the forest, there lives a mother pig, who has three little pigs. When the pigs are too big to live with their mother, she says to them, „This house is too small for you. Go and build your own houses. But take care that the wolf does not catch you.“
      The first little pig builds his house from straw. He works all day long. When his house is finished, he is a very happy pig. He says, „Now I’m safe from the big, bad wolf.“
      The second little pig says: „I will build a better house than yours. I will build my house from sticks.“ He works all day and all night. When his house is finished, he is a very happy pig. He says, „Now the big, bad wolf can’t catch me.“
      The third little pig says, „I will build the best house! I will build my house from bricks.“ He works for two whole days. When his house is finished, he is a very happy pig. He says, „I’m safe from the big, bad wolf here.“
      In the night, when it is dark and cold, the big, bad wolf comes out of the forest. He goes to the house made from straw and says, „Little pig, little pig, let me in!“
      „Not by the hair of my chinny chin chin“, says the little pig.
      The angry wolf takes a deep breath. With a huff and a puff, he blows the house down and the little pigs runs off to the house made of sticks.
      Then the wolf goes to the house of sticks. He says, „Little pigs, little pigs, let me in!“
      „Not by the hair on our chinny chin chins“, say the little pigs.
      The wolf laughs. „What silly pigs!“, he says. With a huff and a puff, he blows the house down and again the little pigs run as fast as they can to the house made of bricks.
      Then the wolf goes to the house made from bricks.
      He says, „Little pig, little pig, let me in!“
      Not by the hair on our chinny chin chins“, say the little pigs.
      The wolf blows and blows but he cannot blow the house down.
      The wolf gets very, very angry.
      He says, „I will climb down your chimney to get you.“
      The little pigs are  frightened. They light a big fire in the fireplace and puts a big pot of water on the fire, to boil. The wolf begins to climb up the house. Then he begins to climb down the chimney. Suddenly, he falls into the pot with a big splash. That is the end of the wolf. The third little pig was too clever for him.
      The little pigs live happily ever after.`,
      "open": false,   
    },
    {"id": 1,
    "title": "The Boy who cried Wolf",
    "text": "This story is from Aesop’s Fables and impresses the importance of being truthful. It is the story of a shepherd boy who watched a flock of sheep near his village. The area was known to have a wolf that was infamous for raiding the sheep flock and making away with a couple of sheep. Every villager knew of the menace and was always ready to come to the aid of anyone who had a problem with the wolf. But the boy overlooked this helpful nature of the villagers, and in fact, ridiculed it. For his amusement, he brought out the villagers, three times, by crying out for help, saying “Wolf! Wolf!”. The ever-vigilant villagers immediately came to help him, only to find the shepherd boy having a hearty laugh. They were naturally upset when he laughed at them for getting fooled. One day, however, a wolf actually came and started killing and eating his sheep. This time, when he cried for help, none of the villagers came to his aid, as they thought he was playing a prank on them again. As a result, the wolf destroyed the shepherd’s flock. The moral of the story is that no one believes a liar, even when he tells the truth." ,
    "open": false,
  },
    {"id": 2,
    "title": "The Ant and the Grasshopper",
    "text": `This is another tale from Aesop’s Fables, and talks about the importance of hard work and planning for the future. The story tells of a grasshopper that spends the summer singing and idling away his time. Meanwhile, his neighbours, a colony of ants, work hard throughout the summer to store food for the winter. The grasshopper laughs at the ants and tells them that they should enjoy the summer. The ants tell the grasshopper that he should store food for the winter or he will starve when everything is frozen. When winter comes, the ants are in their nest, resting and surviving on the food that they stored. The grasshopper comes to their door, hungry and cold. He begs the ants for food and says he realised the error of his ways. The ants share their food with him and make him promise to work hard, next summer, to gather and store food.` ,
    "open": false,
  },
    {"id": 3,
    "title": "The Ugly Duckling",
    "text": `This is one of the classic bedtime stories for kids. The story starts on a farm, where a duck sits on a clutch of eggs to make them hatch. The eggs hatch one by one, and soon, there are six yellow-feathered ducklings, chirping excitedly. The last egg takes longer to hatch, and from it emerges a strange looking duckling with grey feathers. Everybody finds the grey duckling ugly, including its own mother. The dejected duckling runs away and lives alone in a swamp until winter comes. Seeing the duckling starving in winter, a farmer takes pity on the ugly duckling and gives it food and shelter at home. However, the duckling is afraid of the farmer’s noisy children and flees to a cave by a frozen lake. When spring comes, a flock of beautiful swans descend on the lake, and the duckling, which is now fully grown, but lonely, approaches the swans, fully expecting to be rejected. To his surprise, the swans welcome him. He looks at his reflection in the water and realises that he is not an ugly duckling anymore, but a beautiful swan. The swan joins this flock and flies off with his new family.`,
    "open": false,
  },
    {"id": 4,
    "title": "Beauty and the Beast",
    "text": `This is a famous fairy tale that tells us that we should look past outward appearances and give more importance to a person’s good nature. There once was a merchant who got lost in a storm and took shelter in a castle that he found. While leaving, he plucked a rose from the garden to gift to his daughter Belle. The castle belonged to a hideous beast, who imprisoned the merchant for trying to steal the rose. The merchant begged to be set free and told the beast he only wanted the rose for his daughter Belle. The Beast let him go, on the condition that his daughter will take his place and live in the castle. The merchant returned home and told Belle everything. Belle went to live in the castle with the Beast, in place of her father. The Beast fell in love with the beautiful Belle, who realised that the Beast was very good natured and not vicious. One day, Belle asked permission to go see her father. When she left, the Beast felt heartbroken. Belle returned to the castle, to see that the Beast was dying. She held the Beast and cried, admitting that she loves him. All of a sudden, the Beast turned into a handsome prince. He was cursed by a witch that he would remain a Beast, until a woman truly loved him, despite his hideous looks. When Belle said she loved the beast, the witch’s curse was broken. The prince and Belle got married and lived happily ever after.`,
    "open": false,
  },
    {"id": 5,
    "title": "Cinderella",
    "text": `Cinderella is another fairy tale full of magic and adventure. Once, a beautiful girl named Cinderella lived with her wicked stepmother and two stepsisters. The stepmother made her do all the housework and was very cruel to her. One day, the stepmother and stepsisters went to a ball in the King’s palace, leaving Cinderella behind. Cinderella really wanted to attend the ball and felt very sad that she had been left behind. Suddenly, a fairy godmother appeared in a burst of light, and she used her magic to transform Cinderella into a princess, wearing a lovely dress and glass slippers. She also turned a pumpkin and some mice into a carriage and horses, respectively. Cinderella could now attend the ball. The fairy godmother warned her that the magic will wear off at midnight and that Cinderella should return home before that. When Cinderella arrived at the ball, the prince saw her, and they fell in love. They danced together until midnight. When the clock struck twelve, Cinderella rushed to her carriage, leaving one of her glass slippers behind. The prince searched every house in town for the mysterious girl whose foot fit into the glass slipper. He reached the wicked stepmother’s house  and found that the shoe belonged to Cinderella. Thus, the prince and Cinderella got married and lived happily ever after.`,
    "open": false,
  },
    {"id": 6,
    "title": "The Hungry Mouse",
    "text": `This is among the short bedtime stories for kids. It talks about how greed can get people into bad situations. There once was a mouse that was starving and had not eaten in days. He had grown really thin. After a lot of searching, the mouse found a basket full of corn. There was a tiny hole in the basket, through which he could just fit in. So, he crept into the basket and ate his fill of corn. However, he did not stop eating, once he was full. The mouse ate more and more, even though he was feeling full. Now, the mouse had grown larger from all that food and could no longer fit through the hole to get out. He was worried and wondered how to escape. A rat that was passing by heard the mouse and told him that he had to wait until he had grown thin again, in order to get out through that hole. The mouse regretted being greedy and overeating.`,
    "open": false,  
  },
  ]
  })

const toggleCard = (id) => {
  showStories(stories.map(story => story.id === id ? { ...story, open: !story.open} : story ))
}

const deleteStory = (id) => {
  showStories(stories.filter(story => story.id !== id))
  console.log(id)
}
  return (
    <div className="App container">
      <Header />
     {stories.length > 0 ? <Card stories={stories} onToggle={toggleCard} onDelete={deleteStory} /> : 'No Stories to show'}
    </div>
  );
}
Card.propTypes = {
  stories: propTypes.array.isRequired,
}
export default App;
