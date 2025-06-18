const data = [
  {
    key: "1",
    title: "Technology",
    Image: {
      url: "https://cdna.artstation.com/p/assets/images/images/017/862/208/large/drexel-designs-breaking-news-1.jpg?1557621591",
      width: 300,
      height: 420,
      category: "tech",
    },
    bg: "#FFD700",
    description:
      "The future of AI and its applications. The future of AI and its applications.The future of AI and its applications.The future of AI and its applications.The future of AI and its applications.",
    author: {
      name: "Turan Mete",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
  },
  {
    key: "2",
    title: "Nature",
    Image: {
      url: "https://i.redd.it/5cj67d89xay61.jpg",
      width: 300,
      height: 420,
      category: "nature",
    },
    bg: "#90EE90",
    description: "Exploring the untouched forests.",
    author: {
      name: "Ayşe Yılmaz",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
  },
  {
    key: "3",
    title: "Space",
    Image: {
      url: "https://picsum.photos/300/420?random=3",
      width: 300,
      height: 420,
      category: "space",
    },
    bg: "#ADD8E6",
    description: "Journey to the stars and beyond.",
    author: {
      name: "Mehmet Kaya",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  },
];

export type Item = (typeof data)[0];
export default data;
