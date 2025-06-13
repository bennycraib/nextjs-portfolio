const podcasts = [
    {
    title: 'Dive Club',
    summary: `Where designers never stop learning 💪 Dive Club is an interview series hosted by  that is designed to unlock knowledge from today's most prolific designers. We go deep into craft, storytelling, tools, design engineering, startups, and much more.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/dive-club.jpg',
    tags: ['Design'],
  },
  {
    title: 'Football Weekly - The Guardian',
    summary: `Join Max Rushden, Barry Glendenning and special guests as they pick over the latest football action from the Premier League and beyond The show has reported on matches and games from all of the following: Premier League, Champions League, Euros / Euro 2024, World Cup, Championship, League One, League Two, Scottish Premier League, Bundesliga, Serie A, Ligue Un, La Liga, Europa League, Europa Conference League, Women’s Euros, Women’s World Cup.`,
    url: 'https://example.com/on-the-grid-interview',
    image: '/logos/football-weekly.jpeg',
    tags: ['Football'],
  },
  {
    title: 'Today, Explained - Vox',
    summary: `Today, Explained is Vox's daily news explainer podcast. Hosts Sean Rameswaram and Noel King will guide you through the most important stories of the day.`,
    url: 'https://example.com/roundtable-startups',
    image: '/logos/today-explained.avif',
    tags: ['Daily News'],
  },
  {
    title: 'The Daily - New York Times',
    summary: `This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro, Rachel Abrams and Natalie Kitroeff. Twenty minutes a day, five days a week, ready by 6 a.m.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/the-daily.jpg',
    tags: ['Daily News'],
  },
  {
    title: 'Full Story - The Guardian',
    summary: `Guardian Australia's daily news podcast. Every weekday, join Guardian journalists for a deeper understanding of the news in Australia and beyond.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/full-story.jpeg',
    tags: ['Daily News'],
  },
  {
    title: 'The Rest Is Politics: US',
    summary: `TRIP US uncovers secrets from inside the White House inner circles as well as taking a wider look at the intricacies of United States society and how they shape the world's most important economy.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/the-rest-is-politics.jpg',
    tags: ['Politics'],
  },
  {
    title: 'On Purpose with Jay Shetty',
    summary: `I’m Jay Shetty host of On Purpose the worlds #1 Mental Health podcast and I’m so grateful you found us. I started this podcast 5 years ago to invite you into conversations and workshops that are designed to help make you happier, healthier and more healed. I believe that when you (yes you) feel seen, heard and understood you’re able to deal with relationship struggles, work challenges and life’s ups and downs with more ease and grace.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/jay-shetty.jpeg',
    tags: ['Mental Health'],
  },
  {
    title: 'The Mel Robbins Podcast',
    summary: `You can change your life and Mel Robbins will show you how. The Mel Robbins Podcast is the #1 podcast on the globe for a reason: Mel’s simple, research-backed advice has changed millions of people’s lives, and in every episode, she’s giving you all her hard-fought secrets, science-backed tools, and deeply personal stories, so you can change yours too. If you’re a new listener, you’re in the right place.`,
    url: 'https://example.com/fullstack-podcast',
    image: '/logos/mel-robbins.jpg',
    tags: ['Self-Improvement'],
  },
]

export default function PodcastsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-12 ">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white">Podcasts</h1>
        <p className="text-md text-gray-400">I find myself listening to way more podcasts than I do music on any given day, here is a couple of my favourite daily listens.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {podcasts.map((podcast, idx) => (
          <a
            key={idx}
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 border border-gray-800 hover:border-gray-600 p-5 rounded-lg bg-gray-900 transition duration-300 transform hover:scale-[1.015]"
          >
            <div className="flex items-center gap-4">
              <img src={podcast.image} alt={podcast.title} className="w-12 h-12 rounded" />
              <div>
                <div className="text-white font-medium leading-tight">{podcast.title}</div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-3">{podcast.summary}</div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-auto">
              {podcast.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}