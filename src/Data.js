const getRandomDate = (start, end) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
};

const addRandomDates = (portfolio) => {
  portfolio.forEach((item) => {
    item.dates = Array.from({ length: 10 }, () =>
      getRandomDate(new Date(2020, 0, 1), new Date())
    );
  });
};

export const featuredPortfolio = [
  {
    id: 1,
    title: "Featured",
    img: "https://entrackr.com/storage/2023/03/Neo-banking-800x400.jpg",
  },
  {
    id: 2,
    title: "Web App",
    img: "https://s3-alpha.figma.com/hub/file/4863312488/29578214-8ce1-4ec0-a1bb-192bcc88068c-cover.png",
  },
  {
    id: 3,
    title: "Mobile App",
    img: "https://static.wixstatic.com/media/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png/v1/fill/w_640,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5af200_5214c616fc0944adad8c6f7350c4d96d~mv2.png",
  },
  {
    id: 4,
    title: "Design",
    img: "https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45868%2FMa5c3baJZjAVQctBP2H43dnXY-QgKp3EiijkrAZ03nCY8GjM5S6kXX3U.jpg&w=640&q=90",
  },
  {
    id: 5,
    title: "Branding",
    img: "https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F45959%2FYO84ccmN1Ln46JApSp03sCi8LA-oQ4q5CSUKio6qpMWXZrraVykmrmEG5.jpg&w=640&q=90",
  },
];

export const webPortfolio = [
  {
    id: 1,
    title: "Web App",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*mxUpX1snuQdDc6JZZyXd0w.png",
  },
  {
    id: 2,
    title: "E-commerce",
    img: "https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/templates/45959/7w99jMPcb1YAc5k4rYUBOL5s-NlUAuqSoyp035XIYQgK6b8T2rWU84g.jpg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: "https://img.freepik.com/free-vector/gradient-business-template-design_23-2149752076.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user",
  },
  {
    id: 4,
    title: "Landing Page",
    img: "https://static.vecteezy.com/system/resources/previews/034/882/713/non_2x/graphic-design-portfolio-template-editable-professional-a5-size-graphic-designer-portfolio-vector.jpg",
  },
  {
    id: 5,
    title: "Dashboard",
    img: "https://as2.ftcdn.net/v2/jpg/06/33/61/73/1000_F_633617353_cIl5T8UEfn6qU1z9ywEgJoqZu0WEXd8X.jpg",
  },
];

export const mobilePortfolio = [
  {
    id: 1,
    title: "Mobile App",
    img: "https://design4users.com/wp-content/uploads/2019/09/language-learning-app-1024x768.png",
  },
  {
    id: 2,
    title: "iOS App",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTtg7gD3fCYSDB2JCaFH_EaHcaC4UDgcS0sjY3YT2pv0gRIAReFh7oNftWVmkiFyJYCE&usqp=CAU",
  },
  {
    id: 3,
    title: "Android App",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808/81ae8b110150003.Y3JvcCwyMzAxLDE4MDAsMTcsMA.png",
  },
  {
    id: 4,
    title: "Hybrid App",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycEe4WxY8oDmn-QItgGkkZqABELfcfAICl6lSwkFZHe5aF4XAPudIMmMY-MPdEfiARi0&usqp=CAU",
  },
  {
    id: 5,
    title: "Mobile Game",
    img: "https://i.ytimg.com/vi/SwrsO-gOJEY/maxresdefault.jpg",
  },
];

export const designPortfolio = [
  {
    id: 1,
    title: "Design",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yxlMWw-hdL2z2Y18P16BYemOZQ2ZX1RVLA&s",
  },
  {
    id: 2,
    title: "UI/UX Design",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/6c4e0f199743979.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    img: "https://ecole-intuit-lab.co.in/wp-content/uploads/fly-images/23396/image-1-scaled-1800x1800.jpeg",
  },
  {
    id: 4,
    title: "Product Design",
    img: "https://img.freepik.com/premium-psd/personal-portfolio-resume-template_150199-18.jpg",
  },
  {
    id: 5,
    title: "Web Design",
    img: "https://i.pinimg.com/originals/81/7c/51/817c514873249cc9f31df87720995d9a.png",
  },
];

export const contentPortfolio = [
  {
    id: 1,
    title: "Content",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/2ebec7201210097.Y3JvcCwzODM1LDMwMDAsMCww.jpg",
  },
  {
    id: 2,
    title: "Blog Post",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynVXefh-WR3CdIzSj7Xg_XLToZAkmfw3vOA&s",
  },
  {
    id: 3,
    title: "Article",
    img: "https://cdn.dribbble.com/userupload/14105311/file/original-95dcb14c506566110195b7fa118972e7.jpg?resize=400x300&vertical=center",
  },
  {
    id: 4,
    title: "Social Media Post",
    img: "https://cdn.dribbble.com/users/3020341/screenshots/16991520/media/11f19a71b7c64d90d5cab09c7f5454cd.png?resize=400x300&vertical=center",
  },
  {
    id: 5,
    title: "Copywriting",
    img: "https://i0.wp.com/www.goodwin.edu/enews/wp-content/uploads/2023/03/what-does-a-medical-coder-do-tiny-scaled.jpg?fit=2560%2C1704&ssl=1",
  },
];

addRandomDates(featuredPortfolio);
addRandomDates(webPortfolio);
addRandomDates(mobilePortfolio);
addRandomDates(designPortfolio);
addRandomDates(contentPortfolio);
